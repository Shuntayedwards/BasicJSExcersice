//When button is clicked background color randomly changes


//Step 1 Grab all DOM Elements that need to be utilized
const bgColor = document.querySelector('body');
const colorBtn= document.querySelector('.colorBtn');

//Do you have a list? will you needs an Array or loop?
const color = ['green', 'yellow', 'black', 'red'];

//Step 2 break down event and function
colorBtn.addEventListener('click', ()=>{
    const random= Math.floor(Math.random()*color.length); // random whole number between 1-4
    bgColor.style.backgroundColor= color[random];
});