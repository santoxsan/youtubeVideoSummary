exports.handler = async (event) => {
    const texto = {"texto":event.texto.split("\n").filter(x=>x).filter(x => x.length >= 3 ).filter(x=> !x.includes('-->')).join(" ")}
    
    return texto
};
