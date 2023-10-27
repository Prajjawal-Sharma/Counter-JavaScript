var count=0;

var increment=document.getElementById("incrementbtn");
var decrement=document.getElementById("decrementbtn");
var reset=document.getElementById("resetbtn");
var display=document.getElementById("count");

increment.addEventListener('click',incrementcount);
decrement.addEventListener('click',decrementcount);
reset.addEventListener('click',resetcount);


function incrementcount(){
    count++;
    updateCount()
}
function decrementcount(){
    count--;
    updateCount()
}
function resetcount(){
    count=0;
    updateCount()
}
function updateCount(){
    display.textContent=count;
if(count>0){
    display.style.color='green';
}else if(count===0){
    display.style.color='white';
}else{
    display.style.color='red';
}
}