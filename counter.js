text=document.querySelector(".text");
plus=document.querySelector(".plus");
minus=document.querySelector(".minus");
reset=document.querySelector(".reset");

let count = 0;
//   console.log(count);

plus.addEventListener('click',()=>{
    count=count+1;
    // console.log(count);
    text.innerText=count;
    if(count>=0){
    text.style.color='white';
}
else{
    text.style.color='#fc0a08';
}
})
minus.addEventListener('click',()=>{
    count=count-1;
    // console.log(count);
    text.innerText=count;
    if(count>=0){
    text.style.color='white';
}
else{
    text.style.color='#fc0a08';
}
})
reset.addEventListener('click',()=>{
    count=0;
    text.innerText=count;
        if(count>=0){
    text.style.color='white';
}
else{
    text.style.color='#fc0a08';
}
})