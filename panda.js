console.log("welcome to panda mart");
const redColor=document.getElementsByTagName("h1")
for (const red of redColor)
{
     red.style.color="#be1d1d"
}
const bag =document.getElementById("bag-head").style.textAlign="center"

const radius=document.getElementsByClassName("radius")
for (rad of radius){
    rad.style.borderRadius = "25px";
}

document.getElementById("card-button").addEventListener('click',function (event) {
    event.target.parentNode.removeChild(event.target)
})

document.getElementById("exampleInputEmail1").addEventListener('keyup',function (event) {
   if( event.target.value=="email"){
       document.getElementById("submit").removeAttribute("disabled");
   }
   else{
    document.getElementById("submit").setAttribute("disabled","true");
   }
})

const email= document.getElementById("email");
email.addEventListener("dblclick",function (event) {
    email.style.backgroundColor="#bdf9ff80"
})

const image4=document.getElementById("image4")
image4.addEventListener('mouseover',function (event) {
    image4.src="https://5.imimg.com/data5/RK/LT/MY-2379745/rexine-school-bag-500x500.png"
})