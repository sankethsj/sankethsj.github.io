//scroll to top
var stepTime = 0;
var docBody = document.body;
var focElem = document.documentElement;

var scrollAnimationStep = function (initPos, stepAmount) {
    var newPos = initPos - stepAmount > 0 ? initPos - stepAmount : 0;
    docBody.scrollTop = focElem.scrollTop = newPos;
    document.getElementById("myBtn").style.display = "block";
    newPos && setTimeout(function () {
        scrollAnimationStep(newPos, stepAmount);
    }, stepTime);
}

var scrollTopAnimated = function (speed) {
    var topOffset = docBody.scrollTop || focElem.scrollTop;
    var stepAmount = topOffset;

    speed && (stepAmount = (topOffset * stepTime) / speed);

    scrollAnimationStep(topOffset, stepAmount);
};