  export interface SpinResult {
    reelLayout: number[];
    winningLines: number[][]; 
    creditsWon: number;
  }



   export async function getSpinResult(bet: number): Promise<SpinResult> {
     const response = await fetch("http://localhost:8080/api/spin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ bet })
    });

      const data = await response.json();
      return data;

  }
