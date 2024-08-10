const MOD = 1000000007;

function countArrays(N, K) {
  const maxVal = (1 << K) + 1;

  // DP table where dp[length][last] is the number of valid arrays of length 'length' ending with 'last'
  let dp = Array.from({ length: N + 1 }, () => Array(maxVal).fill(0));

  // Base case: arrays of length 1
  for (let last = 1; last <= maxVal; last++) {
    dp[1][last] = 1;
  }

  // Fill DP table
  for (let length = 1; length < N; length++) {
    for (let last = 1; last <= maxVal; last++) {
      if (dp[length][last] > 0) {
        for (let next = 1; next <= maxVal; next++) {
          if ((last & next) > 0) {
            dp[length + 1][next] =
              (dp[length + 1][next] + dp[length][last]) % MOD;
          }
        }
      }
    }
  }

  // Sum up all arrays of length N
  let result = 0;
  for (let last = 1; last <= maxVal; last++) {
    result = (result + dp[N][last]) % MOD;
  }

  return result;
}

// Test cases
console.log(countArrays(2, 3)); // Example case
console.log(countArrays(3, 4)); // Example case
