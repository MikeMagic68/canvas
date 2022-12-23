let lineWidth = 20;
let coloreLinea = "red";
let coloreBackground = "white";
let gommaWidth = 20;
let usingPencil = true;
let usingGomma = false;


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
        if(usingGomma)
            ctx.lineWidth = gommaWidth;
        else if(usingPencil)
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

/*
 * BOTTONI DEI COLORI
 */
let coloreBluBtn = document.getElementById("coloreBluBtn");
coloreBluBtn.addEventListener("click", () => {
    usingGomma = false;
    usingPencil = true;
    coloreLinea = "blue";
});

let coloreRossoBtn = document.getElementById("coloreRossoBtn");
coloreRossoBtn.addEventListener("click", () => {
    usingGomma = false;
    usingPencil = true;
    coloreLinea = "red";
});

let coloreArancioneBtn = document.getElementById("coloreArancioneBtn");
coloreArancioneBtn.addEventListener("click", () => {coloreLinea = "orange"; usingGomma = false; usingPencil = true; });

let coloreVerdeBtn = document.getElementById("coloreVerdeBtn");
coloreVerdeBtn.addEventListener("click", () => {coloreLinea = "green"; usingGomma = false; usingPencil = true;});



/*
 * GOMMA
 */

let gommaBtn = document.getElementById("gommaBtn");
gommaBtn.addEventListener("click", () => {
    coloreLinea = coloreBackground;
    usingGomma = true;
    usingPencil = false;
});

let gommaWidthBtn = document.getElementById("gommaWidthBtn");
gommaWidthBtn.addEventListener("click", () => {
    gommaWidth = document.getElementById("gommaWidthValue").value;
});



