function Calcular(){  
    //Saludo
    MsgBox();
    
    var html = "";
    var numero = parseInt(document.getElementById("numero").value);
    for(var i = 1; i<= 10; i++){

        // html += "<tr>";
        // html += "<td>1 x 2 = 5</td>";
        // html += "</tr>";

        html += `<tr>
                    <td colspan="2">`+numero+` x `+i+` = `+(numero*i)+`</td>
                </tr>`;
    }

    document.getElementById("tablaMultiplicar").innerHTML = html;
    
    Clear();
}

function MsgBox(){
    // alert("Hola");

    Swal.fire({
        title: "Hola, probando Sweet Alert!",
        text: "Genial!",
        icon: "success"
      });
}

function Clear(){
    document.getElementById("numero").value = "";
}


$(document).ready(function() {
    $('#example').DataTable();
});