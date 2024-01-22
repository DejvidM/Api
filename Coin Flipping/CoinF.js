function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}
function fiveHeads() {
    return new Promise( (resolve, reject) => {
    // your code here!
        let head = 0;
        let attempt = 0;
        while(head < 5 && attempt < 100){
            attempt++;
            let result = tossCoin();
            console.log(`${result} in the moment . attempt${attempt}\n`);
            result === 'heads'
            ?head++
            :head = 0;
        }
        head === 5   
            ?resolve("the coin has flipped heads 5 times in a row")
            :reject(`attempt = ${attempt}`)
    });
    }
    fiveHeads()
        .then( res => console.log(res) )
        .catch( err => console.log(err) );
    console.log( "When does this run now?" );
    