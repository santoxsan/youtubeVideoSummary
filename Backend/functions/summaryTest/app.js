
const { Configuration, OpenAIApi } = require("openai");


exports.lambdaHandler = async ({isLongSummary,openaiAccesKey,message}) => {

  const configuration = new Configuration({
    apiKey: openaiAccesKey,
  });

  const prompt=`Make a ${isLongSummary} summary of the next text:\n${message}\n\nThe ${isLongSummary}  summary is:`
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



