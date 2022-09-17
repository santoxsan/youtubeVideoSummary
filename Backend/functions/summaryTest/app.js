
const { Configuration, OpenAIApi } = require("openai");


const choosePrompt=(countryCode, isLongSummary, message)=>{
    if(countryCode === "es"){
        const texto = isLongSummary == 'short' ? "corto" : "largo";
        return `Hacer un resumen ${texto} del siguiente texto:\n${message}\n\nEl resumen ${texto} del texto es:`
    } 
    else if (countryCode === "en"){
        return `Make a ${isLongSummary} summary of the next text:\n${message}\n\nThe ${isLongSummary} summary is:`
    }

    throw new Error("Country code not supported")
}

exports.lambdaHandler = async ({isLongSummary, openaiAccessKey, message, countryCode}) => {

  const configuration = new Configuration({
    apiKey: openaiAccessKey,
  });
  const openai = new OpenAIApi(configuration);

  const prompt= choosePrompt(countryCode, isLongSummary, message);
  const response = await openai.createCompletion({
  model: "text-davinci-002",
  prompt,
  temperature: 0.7,
  max_tokens: 256,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0,
});
console.log(JSON.stringify(response.data.choices))
return {message:response.data.choices[0].text}
};



