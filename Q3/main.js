let add = document.getElementById('increment');
let remove = document.getElementById('decrement');

let numb = document.getElementById('number');
let integer = 0;

add.addEventListener('click',() =>{

    integer +=1;
    numb.innerHTML = integer;

})

remove.addEventListener('click',() =>{
    if  (integer >=1)
    {
    integer -= 1
    numb.innerHTML = integer;
    }
    
})