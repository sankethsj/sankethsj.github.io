const toggleSwitch = document.querySelector('#dark-mode');
const currentTheme = localStorage.getItem('theme');

function switchTheme(e){
    const currentTheme = localStorage.getItem('theme');
    if(currentTheme == 'light'){
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    else if(currentTheme == 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}

if(currentTheme){
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme',currentTheme);
}
else{
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme','light');
}

console.log("I don't know what you're looking for here, but I'm glad you're here. Have a great day!");