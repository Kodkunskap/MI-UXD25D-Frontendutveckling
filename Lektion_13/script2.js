

let i = 0; 

while(true) {
    i++;

    if (i > 5) {
        break;
    }

    if (i == 3) {
        continue;
    }

    console.log(i);
}

console.log("Efter loopen");



for(let k=0; k < 5; k = k + 1) {        // for (let k=0; k < 5; k++) 

    if (k == 2) continue;

    console.log(k);
}

/*

    |-|-|-|
    | | | |
    |-|-|-|
    | | | |
    |-|-|-|
    | | | |
    |-|-|-|


    for (rad = 0; rad < 3 ; rad + 1)
        for (col = 0; col < 3; col + 1)
            data = table[rad][col];

*/


/*

    +   addition
    -   subtraktion 
    *   multiplikation
    /   division    (var försiktig 0)

 */

    let tal = 0;

    tal = tal + 10;     // tal == 10
    tal = tal - 5;      // tal == 5
    tal = tal * 2;      // tal == 10
    tal = tal / 2;      // tal == 5
    console.log("Tal = ", tal);


    tal = 0;
    tal += 10;          // tal == 10
    tal -= 5;           // tal == 5
    tal *= 2;           // tal == 10
    tal /= 2;           // tal == 5;
    console.log("Tal = ", tal);

    tal = 0;
    tal++;              // tal = tal + 1    tal == 1;
    tal++;
    tal++;
    tal--;              // tal = tal - 1;   tal == 2;
    console.log("Tal = ", tal);


    // Modulo (%) - heltalsresten vid heltalsdivision 
    //
    // 10 / 5 == 2
    // 10 / 3 == 3,33333 (flyttal)
    // 10 / 3 == 3 (heltal).  10 - 9 == 1
    
    let heltalsrest = 10 % 3;       // 1
    console.log("Module 10 % 3 = ", heltalsrest);

    for(let k = 0; k < 100; k++) {

        if (k % 2 != 0) continue;

        console.log(k);
    }


/*
    * * *   *   *     

    1 2 3 4 5 6 7 8 9 10

*/
    // for(let k = 3; k <= 10; k++) {

    //     for(let l=2; l <= k-1; l++) {

    //         if ( k % l == 0) {
    //             console.log(k, " inte ett primtal")
    //             break;
    //         }

    //     }
    // }