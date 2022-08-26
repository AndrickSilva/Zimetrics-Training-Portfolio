


let string;

let buttons = document.querySelectorAll(".btn");
let input = document.querySelector("input.screen");
buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        if (e.target.innerHTML == '=') {
            string = input.value;
            string = eval(string);
            input.value = string;
        }
        else if (e.target.innerHTML == 'C') {
            string = ''
            input.value = string;

        } else if (e.target.innerHTML == '&lt;') {
            string = input.value;
            input.value = string.slice(0, -1);
        }

        else {
            string = input.value;
            console.log(e.target.innerHTML);
            string = string + e.target.innerHTML;
            input.value = string;
        }

    });
});