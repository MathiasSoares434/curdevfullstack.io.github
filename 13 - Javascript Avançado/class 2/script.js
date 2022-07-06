/*

Hostig(Içar, Erguer)


Hosting é o comportamento padrão do javascript
de mover as declarações para o topo de um escopo.

*/


function teste(){
    outraFunção()


    
    function outraFunção(){
        console.log('ok sua a outra função')
    }
}


teste()