window.addEventListener("load", init);


function init() {
    console.log("haho");
    /**Valtozok deklaralasa */
    /**Valtozok incializalasa = értéket adunk egy változónak */
    //*Gyengén tipusos nyelv*/    
    var valt1 = "szöveg";
    let valt2 = 2.45;
    const VALT3 = 3; /** Az futásidőben nem változthatjuk meg az értéket! */
    atalakitott = parseInt(valt1);
    console.log("valt1", parseInt(valt1), typeof parseInt(valt1));
    console.log("valt2", parseInt(valt2), typeof parseInt(valt2));
    console.log("VALT3", typeof VALT3);

    let logikai = 3 < 5;
    console.log("logikai", logikai, typeof logikai);
    let eredmeny = valt1 - valt2;
    console.log("eredmeny", eredmeny, typeof eredmeny);
    elagazasok();
}

function elagazasok() {
    console.log("******************elagazasok****************");
    var szam = 19;
    if (szam % 2 == 0 && szam % 3 == 0) {
        console.log("paros");
    } else if (szam % 2 == 0) {
        console.log("paros");
    } else if (szam % 3 == 0) {
        console.log("3-mal oszthato");
    } else {
        console.log("paratlan");
    }
    
    
    var nap = parseInt(Math.random() * 7) + 1;
    switch (nap) {
        case 1:
            console.log("hetfo");
            break;
        case 2:
            console.log("kedd");
            break;
        case 3:
            console.log("szerda");
            break;
        case 4:
            console.log("csutortok");
            break;
        case 5:
            console.log("pentek");
            break;
        case 6:
            console.log("szombat");
            break;
        case 7:
            console.log("vasarnap");
            break;
        default:
            console.log("Ez nem egy het napja");


    }
    function ciklusok(){
        console.log("############Ciklusok############")
        for (let index = 0; index < 10; index++) {
            var vszam=parseInt(Math.random() * 401) + 100;
            console.log(vszam)
            
        }
    }
    do {
        var vszam = parseInt(Math.random() * 31) -20;
        console.log(vszam)
    } while (vszam <= 0);
    while (vszam <=0 ) {
        var vszam = parseint(Math.random() * 31 ) -20;
        console.log(vszam)
        vszam = parseInt(Math.random() * 31) -20; 

    }

}    