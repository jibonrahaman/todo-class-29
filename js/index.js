let input = document.querySelector (`.input`);

let btn = document.querySelector (`.btn`);
let ul = document.querySelector (`ul`);




btn.addEventListener(`click`, function (){
 if( input.value == ``){
    alert(`Please type anything`)
 }else{
    let li =  document.createElement (`li`);
    li.innerHTML = input.value;
    li.style.fontSize="30px"
    li.style.marginBottom ="20px"
    let span =  document.createElement (`span`);
    span.innerHTML ="Delete"
    span.style.background = "red"
    span.style.color = "white"
    span.style.padding = "10px"
    span.style.marginBottom="50px"
    span.style.marginLeft = "10px"
    span.style.borderRadius = "10px"
    span.style.fontSize="17px"
    ul.appendChild(li);
    li.appendChild(span)

    
 }
})

    ul.addEventListener(`click`,function(e){
 if(e.target.tagName== `LI`){
   alert("please press cross button")
 }else if(e.target.tagName == `SPAN`){
   e.target.parentElement.remove();
 }

    })














