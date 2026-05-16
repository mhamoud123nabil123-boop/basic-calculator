let buttons=document.querySelectorAll("button")
let result=document.querySelector("#result")


for (let index = 0; index < buttons.length; index++) {
    buttons[index].addEventListener("click",()=>{
        let buttonValue=buttons[index].textContent
        if (buttonValue === "C") {
            clearData()
        }
        else if(buttonValue === "=") {
            resultData()
        }
        else{
            appendData(buttonValue)
        }
    })
}

function clearData(){
    result.value=""
}

function resultData(){
    result.value=eval(result.value)
}

function appendData(buttonValue){
    result.value+=buttonValue
}