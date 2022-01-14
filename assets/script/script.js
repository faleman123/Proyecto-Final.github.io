$(document).ready(function () {
 

    $("#formu").submit(function (e) {
      e.preventDefault();
    });
  
    var contFila = 1;
    var contCarta = 1;
    var contGlobal = 1;
    var personajes = [];
    for (let i = 1; i < 43; i++) {
      $.ajax({
        type: "GET",
        url: "https://rickandmortyapi.com/api/character/?page=" + i,
        dataType: "json",
        async: true,
        success: function (data) {
          for (let j = 0; j < data.results.length; j++) {
            if (contCarta > 2) {
              contFila++;
              contCarta = 1;
              agregarFila(contFila);
            }
            personajes.push(data.results[j].name);
            var contenido = document.querySelector("#fila" + contFila);
            contenido.innerHTML +=
              `
            <div class="col-sm-1 "></div>
            <div class="card sm-6 mb-3  bg-info" style="max-width: 540px; width:540px">
            <div class="row no-gutters">
              <div class="col-md-4 zoom" name="${data.results[j].name
                .toString()
                .toLowerCase()}" id="carta` +
              contGlobal +
              `">
                <img src=${data.results[j].image} class="card-img" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${data.results[j].name}</h5>
                  <p class="card-text">${data.results[j].status}</p>
                  <p class="card-text">${data.results[j].species}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-1"></div>
          `;
  
            if (contGlobal == 826) {
              for (let i = 1; i < 827; i++) {
                $("#carta" + i).zoom();
              }
            }
            contCarta++;
            contGlobal++;
          }
        },
      });
    }
    
  });
  
  function agregarFila(contFila) {
    var div = document.createElement("div");
    div.id = "fila" + contFila;
    div.innerHTML = "";
    div.className = "row";
  
    document.body.appendChild(div);
  }
  
  function buscador() {
    var busqueda = $("#searchBar").val();
  
    busqueda = busqueda.toString().toLowerCase();
  
    document
      .getElementsByName(busqueda)[0]
      .scrollIntoView({ behavior: "smooth" });
  }
  