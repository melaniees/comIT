let btnVerMas = document.getElementById("btnVerMas");  
const container = document.querySelector(".verMas");

    btnVerMas.addEventListener("click",() =>{
    
        console.log("1");
        container.innerHTML+=
        `<div class="col">
            <div class="card">
            <div class="card-body">
                <p class="card-text">" Ser amigable, respetar a los demás, cumplir la ley de la manada, vivir la aventura."</p>
                <h5>- Pa</h5>
                <h6>11 años</h6>
            </div>
            </div>
        </div>
        `
        //container.appendChild(img);
    
    });
    




