function borrarChocolate(numId){

    //Hacemos petición Ajax
    $.ajax({
        url:"http://localhost:8080/api/chocolate/"+numId,
       // data: datosPeticion,
        type:'DELETE',
        contentType:"application/JSON",

        success:function(respuesta){
            console.log("BORRADO");
            listarChocholate();
        },
        error:function(xhr, status){
            console.log(status);
        }

    });
}