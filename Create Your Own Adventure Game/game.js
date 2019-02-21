// Single line comment
/*

Multiline comment

*/
var player = {
	name:"Fred",
	health:100,	
	inventory:{
        coins:{
            gold:20
        },
		keys:{
			chest:0,
            hut:0,
		},
		food:{
			water:1,
			bread:0,
			fish:0,
			apple:0,			
		},
		weapons:{
			sword:0,
            bow:0,
            arrows:0,
            stick:0,
		},
		armor:{
			shield:0,
			armor:0,
		}		
	}
	
}
 
// Start Game
Game();

function Game(){
    
    // document.write("");
    alert("Welcome to your new adventure!");
    var playerName = prompt("What is your name?");
    alert(" Hello "  +playerName);
    
    School();
        
    function School(){
            var school = prompt("You are in a Gym. You can look around.").toLowerCase();
            
            if(school == "look around" || school == "look"){
                    var schoolLook = prompt("The Gym is big with four doors. There is a door in front of you. A door to your right. A door to your left. And a door behind you. Which path will you take? \n- go left \n- go right \n- go forward \n- go behind")
                if(inschool == "go left" || inschool == "left"){
                    var inschool = prompt("You go to the door to the left. You enter a classroom. There is a bookshelf against the wall. You see that there is stuff on the teacher's desk and student's desk. \n- go to student's desk \n- go to teacher's desk \n- leave room");
                    var studentdesk = prompt("You go to the student's desk. You see a few coins on the desk. And a couple of arrows on the desk. You collect the arrows and the gold.")
                    var teacherdesk = prompt("You go to the teacher's desk. You can see that there is an apple on the desk and a ruler. ")
                    
                    }
                else if(inschool == "go right" || inschool == "right"){
                    var inschool = prompt("You go to the door to the right");
                    }
                else if(inschool == "go forward" || "forward"){
                    var inschool = prompt("You go to the classroom infront of you.");
                    }
                else if(inschool == "go behide" || "behind"){
                    var inschool = prompt("You go to the classroom behide you.");
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
    
                else if(school == "coins"){
                        checkCoins();
                        School();
                }
                
                else{
                    alert("I don't know what "+school+" is!");
                    School();
                }
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
                        Forest();
                     }

            }
    }
    
    function Forest(){
                    var insideforest = prompt("\n- top left \n- top right \n- left \n- right \n- bottom left \n-bottom right").toLowerCase();
                    
                    switch(insideforest){
                        case "top left" || "go top left":
                            var topleft = prompt("you move forward then go to the left of the forest.");
                            Forest();
                        break;
                        case "top right":
					           alert("You go forward then right of the forest.");
                                Forest();
                        break;
				        case "left":
					           alert("You go to the left. ");
					           Forest();
				        break;
				        case "right":
					           alert("You go to the right.");
					           Forest();
				        break;
                        case "bottom left":
					           alert("You go to the bottom left of the forest.");
					           Forest();
                        break;
                        case "bottom right":
					           alert("You go to the bottom right of the forest.");
					           Forest();
                        break;
				        default:
					           alert("I don't know what "+insideforest+" is!");
					           Forest();
                        break; 
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
                    var introduceyourself = prompt("Hello my name is" +playerName);
                     function GetRandInt(max){
	                           var randInt = Math.floor(Math.random()* Math.floor(2));
	
	                       return randInt;
	
                            }
                    var afterintro = prompt("She like the sound of your name. She decides to give you a strength potion.")
                    var afterintro = prompt("She doesn't like the sound of your name. She doesn't like you.")
                    var killwitch = prompt("Wow you killed her. Gain a health potion");
                    }
                else if(insideHut == "kill witch"){
                        var attackWitch = prompt("You rush the witch and smit her before she realizes you were there. You are now Witch Hunter. Gain a health potion");
                    }
                    
            
            else if(swampPath = "burn down hut"){
                alert("You burn down the hut... You are an evil person.");
            }
            }
            else{
                alert("Don't throw Rocks at the hut Please!");
            }
            
    }
    else if(swampEnv == "Swim"){
        
    }
    
    else{
            alert("I don't understand"+swampEnv);
    }
    }
    
    
}