
function changeoi(that) {
    if (that.value == 'niftyoichange') {
        localStorage.setItem('index','niftyoichange');
    } else if(that.value == 'bankniftyoichange'){
        localStorage.setItem('index','bankniftyoichange');
    }
    runoi(that.value);
}

function runoi(option) {
    const url = 'https://api.niftytrader.in/api/FinNiftyOI/niftyoichange?reqType=' + option;
    fetch(url)
        .then(res => res.json())
        .then((out) => {
            var oidata = document.getElementById("oidata");
            var totalce = document.getElementById("totalce");
            var totalpe = document.getElementById("totalpe");
            var diffoi = document.getElementById("diffoi");
            let ce = 0, pe = 0;
            out.resultData.data.forEach(function (element) {
                ce = ce + element.calls_change_oi;
                pe = pe + element.puts_change_oi;
            });
            totalce.innerHTML = ce.toLocaleString('en-IN');
            totalpe.innerHTML = pe.toLocaleString('en-IN');
            diffoi.innerHTML = (ce - pe).toLocaleString('en-IN');


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

var option = localStorage.getItem('index');
if(!option){
    localStorage.setItem('index','niftyoichange');
    var option = localStorage.getItem('index');
}
document.getElementById('index').value = option;
runoi(option);





