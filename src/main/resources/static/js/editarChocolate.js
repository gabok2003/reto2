$(document).ready(function(){
    listarChocolate();
    $("#btnCrearcuentaChocolate").show();
    $("#btnGuardarChocolate").hide();

})

//chocolate

function editarRegistroChocolate(r){

    
    $.ajax({
        url:"http://localhost:8080/api/chocolate/"+r,
        type:'GET',
        dataType:'json',
    
        success:function(respuesta){ 
        
         
            $("#reference").val(respuesta.reference),
            $("#category").val(respuesta.category),
            $("#description").val(respuesta.description),
            $("#availability").val(respuesta.availability),
            $("#price").val(respuesta.price),
            $("#quantity").val(respuesta.quantity),
            $("#photography").val(respuesta.photography),  
 
            console.log(respuesta);
            $("#btnGuardarChocolate").show();
            $("#btnCrearcuentaChocolate").hide();
            listarChocolate();
        },
        error:function(xhr, status){
            console.log(status);
        }
    
    });
}

function actualizarChocolate(){
    var datos={


        reference:$("#reference").val() ,
        category:$("#category").val(),
        description:$("#description").val(),
        availability:$("#availability").val( ),
        price:$("#price").val(),
        quantity:$("#quantity").val(),
        photography:$("#photography").val(),  
    }

    // Convertimos a JSON
    let datosPeticion=JSON.stringify(datos);

    //Hacemos petición Ajax
    $.ajax({
        url:"http://localhost:8080/api/chocolate/update",
        data: datosPeticion,
        type:'PUT',
        contentType:"application/JSON",

        success:function(respuesta){
            console.log("Actualizado");
            listarChocolate();

            $("#reference").prop('disabled', false);
        },
        error:function(xhr, status){
            console.log(status);
        }

    });
}