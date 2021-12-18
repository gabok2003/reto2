$(document).ready(function(){
    listar();
    $("#btnGuardar").hide();
    $("#btnCrearcuenta").show();

})

function editarRegistro(numId){

    
    $.ajax({
        url:"http://localhost:8080/api/user/"+numId,
        type:'GET',
        dataType:'json',
    
        success:function(respuesta){ 
        
            
            $("#numId").val(respuesta.id),
            $("#identification").val(respuesta.identification),
            $("#nombre").val(respuesta.name),
            $("#address").val(respuesta.address),
            $("#cellPhone").val(respuesta.cellPhone),
            $("#email").val(respuesta.email),
            $("#contrasena").val(respuesta.password),
            $("#zone").val(respuesta.zone),
            $("#type").val(respuesta.type),    

            console.log(respuesta);
            $("#btnGuardar").show();
            $("#btnCrearcuenta").hide();
            listar();
        },
        error:function(xhr, status){
            console.log(status);
        }
    
    });
}

function actualizar(){
    var datos={
        id:$("#numId").val(),
        identification:$("#identification").val(),
        name:$("#nombre").val(),
        address:$("#address").val(),
        cellPhone:$("#cellPhone").val(),
        email:$("#email").val(),
        password:$("#contrasena").val(),
        zone:$("#zone").val(),
        type:$("#type").val(),    
    }

    // Convertimos a JSON
    let datosPeticion=JSON.stringify(datos);

    //Hacemos petición Ajax
    $.ajax({
        url:"http://localhost:8080/api/user/update",
        data: datosPeticion,
        type:'PUT',
        contentType:"application/JSON",

        success:function(respuesta){
            console.log("Actualizado");
            listar();

            $("#numId").prop('disabled', false);
        },
        error:function(xhr, status){
            console.log(status);
        }

    });
}

//chocolate

