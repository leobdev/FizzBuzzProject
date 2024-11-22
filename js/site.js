//1. Get the values from the page
//controller function
function getValues() {


    //get the user values from the page
    let fizztValue = document.getElementById("fizztValue").value;
    let buzzValue = document.getElementById("buzzValue").value;

    //parse for numbers
    fizztValue = parseInt(fizztValue);
    buzzValue = parseInt(buzzValue);

    //check that the numebrs are integers
    if(Number.isInteger(fizztValue) && Number.isInteger(buzzValue)){

        //We call fizzBuzz
        let fbArray = fizzBuzzC(fizztValue, buzzValue)
    
        //call displayData and write the values to the screen
        displayData(fbArray);
       
    }
    else {

        alert("You must enter integers");
    }


}


function fizzBuzz(fizzValue, buzzValue){
    //init the returnArray
    let returnArray = [];

    //loop from 1 to 100
    for(let i = 1; i <= 100; i++){
    //we need check the current in three steps:
        // 1. check to see if divisible by both (3 and 5)     
        // 2. check to see if divisible by fizz value (3)
        // 3. check to see if divisible by fizz value (3)
        // 4. If none, then push the number into the array
         if((i % fizzValue == 0) && (i % buzzValue == 0)){
            
            returnArray.push('FizzBuzz');
        }
         else if (i % buzzValue == 0){
   
             returnArray.push('Buzz');
        }
        else if (i % fizzValue == 0){
           
             returnArray.push('Fizz');
        } else{

            returnArray.push(i);
        }
  

    }

    return returnArray;
}


function fizzBuzzB(fizzValue, buzzValue){

    let returnArray = [];

    let fizz = false;
    let buzz = false;

    for (let i = 1; i < 100; i++) {
        
        fizz = i % fizzValue == 0;
        buzz = i % buzzValue == 0;

        switch(true){
            case fizz && buzz: {
                returnArray.push('FizzBuzz');
                break;
            }
            case fizz:{
                returnArray.push("Fizz");
                break;
            }
            case buzz:{
                returnArray.push("Buzz");
                break;
            }
            default:{
                returnArray.push(i);
                break
            }
        }
        
    }

    return returnArray;
}

function fizzBuzzC(fizzValue, buzzValue){
    let returnArray = [];

    for (let i = 1; i <= 100; i++) {
        
        let value = ((i % fizzValue == 0 ? 'Fizz' : '') + (i % buzzValue == 0 ? 'Buzz' : '') || i) 

        returnArray.push(value);
    }

    return returnArray;

}

function displayData(fbArray){

    //get the table body from the page
    let tableBody = document.getElementById("results");

    //get the template row
    let templateRow = document.getElementById("fbTemplate");

    //clear table first 
    tableBody.innerHTML = "";

    for (let i = 0; i < fbArray.length; i += 5) {
       let tableRow = document.importNode(templateRow.content, true);

       //grab use the to put into array
       let rowCols = tableRow.querySelectorAll("td");

       rowCols[0].classList.add(fbArray[i]);
       rowCols[0].textContent = fbArray[i];

       rowCols[1].classList.add(fbArray[i+1]);
       rowCols[1].textContent = fbArray[i+1]
       
       rowCols[2].classList.add(fbArray[i+2]);
       rowCols[2].textContent = fbArray[i+2]
       
       rowCols[3].classList.add(fbArray[i+3]);
       rowCols[3].textContent = fbArray[i+3]
       
       rowCols[4].classList.add(fbArray[i+4]);
       rowCols[4].textContent = fbArray[i+4]

       tableBody.appendChild(tableRow);

    }


    // add all tge rows to the table


}



