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