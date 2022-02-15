document.getElementById('generate-btn').addEventListener('click', function () {
    let pin = Math.round(Math.random() * 1000000);
    if ((pin + '').length == 6) {
        document.getElementById('input-pin').value = pin;
    }
})
const output = document.getElementById('output-input')

// let pinOutput;

const buttons = document.getElementsByClassName('button');
for (const button of buttons) {
    button.addEventListener('click', function () {
        const pinOutputPreviousValue = output.value;

        const valueOfButton = button.innerText;
        newOutput = pinOutputPreviousValue + valueOfButton;
        output.value = newOutput;
    })
}
document.getElementById('button-clear').addEventListener('click', function () {
    output.value = "";
})
document.getElementById('button-less').addEventListener('click', function () {
    const newOutput = output.value.slice(0, -1);
    // console.log(out)
    output.value = newOutput;
})
const matcedPin = document.getElementById('matchedpin');
const unMatchedPin = document.getElementById('umnatchedPin');

document.getElementById('submit-btn').addEventListener('click', function () {
    const inputPin = document.getElementById('input-pin').value;
    const outputPin = document.getElementById('output-input').value;

    if (inputPin == outputPin) {
        matcedPin.style.display = 'block';
        unMatchedPin.style.display = 'none';

    }
    else {
        matcedPin.style.display = 'none';
        unMatchedPin.style.display = 'block';
        console.log(unMatchedPin);
    }
})