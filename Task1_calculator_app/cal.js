let input = document.getElementById('input');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
let isEqualClicked = false;

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (isEqualClicked && /[0-9]/.test(e.target.innerHTML)) {
            // Reset the string when a digit is clicked after '='
            string = "";
            isEqualClicked = false;
        }

        if (e.target.innerHTML === '=') {
            isEqualClicked = true;
            string = eval(string);
            input.value = string;
        } else if (e.target.innerHTML === 'AC') {
            string = "";
            input.value = string;
        } else if (e.target.innerHTML === 'Del') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        } else {
            isEqualClicked = false;
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});
