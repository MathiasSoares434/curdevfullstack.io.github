/*

SINCRONO VS ASSINCRONO

*/
function primeira(){
    console.log('primeira')
}

function segunda(){
    console.log('segunda')
    for (let index = 0; index < 100000000000; index++) {
        ;
        
    }
}




primeira() //sincrono

segunda()
