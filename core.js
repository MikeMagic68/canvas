let lineWidth = 20;
let coloreLinea = "red";

window.addEventListener("load", () => {
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");

    canvas.height = window.innerHeight-70;
    canvas.width = window.innerWidth-70;

    let painting = false;

    function startPosition(e){
        painting = true;
        draw(e);
    }
    function finishedPosition(){
        painting = false;
        ctx.beginPath();
    }

    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", finishedPosition);
    canvas.addEventListener("mousemove", draw);

    // per fare più preciso la linea nel cursore
    let BB=canvas.getBoundingClientRect();
    let offsetX=BB.left;
    let offsetY=BB.top;

    function draw(e){
        if(!painting) return;
        ctx.lineWidth = lineWidth;
        ctx.lineCap = "round";
        ctx.strokeStyle = coloreLinea; // colore

        ctx.lineTo(e.clientX-offsetX, e.clientY-offsetY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX-offsetX, e.clientY-offsetY);


    }

});

let lineWidthBtn = document.getElementById("lineWidthBtn");
let lineWidthValue = document.getElementById("lineWidthValue");
lineWidthBtn.addEventListener("click", () => {
    lineWidth = Number(lineWidthValue.value);
});

let coloreBluBtn = document.getElementById("coloreBluBtn");
coloreBluBtn.addEventListener("click", () => {
    coloreLinea = "blue";
});

let coloreRossoBtn = document.getElementById("coloreRossoBtn");
coloreRossoBtn.addEventListener("click", () => {
    coloreLinea = "red";
});