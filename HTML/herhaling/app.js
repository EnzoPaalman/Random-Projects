class App{
    runApplication(){
        console.log("Hello world");
        let stat1 = this.rollStat();
        console.log(stat1);
        let stat2 = this.rollStat();
        console.log(stat2);
        let stat3 = this.rollStat();
        console.log(stat3);
        let stat4 = this.rollStat();
        console.log(stat4);
        let stat5 = this.rollStat();
        console.log(stat5);
        let stat6 = this.rollStat();
        console.log(stat6);


    }    

    rollDice(){
        let random = Math.floor(Math.random() * 6 +1);
        return random;
    }
    rollStat(){
        let d1 = this.rollDice();
        let d2 = this.rollDice();
        let d3 = this.rollDice();
        let d4 = this.rollDice();

        let diceArray = [d1, d2, d3, d4];
        console.log(diceArray);
        diceArray.sort();
        console.log(diceArray);
        let som = diceArray[1] + diceArray[2] + diceArray[3];
        return som;

    }
}
let app = new App();
app.runApplication();