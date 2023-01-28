'use strict'

let screen = document.querySelector('.screen'),
    btns = document.querySelectorAll('.btn'),
    equal = document.querySelector('.btn-equal'),
    clear = document.querySelector('.btn-clear');

  
btns.forEach((btn) => {

    let calc = (e) => {

        if (e.target == equal) {

            screen.textContent = eval(screen.textContent);

            // screen.textContent = calc();
      
        } else if (e.target == clear) {

            screen.textContent = '0';

        } else if (screen.textContent == 0) {
            screen.textContent = '';
            screen.textContent += e.target.dataset.value;
         
        } else {
            screen.textContent += e.target.dataset.value;
        }
    };
        
    btn.addEventListener('click', calc);
});