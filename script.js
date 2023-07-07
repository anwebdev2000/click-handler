const TextContent = document.getElementById('content')
const bluecolor = document.getElementById('blueColor')
const greencolor = document.getElementById('greenColor')
const orangecolor = document.getElementById('orangeColor')


bluecolor.addEventListener('click',()=>{
    color()

})

greencolor.addEventListener('click',()=>{
    color1()
    
})


orangecolor.addEventListener('click',()=>{
    color2()
    
})

function color(){
    TextContent.style.color = "skyblue"  
   
}
function color1(){
    TextContent.style.color = "green"  
   
}

function color2(){
    TextContent.style.color = "orange"  
   
}

