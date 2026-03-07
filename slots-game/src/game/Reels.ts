import { Container, Graphics,Sprite, Texture } from 'pixi.js';


  const SYMBOL_HEIGHT = 90;
  const VISIBLE_SYMBOLS = 3;

   const SYMBOL_TEXTURES = [
    '/NeonFruits/symbols/cherry.png',
    '/NeonFruits/symbols/lemon.png',
    '/NeonFruits/symbols/orange.png',
    '/NeonFruits/symbols/grape.png',
    '/NeonFruits/symbols/watermelon.png',
  ];

  export class Reel {
    private container: Container;
    private symbolsContainer: Container;
    private spinning: boolean = false;
    private speed: number = 0;
    private symbols: Sprite[] = [];

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
      const texture = Texture.from(SYMBOL_TEXTURES[Math.floor(Math.random() * SYMBOL_TEXTURES.length)]);
      const symbol = new Sprite(texture);

      symbol.width = 160;
      symbol.height = 80;
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
      this.symbols[i].texture = Texture.from(SYMBOL_TEXTURES[symbolIndexes[i]]);
    }
  }

  }
