# Frontend — Slots Game (NeonFruits)

## Stack
- Vite + TypeScript + PixiJS v8

## Estructura de archivos
```
src/
├── main.ts                  # Inicialización + carga de assets
└── game/
    ├── SlotMachine.ts       # Clase principal, orquesta todo
    ├── Reels.ts             # Carrete individual con animación y mask
    ├── SpinButton.ts        # Botón interactivo con setEnabled()
    └── GameLogic.ts         # Llamada real al backend POST /api/spin

public/
└── NeonFruits/
    └── symbols/
        ├── cherry.png
        ├── lemon.png
        ├── orange.png
        ├── grape.png
        └── watermelon.png
```

## Configuración actual
- Canvas: 800x600
- Reels: 3
- Símbolos visibles por reel: 3
- Símbolos: 5 imágenes neon (Sprite con Texture)

## Contrato con el backend
- `reelLayout`: array de 9 enteros (grid 3×3), valores 0–4
- Carrete `i` muestra índices `i`, `i+3`, `i+6` del reelLayout
- Mapeo de índice a textura en `Reels.ts`: SYMBOL_TEXTURES[]

## Estado actual ✓
- Botón SPIN desactivado durante el spin (`setEnabled`)
- Sprites con imágenes neon funcionando (fondo negro, sin transparencia falsa)
- Assets cargados en `main.ts` con `Assets.load()` antes de iniciar el juego
- Flujo completo frontend ↔ backend funcionando
- Canvas centrado en la página (`canvas { display: block }` en style.css)

## Pendiente frontend
- [x] **Animación de ganancia** — muestra `+X` en dorado en el centro de los reels al ganar, desaparece a los 2s. `resultText` añadido al container al final del constructor para que quede por encima de los reels.
- [x] Animación de parada suave — deceleración con factor `0.95`, umbral `0.2`, snap a `y=0`
- [x] Parada en cascada — `REEL_STOP_DELAY = 400ms`, cada reel para con `index * delay`. Resultado y botón se habilitan tras `lastReelStop + 1500ms`
- [ ] Feedback visual de victoria (iluminar líneas ganadoras)
- [ ] Mejorar diseño general (background, marco de reels, logo NeonFruits)

## Conceptos aprendidos
- Módulos TypeScript (import/export)
- Clases, constructores, métodos privados
- Scene graph, stage, Container, Graphics, Text, Sprite
- Texture y Assets.load() para carga de imágenes
- Game loop con app.ticker
- Eventos de input (eventMode, pointerdown)
- Masks para recorte de contenido
- Separación de capas: visual vs lógica
- `async/await` y `Promise<T>` para llamadas al backend
- `fetch()` con método POST y body JSON
- Estado del botón (enabled/disabled) con alpha y eventMode
