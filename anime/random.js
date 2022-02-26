
MAX_WIDTH = window.innerWidth;
MAX_HEIGHT = window.innerHeight;
PADDING = 20;
GOAL_BORDER = 40;

let no_delay = true;
let won = false;

console.log("Max : ", MAX_WIDTH, MAX_HEIGHT);

document.addEventListener('mousemove', printMousePos, true);

var box = document.getElementById('box');
var goal = document.getElementById('goal');
goal.style.top = `${getRandomInt(100, MAX_HEIGHT - 100)}px`;
goal.style.left = `${getRandomInt(100, MAX_WIDTH - 100)}px`;

var grect = goal.getBoundingClientRect();

var [gtop, gright, gbottom, gleft] = [
    grect.top - GOAL_BORDER,
    grect.right + GOAL_BORDER,
    grect.bottom + GOAL_BORDER,
    grect.left - GOAL_BORDER
];
console.log("Goal:", gtop, gright, gbottom, gleft);


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
    //The maximum is exclusive and the minimum is inclusive
}

function check_goal() {

    var brect = box.getBoundingClientRect();
    var [btop, bright, bbottom, bleft] = [brect.top, brect.right, brect.bottom, brect.left];

    if (btop > gtop && bright < gright && bbottom < gbottom && bleft > gleft) {
        won = true;
        document.removeEventListener("mousemove", printMousePos, true);
        console.log("WINNER");
        winAnimation();
    } else {
        won = false;
    }
}

function winAnimation() {
    console.log(grect);
    var winAnim = anime({
        targets: '.box',
        left: grect.left + 20,
        top: grect.top + 20,
        easing: 'easeInOutQuad'
    });
    winAnim.play();
    winAnim.finished.then(()=>{
        anime({
            targets: 'body',
            backgroundColor: "#fffb2c",
            easing: 'easeInOutQuad',
            duration: 3000
        });
    })

    
    
}

function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    return array;
}


function printMousePos(e) {
    var mouseX = e.pageX;
    var mouseY = e.pageY;

    if (no_delay && !won) {

        // var xval = getRandomInt(PADDING, mouseX - PADDING);
        // var yval = getRandomInt(PADDING, mouseY - PADDING);

        var left = mouseX + PADDING;
        var right = MAX_WIDTH - mouseX + PADDING;
        var top = mouseY + PADDING;
        var bottom = MAX_HEIGHT - mouseY + PADDING;

        if (left > MAX_WIDTH) { left = MAX_WIDTH - PADDING }
        else if (right > MAX_WIDTH) { right = MAX_WIDTH - PADDING }
        else if (top > MAX_HEIGHT) { top = MAX_HEIGHT - PADDING }
        else if (bottom > MAX_HEIGHT) { bottom = MAX_HEIGHT - PADDING }

        var x_item = shuffle([left, right]);
        var y_item = shuffle([top, bottom]);

        no_delay = false;

        var animation = anime({
            targets: '.box',
            left: `${x_item[0]}px`,
            top: `${y_item[0]}px`,
            easing: 'easeInOutQuad'
        });
        animation.play()
        animation.finished.then(check_goal);

        delay();

    }
}
function delay() {
    setTimeout(() => {
        no_delay = true;
    }, 800);
}