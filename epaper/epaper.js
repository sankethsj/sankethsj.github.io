const URL = "https://api.github.com/repos/sankethsj/newspaper-bot/contents/output";

// mapping from file-prefix to display title and region
const PAPER_MAP = {
    'KANPRABHA': { title: 'Kannada Prabha', region: 'Mangaluru' },
    'VISHWAVANI': { title: 'Vishwavani', region: 'Bengaluru' }
};

const PREFERRED_ORDER = ['KANPRABHA', 'VISHWAVANI'];

async function fetchPapers() {
    const response = await fetch(URL);
    if (!response.ok) throw new Error('Failed to fetch papers');
    return await response.json();
}

function extractDateFromName(name) {
    // Find an 8-digit YYYYMMDD token in the filename
    const base = name.split('.')[0];
    const m = base.match(/(\d{8})/);
    if (!m) return null;
    const s = m[1];
    const yyyy = s.slice(0, 4);
    const mm = s.slice(4, 6);
    const dd = s.slice(6, 8);
    const iso = `${yyyy}-${mm}-${dd}`;
    return new Date(iso);
}

function formatDateFromName(name) {
    const d = extractDateFromName(name);
    if (!d || isNaN(d)) return 'Unknown';
    const dd = String(d.getDate()).padStart(2, '0');
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const yyyy = d.getFullYear();
    return `${dd}-${mm}-${yyyy}`;
}

function sizeInMB(bytes) {
    return (bytes / (1024 * 1024)).toFixed(1);
}

fetchPapers().then(res => {
    const container = document.querySelector('.list-papers');
    container.innerHTML = '';

    if (!res || res.length === 0) {
        container.innerHTML = '<h2 class="empty">Papers not available</h2>';
        return;
    }

    // Group by date (YYYY-MM-DD). Files without a date go to 'unknown'.
    const groupsByDate = {};
    res.forEach(item => {
        const dateObj = extractDateFromName(item.name);
        const key = dateObj && !isNaN(dateObj) ? dateObj.toISOString().slice(0, 10) : 'unknown';
        if (!groupsByDate[key]) groupsByDate[key] = [];
        groupsByDate[key].push(item);
    });

    // Sort date keys descending (newest first), keep 'unknown' at the end
    const keys = Object.keys(groupsByDate).sort((a, b) => {
        if (a === 'unknown') return 1;
        if (b === 'unknown') return -1;
        return b.localeCompare(a);
    });

    keys.forEach(dateKey => {
        const displayDate = dateKey === 'unknown' ? 'Unknown Date' : (()=>{
            const d = new Date(dateKey);
            const dd = String(d.getDate()).padStart(2,'0');
            const mm = String(d.getMonth()+1).padStart(2,'0');
            const yyyy = d.getFullYear();
            return `${dd}-${mm}-${yyyy}`;
        })();

        const section = document.createElement('section');
        section.className = 'paper-section';
        section.innerHTML = `<h3 class="section-title">${displayDate} <span class="section-region">${groupsByDate[dateKey].length} papers</span></h3><div class="cards"></div>`;
        const cards = section.querySelector('.cards');

        // Within a date, group by publisher prefix so multiple papers for same date show separately
        const items = groupsByDate[dateKey];
        // sort items by publisher name then filename
        items.sort((a, b) => {
            const pa = (a.name||'').toUpperCase();
            const pb = (b.name||'').toUpperCase();
            return pa.localeCompare(pb);
        });

        items.forEach(item => {
            const base = (item.name || '').split('.')[0];
            const parts = base.split('_');
            const prefix = (parts[0] || 'UNKNOWN').toUpperCase();
            const meta = PAPER_MAP[prefix] || { title: prefix, region: 'Unknown' };

            const date = formatDateFromName(item.name);
            const size = sizeInMB(item.size);
            const url = item.download_url || '#';

            const card = document.createElement('article');
            card.className = 'card';
            card.innerHTML = `
                <div class="card-content">
                    <div class="meta">
                        <div class="paper-name">${meta.title} <span class="region-badge">${meta.region}</span></div>
                        <div class="paper-date">${date}</div>
                    </div>
                    <div class="card-actions">
                        <a class="btn" href="${url}" target="_blank" rel="noopener">Download <span class="size">(${size} MB)</span></a>
                    </div>
                </div>`;
            cards.appendChild(card);
        });

        container.appendChild(section);
    });

}).catch(err => {
    const container = document.querySelector('.list-papers');
    container.innerHTML = `<h2 class="empty">Error loading papers</h2><p class="error">${err.message}</p>`;
});