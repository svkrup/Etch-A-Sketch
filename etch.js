const master=document.querySelector('#master');
const button=document.querySelector('#cellNum');
let grid=16;
//document.addEventListener('load',loadCells);
document.onload=loadCells();
button.addEventListener('click',()=>{
    grid= prompt('Enter number of cells');
    while(master.hasChildNodes()) {
        master.removeChild(master.firstChild);
    }
    loadCells(); 
})
//let grid=16;

function loadCells(){
    let cellSize=Math.round(1510/grid);
    console.log(cellSize);
    let side= `${cellSize}px`;
    for (let i=0;i<grid*grid;i++) {
        const div=document.createElement('div');
        div.setAttribute('id',i);
        div.style.width=side;
        div.style.height=side;
        div.addEventListener('mouseenter', function(e){
            let r = Math.random()*255;
            let g = Math.random()*255;
            let b = Math.random()*255;
            e.target.style.backgroundColor=`rgb(${r},${g} ,${b})`;
        })
        div.addEventListener('mouseleave', function(e){
            e.target.style.backgroundColor='aliceblue'
        })
        master.appendChild(div);
    };
}

let w = window.innerWidth;
let h= window.innerHeight;
console.log("width is "+ w);

console.log("Hght is "+ h);

