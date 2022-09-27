const {somaHorasExtras, calculaSalario} = require('./operacoes')


describe('operações', ()=>{
    beforeAll(()=>{
        console.log('Hook antes de todos os casos de teste');
    })
    afterAll(()=>{
        console.log('Hook após todos os testes');
    })
    beforeEach(()=>{
        console.log('Hook antes de cada um dos testes iniciar');
    })
    afterEach(()=>{
        console.log('hook após cada um dos testes finalizar');
    })
    it('Deve somar horas extras', () => {
        const esperado = 10;
        const retornado = somaHorasExtras(5,5);
    
        expect(retornado).toBe(esperado);
    })
    
    it('deve calcular descontos', ()=>{
        const esperado = 5;
        const retornado = calculaSalario(10, 5);
    
        expect(retornado).toBe(esperado);
    })
})