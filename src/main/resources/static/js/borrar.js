function borrarUsuario(numId){
    
        //Hacemos petición Ajax
        $.ajax({
            url:"http://localhost:8080/api/user/"+numId,
           // data: datosPeticion,
            type:'DELETE',
            contentType:"application/JSON",
    
            success:function(respuesta){
                console.log("BORRADO");
                listar();
            },
            error:function(xhr, status){
                console.log(status);
            }
    
        });
    }

 