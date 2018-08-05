//set up the conditions
let noOfDoors = 3;
let iterations = 999;
let contestantSwitches = true;

let matches = 0;

for (let i = 0 ; i < iterations ; i++){//each game
    let carHiddenBehind = Math.ceil(Math.random() * noOfDoors);
    let contestantPicked = Math.ceil(Math.random() * noOfDoors);

        //preparing the game show
        let doors = [];
        for (let j = 0 ; j < noOfDoors ; j ++){
            doors.push('Goat');
        };
        //assigning the winning car to one of the doors
        doors[carHiddenBehind-1] = 'Car';
        // the game stage is set
        console.log(`contestant has chosen ${contestantPicked}`)
        //show the original set up
        console.log(doors);
        console.log('the host opens a door to show a goat')
        //the host now reveals a goat
        doors[hostRevealsAGoat(doors, 'Goat', contestantPicked)] = 'Revealed Goat';
        // show the set up now with one goat revealed
        console.log(doors);


    
        if (contestantSwitches === true){

            if (doors[contestantPicked-1]=== 'Car'){
                contestantPicked = (doors.indexOf('Goat'))+1;
            }else if (doors[contestantPicked-1]=== 'Goat'){
                contestantPicked = (doors.indexOf('Car'))+1;
     
            }

            if (contestantPicked === carHiddenBehind){matches ++};
        }else if( contestantSwitches === false){
            if (contestantPicked === carHiddenBehind){matches ++};
        }
            
}

console.log(`matches = ${matches}`);
console.log(`iterations = ${iterations}`);
console.log(`The car was won in ${(matches/iterations)*100}% of games based on the above conditions`);

function hostRevealsAGoat(arr, item, contestantPicked){
    indexes = [];
    for (let p = 0 ; p < arr.length ; p++){
        if (arr[p] === item && p+1 !== contestantPicked){
            indexes.push(p);
        }
    }

    return indexes[Math.floor(Math.random()*indexes.length)];
}
