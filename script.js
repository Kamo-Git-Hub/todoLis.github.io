let list = document.querySelector("ul")
let error =document.querySelector(".error")


    
let todoList =  document.getElementById("list")

list = addEventListener("click",(e)=>{
     if(e.target.tagName ==="SPAN"){
        let div =e.target.parentNode;
        div.remove()
    }
})



function newElement(){
    
    let inputValue = document.getElementById("toDoL").value
    let li =document.createElement("li")
    let text = document.createTextNode(inputValue)

    

    
    li.appendChild(text)
    if(inputValue ==""){
        
        error.innerHTML ="THE TEXT STRING IS EMPTY"
        setTimeout(()=>{
            error.innerHTML=" "
        },2000)
    }
    else if(inputValue.length>50){
        error.innerHTML ="MAXIMUM  QUANTITY SYMBOL 50"
        setTimeout(()=>{
            error.innerHTML=" "
        },2000)
    }
    
    else{ todoList.appendChild(li)
         
    }
    document.getElementById("toDoL").value =""
    let span = document.createElement("span")
    let txt = document.createTextNode("x")
    span.className = "close"
    span.appendChild(txt)
   li.appendChild(span)
 
}



