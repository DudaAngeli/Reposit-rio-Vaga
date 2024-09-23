function fibonacciCheck(num) {
    let a = 0, b = 1;
    let fibonacciSequence = [a];

    while (b <= num) {
        fibonacciSequence.push(b);
        const next = a + b;
        a = b;
        b = next;
    }

    if (fibonacciSequence.includes(num)) {
        console.log(`${num} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`${num} não pertence à sequência de Fibonacci.`);
    }
}

const inputNumber = 21;
fibonacciCheck(inputNumber);