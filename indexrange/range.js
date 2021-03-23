function findrange() {
    event.preventDefault();
    var nif = document.getElementById('niftyVal').value;
    var vi = document.getElementById('vix').value;
    if (nif == "" || vi == "") {
        alert("Please enter values on both fields!!!")
    }
    else {
        nif = parseInt(nif);
        vi = parseInt(vi);
        volm = vi / Math.sqrt(12);
        volw = vi / Math.sqrt(52);
        vold = vi / Math.sqrt(365);

        var ahigh, alow, mhigh, mlow, whigh, wlow, dhigh, dlow;
        ahigh = parseInt(nif + ((nif * vi) / 100));
        alow = parseInt(nif - ((nif * vi) / 100));
        mhigh = parseInt(nif + ((nif * volm) / 100));
        mlow = parseInt(nif - ((nif * volm) / 100));
        whigh = parseInt(nif + ((nif * volw) / 100));
        wlow = parseInt(nif - ((nif * volw) / 100));
        dhigh = parseInt(nif + ((nif * vold) / 100));
        dlow = parseInt(nif - ((nif * vold) / 100));


        document.getElementById('result').innerHTML = "Daily High/Low  = " + dhigh + " - " + dlow + "<br><br>" +
            "Weekly High/Low  = " + whigh + " - " + wlow + "<br><br>" +
            "Monthly High/Low = " + mhigh + " - " + mlow + "<br><br>" +
            "Annual High/Low  = " + ahigh + " - " + alow;
    }
    return false
}


$.get('https://www.nseindia.com/api/option-chain-indices?symbol=NIFTY',
function(response) {  
    console.log(response);
});