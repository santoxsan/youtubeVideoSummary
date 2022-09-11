
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

exports.lambdaHandler = async (event) => {
    const response = await openai.createCompletion({
  model: "text-davinci-002",
  prompt: event.message,
  temperature: 0.7,
  max_tokens: 256,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0,
});
console.log(response)
return {message:response.data.choices[0].text}
};




