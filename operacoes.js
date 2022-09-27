const somaHorasExtras = (salario, valorHorasExtras) => {
    return salario + valorHorasExtras;
}

const calculaSalario = (salario, descontos) => {
    return salario - descontos;
}

module.exports = {
    somaHorasExtras,
    calculaSalario
}