
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

exports.handler = async (event) => {
    const response = await openai.createCompletion({
  model: "text-davinci-002",
  prompt: "Hacer un resumen largo del siguiente texto: \n\n\"encontré con esta noticia que dice venga y obtenga sus casas gratis no me lo podía creer comprar una propiedad en los eeuu pudiera decirse que después de obtener la residencia permanente es el siguiente objetivo más importante para todo aquel que desea venirse a vivir a este país sin embargo por todos es conocido lo difícil del proceso que es adquirir una vivienda por la cantidad de trámites que implica sin dejar de mencionar que para que un banco te otorgue un préstamo tienes que tener el dinero suficiente para que cumplas los requisitos así que esto de que una ciudad esté regalando casas sin duda alguna es un sueño hecho realidad cuando quise corroborar la información sólo encontré dos portales de noticias adicionales que dieron fe de la noticia pero no explicaron ni los requisitos y los procedimientos para aplicar a una de estas maravillosas casas que según leí el máximo que podrías pagar sería una locura así que apenas identifique el vacío informativo supe inmediatamente averiguar qué tan fácil sería todo este asunto nuestro destino en esta ocasión será la ciudad de mones en cómo nacen en el estado de pensilvania al noreste del país apenas investigue dónde era compré un boleto de avión hasta el aeropuerto más cercano ubicado en la ciudad de pittsburgh agarré mis maletas cargué nuestras cámaras e inclusive me llevé algunos dólares en efectivo para estar preparado y contar con suerte a ver si al final de esta aventura me hacía con una o varias casas aquí en eeuu oye yo no sé por qué si no ha ocurrido la genial y fabulosa idea de cambiarle el nombre a este canal por el de los cazadores de mitos que no sé por qué es mejor un nombre que pudiera llegar a pegar porque si lo que dice el internet es cierto yo me he venido preparado mira mira lo que trae acá 1 2 3 4 5 un billete de 5 dólares para hacer un gran total de 10 dolaritos si lo que dice en las noticias es real al final de este vídeo yo pudiera comprarme nada más y\"\n\n\n\n\n\n\n\nEl resumen extendido del texto es: ",
  temperature: 0.7,
  max_tokens: 256,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0,
});

console.log(response)
};





