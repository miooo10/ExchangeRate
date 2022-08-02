const currencyOne = document.querySelector('#currency-one')
const amountOne = document.querySelector('.amount-one')
const currencyTwo = document.querySelector('#currency-two')
let amountTwo = document.querySelector('.amount-two')
const swapBtn = document.querySelector('.swap')
const rateInfo = document.querySelector('.rate-info')



const calculate = () => {
	var myHeaders = new Headers();
myHeaders.append("apikey", "vEzMJSfIe0r97ZfeSIZiA2PoWA3wl48i");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${currencyTwo.value}&from=${currencyOne.value}&amount=${amountOne.value}`, requestOptions)
  .then(response => response.json())
  .then(result => {
	const currency1 = currencyOne.value
	const currency2 = currencyTwo.value
	
	
	const rate = result.result
	amountTwo.value = rate.toFixed(2)
	rateInfo.innerHTML = `<span>${amountOne.value} ${currency1}</span> to aktualnie <span>${amountTwo.value} ${currency2}</span>`
	
  })
  .catch(error => console.log('error', error));
}


swapBtn.addEventListener('click', calculate)

