import { Application } from 'pixi.js';
  import { SlotMachine } from './game/SlotMachine';

  const app = new Application();

  await app.init({
    width: 800,
    height: 600,
    background: '#1a1a2e',
  });

  document.getElementById('app')!.appendChild(app.canvas);

  new SlotMachine(app);
