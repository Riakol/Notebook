let list = document.querySelector('#list');
let textarea = document.querySelector('#textarea');

let notes = {};
let edit = false; 
let key;

textarea.addEventListener('blur', function() {
    if(edit) {
        notes[key] = this.value;
        this.value = '';

        edit = false;
        key = undefined;
    }else {
   let date = new Date;
   let now = addZero(date.getHours()) + ':' + 
             addZero(date.getMinutes()) + ':' +
             addZero(date.getSeconds()) + ' ' +
             addZero(date.getDate()) + '.' +
             addZero(date.getMonth() + 1) + '.' +
             date.getFullYear();

             notes[now] = this.value;
             this.value = '';

             let li = document.createElement('li');
             li.innerHTML = now;
             list.appendChild(li);
             
             let self = this;
             li.addEventListener('click', function() {
                self.value = notes[this.innerHTML];
                edit = true;
                key = this.innerHTML;
             });
    }         
});

function addZero (num) {
    if (num >= 0 && num <= 9) {
        return '0' + num;
    } else {
        return num;
    }
}