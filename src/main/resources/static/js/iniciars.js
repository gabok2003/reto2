function validarexistencia2(){
    var datos={
            email:$("#correo").val(),
            name:$("#nombre").val(),
            password:$("#contrasena").val(),
        }
    
        // Convertimos a JSON
 
        //Hacemos petición Ajax
        $.ajax({
            url:"http://localhost:8080/api/user/"+$("#usuario").val(),
            type:'GET',
            dataType:'json',
            
            success:function(respuesta){
                console.log("Actualizado");
                if(respuesta){validaremailcont();}
                else{  alert("El usuario no existe");}
            },
            error:function(xhr, status){
                console.log(status);
            }
    
        });
    
    }

function validaremailcont(){
//+$("#usuario").val()+"/"+$("#contrasena")
    $.ajax({
        url:"http://localhost:8080/api/user/"+$("#usuario").val()+"/"+$("#contrasena").val(),
        type:'GET',
        dataType:'json',
        
        success:function(respuesta){
            console.log("Actualizado");
            if(respuesta.name!="NO DEFINIDO"){ alert("Bienvenido "+respuesta.name);}
            else{  alert("Contraseña incorrecta");}
        },
        error:function(xhr, status){
            console.log(status);
        }

    });
}


