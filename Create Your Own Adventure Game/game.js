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
			lunch:0,
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
		},
        potions:{
            heal:0,
            strength:0
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
    while(!confirm("Are you sure you want "+playerName+" as a name")){
            playerName = prompt("What name do you want?");
    }
    School();
        
    function School(){
            var school = prompt("You wake up in a Gym at a school. \n- look").toLowerCase();
            
            if(school == "look around" || school == "look"){
                    var schoolLook = prompt("The Gym is big with four doors. There is a door in front of you. A door to your right. A door to your left. And a door behind you. Which path will you take? \n- go left \n- go right \n- go forward \n- go behind \n- stop");
            }
            if(school == "stop"){
                var resume = confirm("Do you wish to continue?");
			
			     if(resume){
				Prison();
			}
			else{
				alert("Game Over!");
}
            }
            else if(school)
                 var school = prompt("You go to the door to the left. You enter a classroom. There is a bookshelf against the wall. You see that there is stuff on the teacher's desk and student's desk. \n- go to student's desk \n- go to teacher's desk \n- leave room");
                 if(school == "go left" || school == "left"){
                    var studentdesk = prompt("You go to the student's desk. You see a few coins on the desk. And a couple of arrows on the desk. Do you want to take the items? \n- take \n- teacher's room \n- leave room");
                    if(studentdesk == "take"){
                            player.inventory.coins +20;
                            player.inventory.weapons.arrows +15;
                    }
                
                     var teacherdesk = prompt("You go to the teacher's desk. You can see that there is an apple on the desk and a ruler. \n- take \n- student's desk \n- leave room");
                    if(studentdesk == "take"){
                        player.inventory.weapons.stick +1;
                        player.inventory.food.apple +1;
                    }
                    if(teacherdesk == "student's desk"){
                         studentdesk();
                     }
                    if(teacherdesk == "leave room"){
                        School();
                    }
                }
            
                else if(school == "go right" || school == "right"){
                    var school = prompt("You go to the door to the right. You have entered the Teacher's Lounge. There is a long table with many things on it. There is someone's water bottle with an apple. On the other side of the table there is a bow with some arrows. The bow and arrows are weird thing to find in a Teacher's Lounge but you don't question it, because now you can get a bow with some arrows. Would you like to the table? \n- table \n- leave room");
                    if(school == "table"){
                        var table = prompt("Which side of the table? \n- food side \n- bow side");
                        if(table == food side){
                            var foodSide = prompt("Would you like to take the water and apple? \n- take");
                        
                        if(foodSide == take){
                            player.inventory.food.water +1;
                            player.inventory.food.apple +1;
                        }
                        }    
                        if(table == bow side){
                            var bowSide = prompt("Would you like to take the bow and arrows? \n- take");
                            player.inventory.weapons.bow +1;
                            player.inventory.weapons.arrows +5;
                        }
                    }
                    
                    }
                else if(school == "go forward" || school == "forward"){
                    var school = prompt("You go to the room infront of you. You've enter the cafe in the school. There are 2 tables. One with a kid's lunch on it with an apple. And the other table has a mysterious key on it with some gold. \n- First Table \n- Second Table");
                    var firstTable = prompt("The kid's lunch and the apple is great for your health. \n- take \n- second table \n- leave room");
                    if(firstTable == take){
                        player.inventory.food.lunch +1;
                        player.inventory.food.apple +1;
                    }
                    if(firstTable == second table){
                        secondTable();
                    }
                    if(firstTable == leave room){
                        School();
                    }
                    var secondTable = prompt("The key makes you want to go to the room that is behind you when you are in the Gym. And having some gold is too. \n- take \n- first table \n- leave room");
                    if(secondTable == take){
                        player.inventory.keys.chest +1;
                        player.inventory.coins +5;
                    }
                    if(secondTable == first table){
                        firstTable();
                    }
                    if(secondTable == leave room){
                        School();
                    }
                    }
                else if(inschool == "go behide" || school == "behind"){
                    var school = prompt("You go to the classroom behide you. You find that the room has big chest in the room. With arrows scattered around the room. \n- open chest \n- take arrows \n- leave room");
                    if(school == open chest){
                        player.inventory.keys.chest -1;
                        player.inventory.coins +100;
                        player.inventory.armor.armor +1;
                        player.inventory.armor.shield +1;
                    }
                    if(school == take arrows){
                        player.inventory.weapons.arrows +10;
                    }
                    if(school == leave room){
                        School();
                    }
                    }
                
                else if(school == "swamp" || school == "Swamp"){
                        Swamp();
                }
    
                else if(inschool == "coins"){
                        checkCoins();
                        School();
                }
                
                else{
                    alert("I don't know what "+inschool+" is!");
                    School();
                }
            }
    
    
    
    function Blacksmithshop(){
        var arrowsinShop = 100;
        var arrowPrice = 1;
            alert("The Blacksmith wonders why a bug is doing in his shop");
                var blacksmith = prompt("What do you want to buy? \n- sword \n- shield \n- armor \n- arrows \n- leave shop");
                    if(blacksmith == "sword" || blacksmith == "buy sword" && inventory.coins >=30){
                        var swordBuy = confirm("Are you sure you want to buy this sword?");
                        if(swordBuy){
                            // Adds sword +1
                            inventory.sword ++;
                            // displays swords owned
                            alert("You own" +inventory.sword+"swords");
                            // Takes money out of account for swords
                            inventory.coins = inventory.coins - 30;
                            // displays coins left in account
                            alert("You have "+inventory.coins+"coins remaining");
                            Blacksmith();
                        }
                         if(blacksmith == "shield" || blacksmith == "buy shield" && inventory.coins >=25){
                        var swordBuy = confirm("Are you sure you want to buy a shield?");
                        if(swordBuy){
                            // Adds shield +1
                            inventory.shield ++;
                            // displays shields owned
                            alert("You own" +inventory.shield+"shield");
                            // Takes money out of account for shields
                            inventory.coins = inventory.coins - 25;
                            // displays coins left in account
                            alert("You have "+inventory.coins+"coins remaining");
                            Blacksmith();
                        }
                        else if(blacksmith == "armor" || blacksmith == "buy armor" && inventory.coins >=30){
                        var armorBuy = confirm("Are you sure you want to buy armor?");
                        if(armorBuy){
                            // Adds armor +1
                            inventory.armor ++;
                            // displays armor owned
                            alert("You own" +inventory.armor+"armor");
                            // Takes money out of account for armor
                            inventory.coins = inventory.coins - 30;
                            // displays coins left in account
                            alert("You have "+inventory.coins+"coins remaining");
                            Blacksmith();
                        }
                        else if(blacksmith == "arrows" || blacksmith == "arrow"){
                            var arrowCon = prompt("How many arrows do you want to buy?");
                            
                            while(!comfirm("Are you sure you want to buy "+arrowCon+" arrows, for "+arrowPrice+" an arrow")){
                                arrowCon = prompt("How many arrows do you wish to buy?");
                            }
                            for(i = 1; i <= arrowCon; i++){
				                        inventory.arrows ++;
				                        console.log("You have "+inventory.arrows+" arrows");				
			                 }
                            alert("You have purchased "+arrowCon+" arrows. Thank you!");
                        
                    }
                        }
                        else if(blacksmith == "exit" || blacksmith == "leave");{
                        Forest();
                     }
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
        var swampEnv = prompt("You have enter a Swamp. \n- follow path");
        
        if(swampEnv == "follow" || swampEnv == "follow path"){
            var swampPath = prompt("You enter on the swamp path and head northeast in the disance you see a swamp hut. As you approach you see a light burning inside. \n- enter hut \n- burn down hut");
            if(swampPath == "enter"){
                alert("You entered the hut. There is a Witch bend over a black cauldron on the fire.");
                var insideHut = prompt("\n- say hello \n- look at \n- kill witch")
                if(insideHut == "say hello" || insideHut == "say hi"){
                    alert("You say hello and the witch turns around and She is shocked that someone was nice enough to say hello that she give you a health potion.");
                    player.inventory.potions.heal ++;
                    }
                else if(insideHut == "look at" || insideHut == "look"){
                    alert("You look at the Witch and you realize she is making some dinner for herself. \n- introduce yourself /n- kill her");
                    var introduceyourself = prompt("Hello my name is" +playerName);
                     function GetRandInt(max){
	                           var randInt = Math.floor(Math.random()* Math.floor(2));
	
	                       return randInt;
	
                            }
                    var afterintro = prompt("She like the sound of your name. She decides to give you a strength potion.")
                    var afterintro = prompt("She doesn't like the sound of your name. She doesn't like you.")
                    var killwitch = prompt("Wow you killed her. Gain a health potion");
                    }
                    }
                else if(insideHut == "kill witch"){
                        alert("You rush the witch and smit her before she realizes you were there. You are now Witch Hunter. Gain a health potion");
                    player.inventory.potions.heal ++;
                    }
                    
            
            else if(swampPath = "burn down hut"){
                alert("You burn down the hut... You are an evil person.");
            }
            }
            else{
                alert("Don't throw Rocks at the hut Please!");
            }
    
    }
    
}