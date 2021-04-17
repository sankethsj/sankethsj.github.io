const digits = [
    {
        0: [    // 0
            { hour: 6, minute: 15 },
            { hour: 9, minute: 30 },
            { hour: 6, minute: 0 },
            { hour: 0, minute: 30 },
            { hour: 3, minute: 0 },
            { hour: 0, minute: 45 }
        ]
    }, {
        1: [ // 1
            { hour: 7.5, minute: 37.5 },
            { hour: 6, minute: 30 },
            { hour: 7.5, minute: 37.5 },
            { hour: 6, minute: 0 },
            { hour: 7.5, minute: 37.5 },
            { hour: 0, minute: 0 }
        ]
    }, {
        2: [ // 2
            { hour: 3, minute: 15 },
            { hour: 9, minute: 30 },
            { hour: 6, minute: 15 },
            { hour: 0, minute: 45 },
            { hour: 0, minute: 15 },
            { hour: 9, minute: 45 }
        ]
    }, {
        3: [ // 3
            { hour: 3, minute: 15 },
            { hour: 9, minute: 30 },
            { hour: 3, minute: 15 },
            { hour: 9, minute: 0 },
            { hour: 3, minute: 15 },
            { hour: 9, minute: 0 }
        ]
    }, {
        4: [ // 4
            { hour: 6, minute: 30 },
            { hour: 6, minute: 30 },
            { hour: 0, minute: 15 },
            { hour: 6, minute: 0 },
            { hour: 7.5, minute: 37.5 },
            { hour: 0, minute: 0 }
        ]
    }, {
        5: [ // 5
            { hour: 6, minute: 15 },
            { hour: 9, minute: 45 },
            { hour: 0, minute: 15 },
            { hour: 6, minute: 45 },
            { hour: 3, minute: 15 },
            { hour: 0, minute: 45 }
        ]
    }, {
        6: [ // 6
            { hour: 6, minute: 15 },
            { hour: 9, minute: 45 },
            { hour: 6, minute: 0 },
            { hour: 6, minute: 45 },
            { hour: 0, minute: 15 },
            { hour: 0, minute: 45 }
        ]
    }, {
        7: [ // 7
            { hour: 3, minute: 15 },
            { hour: 6, minute: 45 },
            { hour: 7.5, minute: 37.5 },
            { hour: 6, minute: 0 },
            { hour: 7.5, minute: 37.5 },
            { hour: 0, minute: 0 }
        ]
    }, {
        8: [ // 8
            { hour: 6, minute: 15 },
            { hour: 6, minute: 45 },
            { hour: 0, minute: 15 },
            { hour: 0, minute: 45 },
            { hour: 0, minute: 15 },
            { hour: 0, minute: 45 }
        ]
    }, {
        9: [ // 9
            { hour: 6, minute: 15 },
            { hour: 6, minute: 45 },
            { hour: 3, minute: 0 },
            { hour: 6, minute: 0 },
            { hour: 3, minute: 15 },
            { hour: 0, minute: 45 }
        ]
    }
];

// function that rotates the hands
function digit1(nmbr) {
    // get the current Date object from which we can obtain the current hour, minute and second
    let n = digits[nmbr];
    let digi = n[nmbr];
    count = 1;
    digi.forEach(e => {

        // actual deg to rotate
        const minutesRotate = e.minute * 6;
        const hoursRotate = e.hour * 30;

        // apply the rotate style to each element
        // use backtick `` instead of single quotes ''
        let h11 = document.getElementById(`h1${count}`);
        let m11 = document.getElementById(`m1${count}`);
        h11.style.transform = `rotate(${minutesRotate}deg)`;
        m11.style.transform = `rotate(${hoursRotate}deg)`;
        count++;
    });
}
function digit2(nmbr) {
    // get the current Date object from which we can obtain the current hour, minute and second
    let n = digits[nmbr];
    let digi = n[nmbr];
    count = 1;
    digi.forEach(e => {

        // actual deg to rotate
        const minutesRotate = e.minute * 6;
        const hoursRotate = e.hour * 30;

        // apply the rotate style to each element
        // use backtick `` instead of single quotes ''
        let h11 = document.getElementById(`h2${count}`);
        let m11 = document.getElementById(`m2${count}`);
        h11.style.transform = `rotate(${minutesRotate}deg)`;
        m11.style.transform = `rotate(${hoursRotate}deg)`;
        count++;
    });
}
function digit3(nmbr) {
    // get the current Date object from which we can obtain the current hour, minute and second
    let n = digits[nmbr];
    let digi = n[nmbr];
    count = 1;
    digi.forEach(e => {

        // actual deg to rotate
        const minutesRotate = e.minute * 6;
        const hoursRotate = e.hour * 30;

        // apply the rotate style to each element
        // use backtick `` instead of single quotes ''
        let h11 = document.getElementById(`h3${count}`);
        let m11 = document.getElementById(`m3${count}`);
        h11.style.transform = `rotate(${minutesRotate}deg)`;
        m11.style.transform = `rotate(${hoursRotate}deg)`;
        count++;
    });
}
function digit4(nmbr) {
    // get the current Date object from which we can obtain the current hour, minute and second
    let n = digits[nmbr];
    let digi = n[nmbr];
    count = 1;
    digi.forEach(e => {

        // actual deg to rotate
        const minutesRotate = e.minute * 6;
        const hoursRotate = e.hour * 30;

        // apply the rotate style to each element
        // use backtick `` instead of single quotes ''
        let h11 = document.getElementById(`h4${count}`);
        let m11 = document.getElementById(`m4${count}`);
        h11.style.transform = `rotate(${minutesRotate}deg)`;
        m11.style.transform = `rotate(${hoursRotate}deg)`;
        count++;
    });
}
// for every 1000 milliseconds(ie, 1 second) interval, activate the rotate() function.


setInterval(() => {
    const currentDate = new Date();
    let hr = currentDate.getHours();
    let mn = currentDate.getMinutes();
    let hrstr = hr.toString();
    let mnstr = mn.toString();
    if(mnstr.length<2){
        mnstr = "0"+mnstr;
    }
    digit1(hrstr.slice(0, 1));
    digit2(hrstr.slice(1, 2));
    digit3(mnstr.slice(0, 1));
    digit4(mnstr.slice(1, 2));
}, 1000);

//dark-mode code
const toggleSwitch = document.querySelector('.fa-moon-o');
const currentTheme = localStorage.getItem('theme');
toggleSwitch.addEventListener('click', switchTheme);
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
