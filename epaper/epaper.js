const URL = "https://api.github.com/repos/sankethsj/newspaper-bot/contents/output"

async function logPapers() {
    const response = await fetch(URL);
    return await response.json();
}

logPapers().then(
    res => {
        let ul_elem = document.querySelector('.list-papers');

        if (res && res.length > 0) {
            ul_elem.innerHTML = "";

            // sort by name
            res = res.sort((a, b) => {
                const nameA = a.name.toUpperCase(); // ignore upper and lowercase
                const nameB = b.name.toUpperCase(); // ignore upper and lowercase
                if (nameA < nameB) {
                    return 1;
                }
                if (nameA > nameB) {
                    return -1;
                }

                // names must be equal
                return 0;
            });

            res.forEach(paper => {
                let size_in_mb = Math.round(paper["size"] / 1000000, 2);
                let paper_name_split = paper["name"].split(".")[0].split("_")
                let date_string = paper_name_split[paper_name_split.length - 1]
                let yyyy = date_string.slice(0, 4)
                let mm = date_string.slice(4, 6)
                let dd = date_string.slice(6, 8)
                date_string = `${dd}-${mm}-${yyyy}`

                var elem = `<li>
                                    <h2>Date : ${date_string}</h2>
                                    <h3>Mangaluru region</h3>
                                    <a class="my-button" href="${paper['download_url']}"> Download (${size_in_mb} MB)</a>
                                </li>`;
                ul_elem.insertAdjacentHTML('beforeEnd', elem);
            });
        } else {
            ul_elem.innerHTML = "<h2>Papers not Available!</h2>";
        }


    }
)