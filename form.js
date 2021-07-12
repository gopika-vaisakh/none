class Form{
    constructor(){
       this.input1 = createInput("WO number");
       this.button1 = createButton('enter');
       this.button2 = createButton('enter');
       this.greeting1 = createElement('h2');
       this.greeting2 = createElement('h2');
       this.greeting3 = createElement('h2');
       this.greeting4 = createElement('h2');
       this.title = createElement('h2');
       this.reset = createButton('Reset');
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }
    display() {
        this.title.html("Stars");
        this.title.position(350, 50);
        this.title.style('font-size', '70px');
        this.title.style('color', 'skyblue');
        this.input1.position(550,400);
        this.input1.style('width', '200px');
        this.input1.style('height', '20px');
        this.input1.style('background', 'lavender');
        this.button1.position(560,500);
        this.button1.style('width', '200px');
        this.button1.style('height', '40px');
        this.button1.style('background', 'lightpink');
        this.reset.position(900, 660);
        this.reset.style('width', '100px');
        this.reset.style('height', '30px');
        this.reset.style('background', 'lightpink');

        this.button2.position(560,500);
        this.button2.style('width', '200px');
        this.button2.style('height', '40px');
        this.button2.style('background', 'lightpink');

        this.button1.mousePressed(() => {
            this.input1.hide();
            this.button1.hide();
            sel.hide();
            this.title.hide();
            player.name = this.input1.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting1.html(" Number : " + player.name)
            this.greeting1.position(400,250);
            this.greeting1.style('color', 'white');
            this.greeting1.style('font-size', '20px');

            this.greeting2.html("S M")
            this.greeting2.position(400,350);
            this.greeting2.style('color', 'white');
            this.greeting2.style('font-size', '20px');

            this.greeting3.html("F c")
            this.greeting3.position(400,450);
            this.greeting3.style('color', 'white');
            this.greeting3.style('font-size', '20px');

            this.greeting4.html("WO S")
            this.greeting4.position(400,550);
            this.greeting4.style('color', 'white');
            this.greeting4.style('font-size', '20px');
               
        });
            
        this.reset.mousePressed(() => {
            player.updateCount(0);
            game.update(0);



            var playerInfoRef = database.ref('players');
            playerInfoRef.remove();

            
        });

    }
}