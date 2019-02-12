// Single line comment
/*

Multiline comment

*/

var player = {
	name:"Fred",
	health:100,	
	inventory:{
		keys:{
			home:0,
            hut:0,
			inn:0,
		},
		food:{
			water:1,
			bread:0,
			fish:0,
			apple:0,			
		},
		weapons:{
			sword:0,
			axe:0,
			knife:0,
            bow:0,
            arrows:0,
		},
		armor:{
			shield:0,
			armor:0,
		}		
	}
	
}

function GetRandInt(max){
	var randInt = Math.floor(Math.random()* Math.floor(max));
	
	return randInt;
	
}
 
// Start Game
Game();

function Game(){
    
    // document.write("");
    alert("A Far Way from Home");
    var playerName = prompt("What is your name?");
    alert("Welcome!"+ playerName);
    
    School();
        
    function School(){
            var school = prompt("You are in a Gym ").toLowerCase();
            
            if(school == "look around" || school == "look"){
                    var schoolLook = prompt("The Gym is big with four doors.There is a door in front of you, A door to your right, A door to your left. And a door behind you. Which path will you take? Or will you Quit before you even started!");
            }
            else if(school == "think"){
                    alert("You think Hey do I actully want to play this game");
                    var resume = confirm("Do you wish to continue?");
                    
                    if(resume){
                        School();
                    }
                    else{
                            alert("Game Over!!");
                    }
                }
                
                else if(school == "swamp"){
                        Swamp();
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
                if(insideHut == "say hello" || insideHut == "say hi"){
                    var huthello = prompt("You say hello and the witch turns around and She is shooked that someone was nice enough to say hello that she give you a health potion.");
                    }
                else if(insideHut == "look at" || insideHut == "look"){
                    var hutlook = prompt("You look at the Witch and you realize she is making some dinner for herself. \n -introduce yourself /n -kill her");
                    var hiwitch = prompt("Hello my name is" +playerName);
                    var killwitch = prompt("Wow you killed her. Gain a health potion");
                    }
                else if(insideHut == "kill witch"){
                        var attackWitch = prompt("You rush the witch and smit her before she realizes you were there. You are now WitcHunter. Gain a health potion");
                    }
                    
            }
            else if(swampPath = "burn down hut"){
                alert("You burn down the hut... You are an evil person.");
            }
            else{
                alert("Don't throw Rocks at the hut Please!");
            }
            
    }
    else if(swampEnv == "Swim"){
        
    }
    var resume = confirm("Do you wish to continue?");
                    
                    if(resume){
                        Swamp();
                    }
                    else{
                            alert("Game Over!!");
                    }
                
                
    else if(Swamp == "blacksmithshop"){
            Blacksmithshop();
                }
                
                else{
                    alert("I don't know what "+Swamp+" is!");
                    Swamp();
                }
    else{
            alert("I don't understand"+swampEnv);
    }
    }
    
    function Blacksmithshop(){
            alert("The Blacksmith wonders why a bug is in his shop");
                var blacksmith = prompt("What do you want to buy? \n -sword \n -shield \n -armor \n -leave shop");
                    if(blacksmith == "sword" || blacksmith == "buy sword" && inventory.coins >=100){
                        var swordBuy = confirm("Are you sure you want to buy this sword?");
                        if(swordBuy){
                            // Adds sword +1
                            inventory.sword ++;
                            // displays swords owned
                            alert("You own" +inventory.sword+"swords");
                            // Takes money out of account for swords
                            inventory.coins = inventory.coins - 100;
                            // displays coins left in account
                            alert("You have "+inventory.coins+"coins remaining");
                            Blacksmith();
                        }
                        else{
                        alert("Have a good day, come back again!");
                        Village();
                     }

            }
    }
    function Forest(){
                    var insideforest = prompt("-top left -top right -left -right -bottom left -bottom right").toLowerCase();
                    
                    switch(insideforest){
                        case "top left" || "go top left":
                            var topleft = prompt("you move forward then go to the left.");
                            Forest();
                        break;
                        case "top right":
					           alert("you go forward then right");
                                Forest();
                        break;
				        case "left":
					           alert("you go to the left");
					           Forest();
				        break;
				        case "right":
					           alert("you go to the right");
					           Forest();
				        break;
                        case "bottom left":
					           alert("you go to the bottom left");
					           Forest();
                        break;
                        case "bottom right":
					           alert("you go to the bottom right");
					           Forest();
                        break;
				        default:
					           alert("I don't know what "+insideforest+" is!");
					           Forest();
                        break; 
                    }
    }
}