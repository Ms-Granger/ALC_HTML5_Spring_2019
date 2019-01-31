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
            var school = prompt("You are in a Gym ").toLowerCase();
            
            if(school == "look around" || school == "look"){
                    var schoolLook = prompt("The Gym is big with four doors.There is a door in front of you, A door to your right, A door to your left. And a door behind you. Which path will you take? Or will you Quit before you even started!");
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
                
                else{
                    alert("I don't know what "+school+" is!");
                    School();
                }
            } 
    function Swamp(){
        var swampEnv = prompt("This is dark swamp. \n -follow path \n -swim");
        
        if(swampEnv == "follow" || swampEnv == "follow path"){
            var swampPath = prompt("You enter on the swamp path and head northeast in the disance you see a swamp hut. As you approach you see a light burning inside. \n -enter hut \n -burn down hut");
            if(swampPath = "enter"){
                alert("You entered the hut. There is a Witch bend over a black cauldron on the fire.");
                var insideHut = prompt("\n -say hello \n- look at \n -kill witch")
                if(insideHut == "say hello" || insideHut == "say hi");
                    var huthello = prompt("You say hello and the witch turns around and She is shooked that someone was nice enough to say hello that she give you a health potion.");
                else if(insideHut == "look at" || insideHut == "look");
                    var hutlook = prompt("You look at the Witch and you realize she is making some dinner for herself. \n -introduce yourself /n -kill her");
                else if(insideHut == "kill witch");
                        var attackWitch = prompt("You rush the witch and smit her before she realizesyou were there. You are now witchunter. Gain a streaght potion");
                    
            }
            else if(swampPath = "burn down hut"){
                alert("You burn down the hut... You are an evil person.");
            }
            else{
                alert("Don't throw Rocks at the hut Please!")
            }
            
    }
    else if(swampEnv == "Swim"){
        
    }