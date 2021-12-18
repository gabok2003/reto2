function listar(){
    $.ajax({
        url:"http://localhost:8080/api/user/all",
        type:'GET',
        dataType:'json',
    
        success:function(respuesta){
            console.log(respuesta);
            listarRespuestas(respuesta);
        },
        error:function(xhr, status){
            console.log(status);
        }
    
    });

}

function listarRespuestas(items){
  
    var tabla=`<table border="1">
    <tr>
    <thead>
        <th>Id</th>
        <th>Identification</th>
        <th>Name</th>
        <th>Address</th>
        <th>cellPhone</th>
        <th>Email</th>
        <th>Password</th>
        <th>Zone</th>
        <th>Type</th>
        <th colspan="2">Acciones</th>
    </thead>
        </tr>`;

    for(let i = 0; i < items.length; i++){
        tabla+=`<tr>
                    <td>${items[i].id}</td>
                    <td>${items[i].identification}</td>
                    <td>${items[i].name}</td>
                    <td>${items[i].address}</td>
                    <td>${items[i].cellPhone}</td>
                    <td>${items[i].email}</td>
                    <td>${items[i].password}</td>
                    <td>${items[i].zone}</td>
                    <td>${items[i].type}</td>
                    <td><button onclick="editarRegistro(${items[i].id})">Editar</button></td>
                    <td><button onclick="borrarUsuario(${items[i].id})">Borrar</button></td>
                    
                </tr>`;
    }
    tabla+=`</table>`
    $("#listado1").html(tabla)
    
}   

