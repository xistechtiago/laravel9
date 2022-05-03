function compras(trabalho1, trabalho2){

    const comprarPc = trabalho1 || trabalho2;
    const comprarCelular = trabalho1 && trabalho2;
    const comprarNote  = !!(trabalho1 ^ trabalho2);
    const comptarTv = trabalho1 != trabalho2;

    return {comprarPc, comprarCelular,comprarNote, comptarTv }
    
}
    console.log(true,true);