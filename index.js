let count = 0
let normalCount =document.getElementById("count-el")
let saveEl=document.getElementById("save-el")

function increment(){
   count+=1
   normalCount.innerHTML= count
}

function save(){
     let countStr=count+" -"
     saveEl.innerHTML += countStr
     normalCount.innerHTML=0
     count=0
     
   

   

   

}