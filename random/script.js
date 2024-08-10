function countPerfectlyEvenArrays(N, M, K) {
  // Helper function to determine if two numbers are perfectly even
  function arePerfectlyEven(x, y) {
    return (x * y - x - y) % 2 === 0;
  }

  // Initialize DP table
  let dp = Array.from({ length: N + 1 }, () =>
    Array.from({ length: K + 1 }, () => Array(M + 1).fill(0))
  );

  // Base case: arrays of length 1 with 0 perfectly even pairs
  for (let i = 1; i <= M; i++) {
    dp[1][0][i] = 1;
  }

  // Fill DP table
  for (let length = 2; length <= N; length++) {
    for (let k = 0; k <= K; k++) {
      for (let last = 1; last <= M; last++) {
        for (let prev = 1; prev <= M; prev++) {
          let newCount = k;
          if (arePerfectlyEven(prev, last)) {
            newCount++;
          }
          if (newCount <= K) {
            dp[length][newCount][last] += dp[length - 1][k][prev];
            // To avoid overflow, use modulo operation
            dp[length][newCount][last] %= 1000000007;
          }
        }
      }
    }
  }

  // Sum up all arrays of length N with exactly K perfectly even pairs
  let result = 0;
  for (let last = 1; last <= M; last++) {
    result += dp[N][K][last];
    // To avoid overflow, use modulo operation
    result %= 1000000007;
  }

  return result;
}

// Test cases
console.log(countPerfectlyEvenArrays(2, 2, 0)); // Expected output: 3
console.log(countPerfectlyEvenArrays(2, 2, 1)); // Expected output: 2
console.log(countPerfectlyEvenArrays(10, 10, 2)); // Expected output: 353515611
