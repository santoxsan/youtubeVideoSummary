
const { Configuration, OpenAIApi } = require("openai");


exports.lambdaHandler = async (events) => {

  const configuration = new Configuration({
    apiKey: events.openaiAccesKey,
  });
  const openai = new OpenAIApi(configuration);
    const response = await openai.createCompletion({
  model: "text-davinci-002",
  prompt: events.message,
  temperature: 0.7,
  max_tokens: 256,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0,
});
console.log(response)
return {message:response.data.choices[0].text}
};




