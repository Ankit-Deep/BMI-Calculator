const form = document.querySelector('form');
const colors = document.querySelectorAll('.color');
const body = document.querySelector('body');
const option = document.querySelector('#options');

//Code of Changing Color
colors.forEach( (e) => {
    console.log(e);
    e.addEventListener('click', (color)=> {
        console.log(color.target);
        if (color.target.id === 'black') {
            body.style.backgroundColor = 'black';
            body.style.color = 'white';
        } else if (color.target.id === 'green') {
            body.style.backgroundColor = "rgb(88, 210, 88)";
            body.style.color = 'black';
        } else if (color.target.id === 'blue') {
            body.style.backgroundColor = 'rgb(44, 118, 193)';
            body.style.color = 'black';
        } else if (color.target.id === 'red') {
            body.style.backgroundColor = 'rgb(227, 30, 30)';
            body.style.color = 'black';
        } else {
            body.style.backgroundColor = 'rgb(232, 119, 33)';
            body.style.color = 'black';
        }
    })
})

//Code for the BMI:
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('.result');

    if ( height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = 'Please Enter valid height or other values.';
    } else if (weight === '' || weight <0 || isNaN(weight)) {
        result.innerHTML = 'Please Enter valid weight or other values.';
    } else {
        const bmi = ( weight / ((height*height) / 10000)).toFixed(2);
        if (bmi < 18.5) {
            result.innerHTML = `<span>Your BMI is <u>${bmi}</u> and You are <u>underweight</u> </span>`;
        } else if (bmi >= 18.5 && bmi <=25 ) {
            result.innerHTML = `<span>Your BMI is <u>${bmi}</u> and You are <u>normal</u></span>`;
        } else {
            result.innerHTML = `<span>Your BMI is <u>${bmi}</u> and You are <u>overweight</u></span>`;
        }
    }
});