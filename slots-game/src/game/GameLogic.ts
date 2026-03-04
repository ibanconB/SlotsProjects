  export interface SpinResult {
    symbols: number[];
    win: boolean;
    prize: number;
  }

  const SYMBOL_COUNT = 5;

  export function getSpinResult(bet: number): SpinResult {
    const symbols = Array.from({ length: 3 }, () =>
      Math.floor(Math.random() * SYMBOL_COUNT)
    );

    const win = symbols[0] === symbols[1] && symbols[1] === symbols[2];
    const prize = win ? bet * 10 : 0;

    return { symbols, win, prize };
  }
