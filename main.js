let array=[];
let start=document.querySelector("#start");
let score=document.querySelector("#score");
let current_score=0
for(i=1;i<17;i++){
    var images=document.querySelector(`#img${i}`);
  
    array.push(images);
    
}
start.addEventListener('click',()=>{
function Bug_Appears(){
array.forEach(arr => arr.src = "none");
const randomIndex = Math.floor(Math.random() * array.length);
let active_box=array[randomIndex];
active_box.src='bug-fill.svg'
active_box.addEventListener('click',()=>{
    current_score=current_score+1
    score.innerHTML=current_score
    active_box.style.pointerEvents = "none";
})

}
setInterval(Bug_Appears, 2000);
})