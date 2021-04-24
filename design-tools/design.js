// data
var data = [
    {
        'name': 'Metatags',
        'desc': 'This tool can help you to test and view your website\'s preview when viewed on Google, Facebook, or Twitter.',
        'link': 'https://metatags.io'
    },
    {
        'name': 'ExtractCSS',
        'desc': 'This tool can help you to extract element Id, class, and inline styles from HTML documents and output them as CSS stylesheets.',
        'link': 'https://extractcss.com/'
    },
    {
        'name': 'WhatRuns',
        'desc': 'This tool can help you to peek at other site\'s themes, plugins, and server info used. WhatRuns can be installed on @firefox and chrome.',
        'link': 'https://www.whatruns.com/'
    },
    {
        'name': 'Unminify',
        'desc': 'Free tool to unminify javascript, CSS, HTML, XML, and JSON code making it readable and pretty.',
        'link': 'https://unminify.com/'
    },
    {
        'name': 'Responsively App',
        'desc': 'This browser is designed to help you see what your website like on different technology devices at once.',
        'link': 'https://responsively.app/'
    },
    {
        'name': 'Colordot',
        'desc': 'A color picker for humans.',
        'link': 'https://color.hailpixel.com'
    },
    {
        'name': 'Stylify Me',
        'desc': 'Online style guide generator.',
        'link': 'https://stylifyme.com'
    },
    {
        'name': 'uiGradients',
        'desc': 'Beautiful colored gradients.',
        'link': 'https://uigradients.com'
    },
    {
        'name': 'Colors and Fonts',
        'desc': 'Yup. You get Colors and fonts here.',
        'link': 'https://colorsandfonts.com'
    },
    {
        'name': 'Pexels',
        'desc': 'The best free stock photos & videos shared by talented creators.',
        'link': 'https://pexels.com'
    },
    {
        'name': 'Landing Stock',
        'desc': 'Landing Stock is a niche site providing free stock photos that are suitable for your website landing page. Created by London-based product designer Craig Barber, it features only high-quality, clean, and minimalistic photos.',
        'link': 'https://landingstock.com'
    },
    {
        'name': 'StockSnap',
        'desc': 'With a large selection of free high-definition stock photos, StockSnap offers a valuable resource to web designers, bloggers, and content curators.',
        'link': 'https://StockSnap.io'
    },
    {
        'name': 'Free Images',
        'desc': 'Free Images gallery of more than 350,000 stock photos is categorized and searchable.',
        'link': 'https://freeimages.com'
    },
    {
        'name': 'Photo Creator',
        'desc': 'CREATE YOUR REALISTIC PHOTOS IN MINUTES. Choose from thousands of models, objects, and backgrounds to perfectly tell any story.',
        'link': 'https://icons8.com/creator'
    },
    {
        'name': 'Rgbstock',
        'desc': 'Are you looking for fabulous free stock images?  Rgbstock has a huge number of high-quality free stock photos and dazzling free graphics for illustrations, wallpapers, and backgrounds.',
        'link': 'https://rgbstock.com/photo/nBNFJP0'
    },
    {
        'name': 'Logaster logo maker',
        'desc': 'Online logo maker.',
        'link': 'https://logaster.com/logo'
    },
    {
        'name': 'Noun Project',
        'desc': 'Beautiful icons for your projects',
        'link': 'http://thenounproject.com'
    },
    {
        'name': 'Vector illustrations',
        'desc': 'So many icons and illustrations to choose from.',
        'link': 'https://icons8.com'
    },
    {
        'name': 'Drawkit',
        'desc': 'DrawKit is a collection of free, beautiful, customizable MIT licensed SVG illustrations in two styles, to use on your next website, app, or project.',
        'link': 'https://drawkit.io'
    },
    {
        'name': 'Lukasz Adam Free Illustrations',
        'desc': 'Lukasz Adam is an independent web designer who\'s made a bunch of high-quality vector art illustrations and icons available for free. They can be used for personal and commercial projects.',
        'link': 'https://lukaszadam.com/illustrations'
    },
    {
        'name': 'Ionicons',
        'desc': 'Ionicons are premium icons for use by designers in web, iOS, Android, and desktop apps. Built by the Ionic Framework team, they\'re all free and open source.',
        'link': 'https://ionicons.com'
    },
    {
        'name': 'Animaticons',
        'desc': 'Animaticons is a set of high-resolution animated GIFs that you can customize. They are small in file size, compatible with all major browsers, emails, and smartphones.',
        'link': 'https://animaticons.co'
    },
    {
        'name': 'Type Genius',
        'desc': 'The site makes it simple to find the perfect font combination, offering multiple suggested pairings for any typeface selected. It also provides real-world examples of combos used on other websites. ',
        'link': 'https://webdesignledger.com/type-genius-webapp/'
    },
    {
        'name': 'Pixlr',
        'desc': 'The Pixlr Editor is similar to Photoshop, Pixlr Express is perfect for quick fixes, and Pixler O-Matic features easy-to-use pre-made filters that can be applied to photos.',
        'link': 'https://pixlr.com'
    },
    {
        'name': 'Coolors',
        'desc': 'The super fast color schemes generator! Create the perfect palette or get inspired by thousands of beautiful color schemes.',
        'link': 'https://coolors.co'
    },
    {
        'name': 'Dribbble',
        'desc': 'Discover the world’s top designers & creatives. Dribbble is the leading destination to find & showcase creative work and home to the world\'s best design professionals. ',
        'link': 'https://dribbble.com'
    },
    {
        'name': 'Unsplash Source',
        'desc': 'Simple embedding for Unsplash photos.',
        'link': 'https://source.unsplash.com/'
    },
    {
        'name': 'Infinity Free',
        'desc': 'Free Website Hosting Services',
        'link': 'https://infinityfree.net'
    },
    {
        'name': 'Award Space',
        'desc': 'Free Website Hosting Services',
        'link': 'http://awardspace.com'
    },
    {
        'name': 'Free Hostia',
        'desc': 'Free Website Hosting Services',
        'link': 'https://freehostia.com'
    },
    {
        'name': 'Google Cloud Hosting',
        'desc': 'Free Website Hosting Services',
        'link': 'https://cloud.google.com/solutions/web-hosting'
    }
]
const wrapper = document.getElementById('wrapper');
data.forEach(d => {

    var temp = `<li class="articles__article" style="--animation-order:1">
    <a class="articles__link" href="${d.link}" target="_blank">
        <div class="articles__content articles__content--lhs">
        <h1 class="articles__title">${d.name}</h1>
            <h4 class="articles__desc">${d.desc}</h4>
            <div class="articles__footer">
                <p>${d.link}</p>
            </div>
        </div>
        <div class="articles__content articles__content--rhs" aria-hidden="true">
        <h1 class="articles__title">${d.name}</h1>
        <h4 class="articles__desc">${d.desc}</h4>
            <div class="articles__footer">
                <p>${d.link}</p>
            </div>
        </div>
    </a>
    </li>`;
    wrapper.insertAdjacentHTML('beforeend', temp);

});



//scroll to top
function scrolltop(e) {
    e.preventDefault();
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
mybutton = document.getElementById('top');
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "flex";
    } else {
        mybutton.style.display = "none";
    }
}
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "flex";
} else {
    mybutton.style.display = "none";
}


//dark-mode code
const toggleSwitch = document.querySelector('.fa-moon-o');
const currentTheme = localStorage.getItem('theme');
toggleSwitch.addEventListener('click', switchTheme);
function switchTheme(e) {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme == 'light') {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    else if (currentTheme == 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
}
else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
}