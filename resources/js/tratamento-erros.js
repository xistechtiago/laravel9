function Tratarerro(erro){
	// throw new Error['.....']
    throw 'errrouuu';
}

function imprimirnome(obj){
	try{
		console.log(obj.name.toUpperCase() + '!!!!')
	} catch (e){
		Tratarerro(e);
	}
      finally {
        console.log('final da execução')
      }
	}

const obj = { nome: 'Roberto' }
imprimirnome(obj)