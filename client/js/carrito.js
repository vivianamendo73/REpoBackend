let btnAgregar = document.querySelector("#btnAgregar");
btnAgregar.addEventListener("click", agregar);
let btnTotal = document.querySelector("#btnTotal");
btnTotal.addEventListener("click", sumar);

let compras = [];

function agregar() {
    console.log("Funcion Agregar");
    let producto = document.querySelector('#producto').value;
    let precio = parseInt(document.querySelector('#precio').value);
    let renglon = {
        "producto": producto,
        "precio": precio
    }
    compras.push(renglon);



    mostrarTablaCompras();

}



function sumar() {
    console.log("Funcion Sumar");
    let total = 0;
    for (let i = 0; i < compras.length; i++) {
        total += compras[i].precio;
    }
    let max = compras[0].precio;
    for (let r of compras) {
        if (max < r.precio)
            max = r.precio;
    }
    document.querySelector("#total").innerHTML =
        "<p>Total: $" + total + "</p>" +
        "<p>Maximo: $" + max + "</p>"
}

function mostrarTablaCompras() {
    html = "";
    for (let r of compras) {
        html += `
            <tr>
            <td>${r.producto}</td>
            <td>${r.precio}</td>
            <td>${r.descripcion}</td>
            </tr>
            `;
    }
    document.querySelector("#tblCompras").innerHTML = html;
}

async function load() {
 /*    let container =
        document.querySelector("#use-ajax");
    container.innerHTML = "<h1>Loading..</h1>";
    try {
        let response = await fetch("http://localhost:3000/mock.json");
        if (response.ok) {
            let t = await response.json()
            compras = t.compras;
            container.innerHTML = mostrarTablaCompras();
        }
        else
            container.innerHTML = "<h1>Error - Failed URL!</h1>";
    } catch (error) {
        container.innerHTML = "<h1>Conection Error</h1>";

    } */

    console.log("entree");
    let r = await fetch('/producto');
    compras = await r.json();
    console.log(compras);
    mostrarTablaCompras();
}
//load();
//console.log("termine");