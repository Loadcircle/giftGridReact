const { getGifs } = require("../../helpers/getGifs");

describe('Test en get gifs', ()=>{

    test('Prueba debe de traer resultados', async ()=>{

        const gifst = await getGifs('Palabra');
        console.log(gifst, gifst.length)
        expect(gifst.length).toBe(10)
    });

    test('Debe traer por defecto 10', async ()=>{
        
        const gifst = await getGifs();

        expect(gifst.length).toBe(10)
    });

})