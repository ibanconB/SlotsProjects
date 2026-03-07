import { Container, Graphics } from 'pixi.js';

  const SYMBOL_COLORS = ['#e74c3c', '#3498db', '#2ecc71', '#f39c12', '#9b59b6'];
  const SYMBOL_HEIGHT = 90;
  const VISIBLE_SYMBOLS = 3;

  export class Reel {
    private container: Container;
    private symbolsContainer: Container;
    private spinning: boolean = false;
    private speed: number = 0;
      private symbols: Graphics[] = [];

    constructor() {
      this.container = new Container();
      this.symbolsContainer = new Container();
      this.container.addChild(this.symbolsContainer);
      this.buildSymbols();

    const mask = new Graphics();
    mask.rect(0, 0, 180, SYMBOL_HEIGHT * VISIBLE_SYMBOLS);
    mask.fill(0xffffff);

  this.container.addChild(mask);
  this.symbolsContainer.mask = mask;

    }

    private buildSymbols(): void {
      for (let i = 0; i < 6; i++) {
        const color = SYMBOL_COLORS[Math.floor(Math.random() * SYMBOL_COLORS.length)];

        const symbol = new Graphics();
        symbol.roundRect(0, 0, 160, 80, 8);
        symbol.fill(color);

        symbol.x = 10;
        symbol.y = i * SYMBOL_HEIGHT;
        this.symbols.push(symbol);

        this.symbolsContainer.addChild(symbol);
      }
    }

    spin(): void {
      this.spinning = true;
      this.speed = 20;
    }

    stop(): void {
      this.spinning = false;
      this.speed = 0;
      this.symbolsContainer.y = 0;
    }

    update(): void {
      if (!this.spinning) return;

      this.symbolsContainer.y += this.speed;

      const totalHeight = SYMBOL_HEIGHT * VISIBLE_SYMBOLS;
      if (this.symbolsContainer.y >= totalHeight) {
        this.symbolsContainer.y -= totalHeight;
      }
    }

    getContainer(): Container {
      return this.container;
    }

    setResult(symbolIndexes: number[]): void {
   
    for (let i = 0; i < 3; i++) {
      const symbol = this.symbols[i];
      symbol.clear();
      symbol.roundRect(0, 0, 160, 80, 8);
      symbol.fill(SYMBOL_COLORS[symbolIndexes[i]]);
  }
  }

  }
