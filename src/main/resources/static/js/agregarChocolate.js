//chocolateeee
let disponible= true;
function agregarChocolate(){
    //capturar valores de los campos en el documento html 

    var datos={
        reference:$("#reference").val(),
        category:$("#category").val(),
        description:$("#description").val(),
        availability:disponible,
        price:$("#price").val(),
        quantity:$("#quantity").val(),
        photography:$("#photography").val(),

    }

    // Convertimos a JSON
    let datosPeticion=JSON.stringify(datos);

    //Hacemos petición Ajax
    $.ajax({
        url:"http://localhost:8080/api/chocolate/new",
        data: datosPeticion,
        type:'POST',
        contentType:"application/JSON",

        success:function(respuesta){
            console.log("Insertado");
            listarChocolate();
        },
        error:function(xhr, status){
            console.log(status);
        }

    });
}

