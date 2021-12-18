function validarexistencia(){

    
    // Convertimos a JSON
    //Hacemos petición Ajax
    $.ajax({
        url:"http://localhost:8080/api/user/emailexist/"+$("#email").val(),
        type:'GET',
        dataType:'json',
        
        success:function(respuesta){
            console.log("Actualizado");
            if(respuesta){alert("No fue posible crear la cuenta"); alert("El correo ya existe")}
            else{agregar();}
        },
        error:function(xhr, status){
            console.log(status);
        }

    });

}

function agregar(){
    //capturar valores de los campos en el documento html 
let contrasena=$("#contrasena").val();
let contrasena2=$("#contrasena2").val();
var datos
if(contrasena==contrasena2){
    datos={
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
        url:"http://localhost:8080/api/user/new",
        data: datosPeticion,
        type:'POST',
        contentType:"application/JSON",

        success:function(respuesta){
            console.log("Insertado");
            listar();
            alert("Cuenta creada correctamente")
        },
        error:function(xhr, status){
            console.log(status);
        }

    });
}else { alert("Las contraseñas no coinciden")}

}

