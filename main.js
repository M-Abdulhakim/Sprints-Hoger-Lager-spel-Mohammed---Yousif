     console.log('main is running');   
        
        
        const computerDiceOne = 0;
        const computerDiceTwo = 0;
        const playerDiceOne = 0;
        const playerDiceTwo = 0;
        const computerCreditsSpan = 0;
        const playerCreditsSpan = 0;
        const messageBox = 0;
        const diceButton = 0;
        const higherButton = 0;
        const lowerButton =0;
        const goButton = 0;

        let computerCredits = 0;
        let playerCredits = 0;
        let computerRoll = 0;
        let playerRoll = 0;
        let gameStarted = false;

        computerRoll = Math.floor(Math.random() * 6) + 1;
        playerRoll = Math.floor(Math.random() * 6) + 1;


        // Toon de gegenereerde getallen in de console
        console.log(`Computer rolde: ${computerRoll}`);
        console.log(`Speler rolde: ${playerRoll}`);

 

        // Bepaal de winnaar op basis van de gegenereerde getallen
        if (computerRoll === playerRoll) {
        console.log("Het is een gelijkspel!");
        } else if (computerRoll > playerRoll) {
          console.log("Computer wint!");
        } else {
         console.log("Speler wint!");
        }