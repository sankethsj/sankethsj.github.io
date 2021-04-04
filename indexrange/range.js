var ctx = document.getElementById('myChart');
const strike = [];
const calloi = [];
const putoi = [];

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
            tce =ce;
            tpe =pe;
            doi = Math.abs(ce-pe);
            totalce.innerHTML = ce.toLocaleString('en-IN');
            totalpe.innerHTML = pe.toLocaleString('en-IN');
            diffoi.innerHTML = doi.toLocaleString('en-IN');
            
            var signal = document.getElementById('signal');
            if( doi > 5000000 && tpe > tce ){
                signal.innerText = "";
                signal.innerHTML = "Bullish";
                signal.style.color = 'var(--call)';

            } else if( doi > 5000000 && tce > tpe){
                signal.innerText = "";
                signal.innerHTML = "Bearish";
                signal.style.color = 'var(--put)';
            } else{
                signal.innerHTML = "Neutral";
                signal.style.color = 'var(--font-color)';
            }
            
            //chart code
            let arr = out.resultData.data;       
            for(let i=0; i< arr.length; i++){
                strike[i] = arr[i].strike_price
                calloi[i] = arr[i].calls_change_oi
                putoi[i] = arr[i].puts_change_oi
            }
            var myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: strike,
                    datasets: [{
                        label: 'Change in Call OI',
                        data: calloi,
                        borderWidth: 1,
                        backgroundColor: "rgba(0,255,0,0.7)",
                    },
                    {
                        label: 'Change in Put OI',
                        data: putoi,
                        backgroundColor: "rgba(255,0,0,0.7)",
                        borderWidth: 1
                    }]
                },
                options: {
                    maintainAspectRatio:
                        false,
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    },
                }      
            });



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


function showChart(e){
    e.preventDefault();
    document.getElementById('ccontainer').style.display = 'block';
    
}

function hideChart(e){
    e.preventDefault();
    document.getElementById('ccontainer').style.display = 'none';
}