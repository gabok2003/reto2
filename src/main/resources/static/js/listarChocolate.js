//chocolate

function listarChocolate(){
    $.ajax({
        url:"http://localhost:8080/api/chocolate/all",
        type:'GET',
        dataType:'json',
    
        success:function(respuesta){
            console.log(respuesta);
            listarRespuestasChocolate(respuesta);
        },
        error:function(xhr, status){
            console.log(status);
        }
    
    });

}

function listarRespuestasChocolate(items){
    
    var tabla=`<table border="1">
    <tr>
    <thead>
        <th>Reference</th>
        <th>Category</th>
        <th>Description</th>
        <th>Avaibility</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Photography</th>
        <th colspan="2">Acciones</th>
    </thead>
        </tr>`;

    for(let i = 0; i < items.length; i++){
        var variable = items[i].reference;
        tabla+=`<tr>
                    <td>${items[i].reference}</td>
                    <td>${items[i].category}</td>
                    <td>${items[i].description}</td>
                    <td>${items[i].availability}</td>
                    <td>${items[i].price}</td>
                    <td>${items[i].quantity}</td>
                    <td>${items[i].photography}</td>
                    <td><button onclick="editarRegistroChocolate(${variable})">Editar</button></td>
                    <td><button onclick="borrarChocolate(${variable})">Borrar</button></td>
                    
                </tr>`;
    }
    tabla+=`</table>`
    $("#listado1").html(tabla)
    
}   