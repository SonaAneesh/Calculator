const screen = document.querySelector('#input');
const clearBtn = document.querySelector('.ac-btn')
const equalBtn = document.querySelector('.equal-btn')
const deleteBtn = document.querySelector('.delete-btn')

clearBtn.addEventListener('click',clear);
deleteBtn.addEventListener('click',del);
equalBtn.addEventListener('click',result);

function display(val){
  screen.value += val;
}

function clear(){
  screen.value = "";
}
function del(){
  screen.value = screen.value.slice(0,-1); 
}
function result(){
  let answer = eval(screen.value)
  screen.value = answer;
}




