// phone price handaler
const phoneIncrease = document.getElementById('phone-increase');
phoneIncrease.addEventListener('click', function () {
    const counter = document.getElementById('counter');
    const counterNumber = parseFloat(counter.value);
    const counterIncreaseValue = counterNumber + 1;
    counter.value = counterIncreaseValue;
    const phonePrice = document.getElementById('phone-price');
    const increasePrice = counterIncreaseValue * 1219;
    phonePrice.innerText = increasePrice;
})

const phoneDecrease = document.getElementById('phone-decrease');
phoneDecrease.addEventListener('click', function () {
    const counter = document.getElementById('counter');
    const counterNumber = parseFloat(counter.value);
    const counterIncreaseValue = counterNumber - 1;
    counter.value = counterIncreaseValue;
    const phonePrice = document.getElementById('phone-price');
    const increasePrice = counterIncreaseValue * 1219;
    phonePrice.innerText = increasePrice;
})

