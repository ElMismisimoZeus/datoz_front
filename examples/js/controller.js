/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */




function create(htmlStr) {
    var frag = document.createDocumentFragment(),
        temp = document.createElement('tbody');
    temp.innerHTML = htmlStr;
    while (temp.firstChild) {
        frag.appendChild(temp.firstChild);
      }
        return frag;
}

function loadData(){
    
    $.ajax({
                type: 'POST',
                contentType: 'application/json',
                url: 'http://opowerdev.net/datosz/usuario/getProductos',
                dataType: "json",
                contentType: "application/json; charset=utf-8",
                success: function(data, textStatus, jqXHR){

                    
                    for(var k in data) {
                        fragment = create(
                                '<tr>'+
                                    '<td>'+data[k].NOMBRE+'</td>'+
                                    '<td>'+data[k].DESCRIPCION+'</td>'+
                                    '<td class="text-primary">$'+data[k].PRECIO+'</td>'+
                                  '</tr>'
                            
                        );
                        document.getElementById('elementos').appendChild(fragment);
                     }

                },
                error: function(jqXHR, textStatus, errorThrown){
                    alert(' error de carga  : ' + textStatus+' errr:'+errorThrown);
                }
        });

}

function getData(){
    
    $.ajax({
                type: 'POST',
                contentType: 'application/json',
                url: 'http://opowerdev.net/datosz/usuario/getSource',
                dataType: "json",
                contentType: "application/json; charset=utf-8",
                success: function(data, textStatus, jqXHR){
                    
                    if(data.estado=='true'){
                        alert ('se cargo la información de forma correcta');
                    }
                    else{
                        alert('error al obtener la información remota');
                    }
                    

                },
                error: function(jqXHR, textStatus, errorThrown){
                    // servidor inaccesible, verificar conexion
                    alert(' error de carga  : ' + textStatus+' errr:'+errorThrown);
                }
        });
    
}