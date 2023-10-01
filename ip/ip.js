const title = document.querySelector('.title');
const ipaddress = document.querySelector('.ip-address');
const ipfact = document.querySelector('.ip-fact');
const toast = document.querySelector('.toast');
const URL = 'https://httpbin.org/get';
const FACT_URL = 'http://numbersapi.com/';

let my_ip;
let number_fact;

function get_number_fact(num) {
    fetch(`${FACT_URL}${num}`).then(
        (res) => res.text()
    ).then(
        (res) => {
            let elem = `<p class="fact">${res}</p>`
            ipfact.insertAdjacentHTML('beforeend', elem);
            return res;
        }
    )
}

fetch(URL).then(
    (res) => res.json()
).then(
    (res) => {
        console.log(res);
        my_ip = res.origin
        my_ip = my_ip.replace(",", "\n");
        ipaddress.innerText = my_ip;
        title.innerText = "Your Internet Protocol Address is";
        // let ip_numbers = my_ip.split('.');
        // ip_numbers.forEach(element => {
        //     get_number_fact(element);
        // });
    }
)

ipaddress.addEventListener('click', () => {
    navigator.clipboard.writeText(ipaddress.innerText);

    toast.classList.add("toast-show");

    setTimeout(() => {
        toast.classList.remove("toast-show");
    }, 2700);
})
