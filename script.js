let display = document.getElementById('input-box');
let buttons = document.querySelectorAll('button');
let buttonsArray = Array.from(buttons);
let string = '';

buttonsArray.forEach(btn => {

    btn.addEventListener('click',(e) => {

        if (e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            display.value = string;
        }
           
        else if (e.target.innerHTML == 'AC') {
            string = '';
            display.value = string;
        }
            
        else if (e.target.innerHTML == '=') {


            try {
                if (string.length === 0 || ['+', '-', '*', '/'].includes(string.slice(-1))) {
                    display.value = 'Error';
                    string = '';
                    setTimeout(() => {
                        display.value = '';
                    }, 1000);
                } else {
                    string = eval(string).toString();
                    display.value = string;
                }
            } catch {
                display.value = 'Error';
                string = '';
                setTimeout(() => {
                    display.value = '';
                }, 1000);
            }
        }
        else if (e.target.innerHTML === '%') {
            try {
                if (string === '' || ['+', '-', '*', '/'].includes(string.slice(-1))) {
                    display.value = 'Error';
                    string = '';
                    setTimeout(() => {
                        display.value = '';
                    }, 1000);
                } else {
                    string = (eval(string) / 100).toString();
                    display.value = string;
                }
            } catch {
                display.value = 'Error';
                string = '';
                setTimeout(() => {
                    display.value = '';
                }, 1000); 
            }
            
            // string = (parseFloat(string) / 100).toString();
            // display.value = string;
        }
    
        else {
                string += e.target.innerHTML;
                display.value = string;
        }
        
    });
});


