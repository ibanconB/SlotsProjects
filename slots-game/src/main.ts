import './style.css';
import { Application, Assets } from 'pixi.js';
import { SlotMachine } from './game/SlotMachine';

const app = new Application();

await app.init({
  width: 800,
  height: 600,
  background: '#1a1a2e',
});

document.getElementById('app')!.appendChild(app.canvas);

await Assets.load([
  '/NeonFruits/symbols/cherry.png',
  '/NeonFruits/symbols/lemon.png',
  '/NeonFruits/symbols/orange.png',
  '/NeonFruits/symbols/grape.png',
  '/NeonFruits/symbols/watermelon.png',
]);

new SlotMachine(app);
