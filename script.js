const randomColor = function (){
    const hex = '0123456789ABCDEF'
    let color = '#'
    for(let i=0; i<6; i++){
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
}

let set;
document.getElementById('Start').addEventListener('click',()=>{
    if(!set){
        set = setInterval(()=>{
            document.body.style.backgroundColor = randomColor()
        },1000)
    }
})

document.getElementById('end').addEventListener('click', ()=>{
    clearInterval(set)
    set = null
})
