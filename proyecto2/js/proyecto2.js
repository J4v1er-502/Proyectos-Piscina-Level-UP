window.onload = function() {
    let counter = 0;

    const numberCounter = document.querySelector('#numberCounter');
    const buttons = document.querySelectorAll('.button')

    buttons.forEach(button => {
        button.addEventListener('click', function(i) {

            const style = i.currentTarget.classList;

            if(style.contains('decrease')) {
                counter--;
            }
            else if(style.contains('increase')) {
                counter++;
            }
            else {
                counter = 0;
            }
            numberCounter.textContent = counter; 

            if(counter > 0) {
                numberCounter.style.color = "green";
            }
            if(counter < 0) {
                numberCounter.style.color = "red";
            }
            if(counter === 0) {
                numberCounter.style.color = "black";
            }
        })
    })
}