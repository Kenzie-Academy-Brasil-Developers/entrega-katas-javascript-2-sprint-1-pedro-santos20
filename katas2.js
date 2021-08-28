// comece a criar a sua função add na linha abaixo
function add(x, y) {
    return x + y
}

// descomente a linha seguinte para testar sua função
// console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');


// comece a criar a sua função multiply na linha abaixo
function multiply(a, b) {
    let mult = 0;
    for (i = 0; i < b; i++) {
        mult = add(mult, a)
    }
    return mult
}

// descomente a linha seguinte para testar sua função
console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');


// comece a criar a sua função power na linha abaixo
function power(x, n) {
    let resultado = 1;
    for (i = 0; i < n; i++) {
        resultado = multiply(n, resultado)
    }
    return resultado
}

// descomente a linha seguinte para testar sua função
console.assert(power(3, 4) === 81, ('A função power não está funcionando como esperado'));


// comece a criar a sua função factorial na linha abaixo
function factorial(z) {

}

// descomente a linha seguinte para testar sua função
// console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');


/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci


// descomente a linha seguinte para testar sua função
// console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');
