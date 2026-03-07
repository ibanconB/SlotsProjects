import { Application, Container, Graphics, Text, TextStyle, Ticker } from 'pixi.js';
import { SpinButton } from './SpinButton';
import { Reel } from './Reels';
import { getSpinResult } from './GameLogic';



  export class SlotMachine {
    private container: Container;
    private reels: Reel[] = [];
    private balanceText!: Text;
    private balance: number = 1000;

    constructor(app: Application) {
      this.container = new Container();
      app.stage.addChild(this.container);

      this.buildBackground();
      this.buildReelsBackground();
      this.buildGameTitles();
      this.buildSpinButton();
      this.buildReels();
      this.setupGameLoop(app);
      
        
    }

  private buildReels(): void {
    for (let i = 0; i < 3; i++) {
      const reel = new Reel();
      const reelContainer = reel.getContainer();

      reelContainer.x = 110 + i * 200;
      reelContainer.y = 130;

      this.container.addChild(reelContainer);
      this.reels.push(reel);
    }
  }


    private buildBackground(): void {
      const bg = new Graphics();
      bg.roundRect(50, 50, 700, 500, 20);
      bg.fill('#2d1b69');
      this.container.addChild(bg);
    }

    private buildReelsBackground():void{
        const reelbg = new Graphics();
         reelbg.roundRect(100,120,600,300,0);
         reelbg.fill('#1a1a2e');
         this.container.addChild(reelbg);
    }

    private buildGameTitles():void{
        const titleStyle = new TextStyle({                                                                                                                     
        fontFamily: 'Arial',                                                                                                                                  
        fontSize: 32,                                                                                                                                         
        fill: '#ffffff',                                                                                                                                      
        fontWeight: 'bold',                                                                                                                                   
        });
         const title = new Text({ text: 'SLOTS', style: titleStyle });
         title.x = 400;                                                                                                                                          
        title.y = 70;                                                                                                                                           
        title.anchor.set(0.5);        
        
        const balanceStyle = new TextStyle({
            fontFamily:'Arial',                                                                                                                                  
            fontSize:18,                                                                                                                                          
            fill:  '#ffffff',                                                                                                                                     
        });
        
        this.balanceText = new Text({ text: `BALANCE: ${this.balance}`, style: balanceStyle });
        this.balanceText.x = 400;
        this.balanceText.y = 575;
        this.balanceText.anchor.set(0.5);
        this.container.addChild(this.balanceText);       
        

        this.container.addChild(title)
        
    }

    private buildSpinButton(): void {
        const button = new SpinButton(() => {
        this.reels.forEach(reel => reel.spin());

         setTimeout(async () => {
    const result = await getSpinResult(10);
    this.reels.forEach((reel, index) => reel.setResult([
      result.reelLayout[index],
      result.reelLayout[index + 3],
      result.reelLayout[index + 6]
  ]));
    this.reels.forEach(reel => reel.stop());

    if (result.winningLines.length > 0) {
      this.balance += result.creditsWon;
    } else {
      this.balance -= 10;
    }

    this.balanceText.text = `BALANCE: ${this.balance}`;
  }, 2000);

    });

        const btn = button.getContainer();
        btn.x = 300;
        btn.y = 440;
        this.container.addChild(btn);
  }

   private setupGameLoop(app: Application): void {
    app.ticker.add(() => {
      this.reels.forEach(reel => reel.update());
    });
  }




  }
