function display(buttonValue){

    document.getElementById("calculator").value+= buttonValue; 
}

function solve(){

     let x = document.getElementById("calculator").value;
    
     document.getElementById("calculator").value = eval(x);
}


function deleteButton(){
    document.getElementById("calculator").value = " ";
}

