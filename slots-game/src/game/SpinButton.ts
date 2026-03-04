 import { Container, Graphics, Text, TextStyle } from 'pixi.js';

  export class SpinButton {
    private container: Container;

    constructor(onSpin: () => void) {
      this.container = new Container();
      this.container.eventMode = 'static';
      this.container.cursor = 'pointer';

      this.buildButton();

      this.container.on('pointerdown', onSpin);
    }

    private buildButton(): void {
      const bg = new Graphics();
      bg.roundRect(0, 0, 200, 60, 30);
      bg.fill('#e74c3c');

      const style = new TextStyle({
        fontFamily: 'Arial',
        fontSize: 24,
        fill: '#ffffff',
        fontWeight: 'bold',
      });

      const label = new Text({ text: 'SPIN', style });
      label.anchor.set(0.5);
      label.x = 100;
      label.y = 30;

      this.container.addChild(bg);
      this.container.addChild(label);
    }

    getContainer(): Container {
      return this.container;
    }
  }
