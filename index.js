const container = document.querySelector(".container")
const button = document.getElementById("clearButton")

function creatDiv(newDiv){
    var smalldivsize = ((600/newDiv)-2).toFixed(2)
    var totalnumbDiv = Math.pow(newDiv,2)

    while(totalnumbDiv>0){
        var div = document.createElement("div")
        container.appendChild(div)
        div.classList.add("grid")
        div.style.height = smalldivsize+ 'px'
        div.style.width= smalldivsize+ 'px'
        div.style.border="1px solid black"
        totalnumbDiv--;
    }

    const allDivGrid = document.querySelectorAll(".grid")
    allDivGrid.forEach((grid)=>{
        
        grid.addEventListener("ontouchmove",changeColor)
    })
}

function changeColor(){
    this.style.backgroundColor = "#f14242"
}

function deleteDiv(){
    let user = prompt("Enter the number to create grid boxes")
    if(user>=1 && user<=100){
        while(container.hasChildNodes()){
            container.removeChild(container.lastChild)
        }
        creatDiv(user)
    }else{
        alert("Enter a number between 1 to 100")
        deleteDiv()
    }
}

button.addEventListener("click",deleteDiv)
window.onload=creatDiv(16)