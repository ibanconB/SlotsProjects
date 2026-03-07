# Frontend — Slots Game

## Stack
- Vite + TypeScript + PixiJS v8

## Estructura de archivos
```
src/
├── main.ts                  # Inicialización de la app PixiJS
└── game/
    ├── SlotMachine.ts       # Clase principal, orquesta todo
    ├── Reel.ts              # Carrete individual con animación y mask
    ├── SpinButton.ts        # Botón interactivo
    └── GameLogic.ts         # Mock de lógica — sustituir por llamada al backend
```

## Configuración actual
- Canvas: 800x600
- Reels: 3
- Símbolos visibles por reel: 3
- Símbolos totales (placeholder): 5 colores

## GameLogic.ts — estado actual
El mock ha sido reemplazado por una llamada real al backend.

```typescript
export interface SpinResult {
    reelLayout: number[][];
    winningLines: number[][];
    creditsWon: number;
}

export async function getSpinResult(bet: number): Promise<SpinResult>
// POST http://localhost:8080/api/spin con { bet }
```

## Contrato con el backend
- `reelLayout`: array de 9 enteros (grid 3×3), valores 0–4
- Carrete `i` muestra índices `i`, `i+3`, `i+6` del reelLayout
- Símbolos en `Reel.ts`: `['#e74c3c', '#3498db', '#2ecc71', '#f39c12', '#9b59b6']` (índice = símbolo)

## Pendiente frontend
- [ ] Feedback visual de victoria (mensaje "WIN!", iluminar líneas ganadoras)
- [ ] Deshabilitar botón mientras gira
- [ ] Animación de parada más suave
- [ ] Imágenes reales de símbolos (el usuario las aportará)
- [ ] Centrado del canvas (pendiente revisar)

## Conceptos aprendidos
- Módulos TypeScript (import/export)
- Clases, constructores, métodos privados
- Scene graph, stage, Container, Graphics, Text
- Game loop con app.ticker
- Eventos de input (eventMode, pointerdown)
- Masks para recorte de contenido
- Separación de capas: visual vs lógica
- `async/await` y `Promise<T>` para llamadas al backend
- `fetch()` con método POST y body JSON
