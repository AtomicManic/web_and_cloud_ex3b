window.onload = () => {
    let row;
    const main = document.getElementById("p3-main");
    let squares = document.getElementsByClassName("squares");
    const rowNum = 10;
    const squareNum = 20;
    let counter = 0;
    
    for(let i = 0; i < rowNum; i++){
        row = document.createElement("div");
        row.classList.add("no-gutters", "row");
        row.style.display = "flex";
        let tempSquares = squares[0].cloneNode(true);
        tempSquares.removeAttribute("id");
        row.appendChild(tempSquares.cloneNode(true));
        row.appendChild(tempSquares.cloneNode(true));
        main.appendChild(row);
    };
    


    const sq1 = document.getElementsByClassName("sq1");;
    const sq2 = document.getElementsByClassName("sq2");
    const sq3 = document.getElementsByClassName("sq3");
    const sq4 = document.getElementsByClassName("sq4");
    const plus = document.getElementById("plus");

    document.getElementById("plus").onclick = () => {
        if(counter < 4){
            
            for(let i = 0; i <= squareNum; i++){
                sq1[i].style.clipPath = getShape(Math.floor(Math.random() * 5));
                sq2[i].style.clipPath = getShape(Math.floor(Math.random() * 5));
                sq3[i].style.clipPath = getShape(Math.floor(Math.random() * 5));
                sq4[i].style.clipPath = getShape(Math.floor(Math.random() * 5));
            }
            counter++;
        } else {
            for(let i = 0; i < squareNum; i++){
            
                sq1[i].style.clipPath = "";
                sq2[i].style.clipPath = "";
                sq3[i].style.clipPath = "";
                sq4[i].style.clipPath = "";
            }
            counter++; 
        }
        
        if(counter != 5){
            plus.innerHTML = 5-counter;
        } else {
            counter = 0;
            plus.innerHTML = "+";
        }
        
    };

   

    getShape = index =>{
        const shapes = [
            //Triangle
            "polygon(50% 10%, 90% 85%, 10% 85%)",    
            // Meuyan
            "polygon(50% 10%, 85% 50%, 50% 90%, 15% 50%)",
            // Circle
            "circle(21.3% at 50% 50%)",
            // Hexagon
            "polygon(25% 10%, 75% 10%, 90% 50%, 75% 90%, 25% 90%, 10% 50%)",
            // Star
            "polygon(50% 10%, 61% 35%, 90% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 10% 35%, 39% 35%)"
        ]

        return shapes[index];
    }



    let backgroundChanged = 0;
    const squareList = document.getElementsByClassName("square");
    for( let i = 0; i < squareList.length; i++){
        squareList[i].onclick = () => {
            
            if(!backgroundChanged){
                squareList[i].style.backgroundColor = "red";
                backgroundChanged = 1;
            } else {
                squareList[i].style.backgroundColor = "white";
                backgroundChanged = 0;
            }
        }
    }
    
};