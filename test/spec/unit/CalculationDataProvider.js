export const testData = {
  add: [
    { op1: 0, op2: 0, expected: 0 },
    { op1: 1, op2: 1, expected: 2 },
    { op1: 2, op2: 2, expected: 4 },
    { op1: 15191, op2: 27884, expected: 43075 },
    { op1: 1234567890, op2: 987654321, expected: 2222222211 },
  ],
  subtract: [
    { op1: 0, op2: 0, expected: 0 },
    { op1: 2, op2: 1, expected: 1 },
    { op1: 4, op2: 2, expected: 2 },
    { op1: 43075, op2: 27884, expected: 15191 },
    { op1: 2222222211, op2: 987654321, expected: 1234567890 },
  ],
  multiply: [
    { op1: 0, op2: 0, expected: 0 },
    { op1: 1, op2: 1, expected: 1 },
    { op1: 2, op2: 2, expected: 4 },
    { op1: 15191, op2: 27884, expected: 423585844 },
    { op1: 1234567890, op2: 987654321, expected: 1219326311126352600 },
  ],
  divide: [
    { op1: 0, op2: 0, expected: null },
    { op1: 1, op2: 1, expected: 1 },
    { op1: 4, op2: 2, expected: 2 },
    { op1: 423585844, op2: 27884, expected: 15191 },
    { op1: 1219326311126352600, op2: 987654321, expected: 1234567890 },
  ],
}
