// Single line comment
/*

Multiline comment

*/

// document.write("<h1>I can't wait for <em>spring!<em><h1>");


// alert("Warning! Will Robinson... Warning!");

// confirm("Do you like pokemon?");

// ("What type of pokemon do you like?");
Game();

function Game(){
    
    document.write("");
    var playerName = prompt("What is your name?");
    alert("Welcome "+ playerName);
    
    School();
        
    function School(){
            var school = prompt("").toLowerCase();
            
            if(school == "look around" || school == "look"){
                    var schoolLook = prompt("The classroom is ");
            }
            else if(school == "think"){
                    alert("You ");
                    var resume = confirm("Do you wish to continue?");
                    
                    if(resume){
                        School();
                    }
                    else{
                            alert("Game Over!!");
                    
                    }
                }
        } 
    
    
    
    
    
}