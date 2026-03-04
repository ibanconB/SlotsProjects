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

## GameLogic.ts — importante
Este archivo es un **mock temporal**. Cuando el backend esté listo, reemplazar `getSpinResult()` por un `fetch()` al endpoint `/api/spin`. El resto del código no debe cambiar.

## Pendiente frontend
- [ ] Feedback visual de victoria (mensaje "WIN!", iluminar líneas ganadoras)
- [ ] Deshabilitar botón mientras gira
- [ ] Animación de parada más suave
- [ ] Imágenes reales de símbolos (el usuario las aportará)
- [ ] Centrado del canvas (pendiente revisar)
- [ ] Conectar con backend real (sustituir GameLogic.ts)

## Conceptos aprendidos
- Módulos TypeScript (import/export)
- Clases, constructores, métodos privados
- Scene graph, stage, Container, Graphics, Text
- Game loop con app.ticker
- Eventos de input (eventMode, pointerdown)
- Masks para recorte de contenido
- Separación de capas: visual vs lógica
