
var option = document.getElementById('index').value;
console.log(option);

function changeoi(that){
    runoi(that.value);
}

function runoi(option) {
    const url = 'https://api.niftytrader.in/api/FinNiftyOI/niftyoilistData?reqType=' + option;
    fetch(url)
        .then(res => res.json())
        .then((out) => {
            console.log('Checkout this JSON! ', out);

            var oidata = document.getElementById("oidata");
            var totalce = document.getElementById("totalce");
            var totalpe = document.getElementById("totalpe");
            var diffoi = document.getElementById("diffoi");
            var pcr = document.getElementById("pcr");
            let ce = 0, pe = 0;
            out.resultData.data.forEach(function (element) {
                ce = ce + element.calls_oi;
                pe = pe + element.puts_oi;
                ratio = ce / pe;
            });
            totalce.innerHTML = ce.toLocaleString('en-IN');
            totalpe.innerHTML = pe.toLocaleString('en-IN');
            diffoi.innerHTML = (ce - pe).toLocaleString('en-IN');
            pcr.innerHTML = ratio.toPrecision(3);

            var place = document.createElement("showData");
            var table = document.createElement('table');

            const list = out.resultData.data;
            var col = [];
            for (var i = 0; i < list.length; i++) {
                for (var key in list[i]) {
                    if (col.indexOf(key) === -1) {
                        col.push(key);
                    }
                }
            }

            var tr = table.insertRow(-1);
            for (var i = 0; i < col.length; i++) {
                var th = document.createElement("th");
                th.innerHTML = col[i];
                tr.appendChild(th);
            }
            // add json data to the table as rows.
            for (var i = 0; i < list.length; i++) {

                tr = table.insertRow(-1);

                for (var j = 0; j < col.length; j++) {
                    var tabCell = tr.insertCell(-1);
                    tabCell.innerHTML = list[i][col[j]];
                }
            }

            var divShowData = document.getElementById('showData');
            divShowData.innerHTML = "";
            divShowData.appendChild(table);
        })
        .catch(err => { throw err });
}
runoi(option);



