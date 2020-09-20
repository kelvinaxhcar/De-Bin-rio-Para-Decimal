const binary = "10010";

convert(binary);

function convert(binary){

    //Verifica se a entrada é um número vazio
    if (binary === '') return console.log('Digite um valor binário');

    //Verifica se a entrada tem apenas 0 ou 1
    binary.split('').map((char) => {
        if (char !== '0' && char !== '1') return console.log('Letras não são permitidos apenas números binários');
    });

    const decimal = parseInt(binary, 2);

    return console.log(decimal);

}
