let noOfDoors = 3;
let iterations = 999999;
let contestantSwitches = true;

let matches = 0;
let wins = 0;
let loses = 0;

for (let i = 0 ; i < iterations ; i++){//each game
    let carHiddenBehind = Math.ceil(Math.random() * noOfDoors);
    let contestantPicked = Math.ceil(Math.random() * noOfDoors);

        //preparing the game show
        let doors = [];
        for (let j = 0 ; j < noOfDoors ; j ++){
            doors.push('Goat');
        };
        doors[carHiddenBehind-1] = 'Car';
        
        // the game stage is set
        
        console.log(doors);
        console.log('the host opens a door to show a goat')
        doors[hostRevealsAGoat(doors, 'Goat', contestantPicked)] = 'Revealed Goat';
        console.log(doors);

        console.log(`contestant has chosen ${contestantPicked}`)
    
        if (contestantSwitches === true){

            if (doors[contestantPicked-1]=== 'Car'){
                contestantPicked = (doors.indexOf('Goat'))+1;
            }else if (doors[contestantPicked-1]=== 'Goat'){
                contestantPicked = (doors.indexOf('Car'))+1;
                // console.log('goatgoat');
                // console.log(contestantPicked);
            }

            if (contestantPicked === carHiddenBehind){matches ++};
        }else if( contestantSwitches === false){
            if (contestantPicked === carHiddenBehind){matches ++};
        }
            
}

console.log(`matches = ${matches}`);
console.log(`iterations = ${iterations}`);
console.log(matches/iterations);

function hostRevealsAGoat(arr, item, contestantPicked){
    indexes = [];
    for (let p = 0 ; p < arr.length ; p++){
        if (arr[p] === item && p+1 !== contestantPicked){
            indexes.push(p);
        }
    }

    return indexes[Math.floor(Math.random()*indexes.length)];
}
