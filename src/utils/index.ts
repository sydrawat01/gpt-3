import { Configuration, OpenAIApi } from 'openai'
import { Message, OpenAIModel } from '../types'

const basePath = 'https://testopenaisid.openai.azure.com/openai/deployments/'

const model = 'botdemoopenai'

export const azureOpenAiChatGPT = async (messages: Message[]) => {
  const configuration = new Configuration({
    basePath: basePath + 'botdemoopenai',

    apiKey: '7e90605a213947d1b226bfeb8f58f942',
  })

  const openai = new OpenAIApi(configuration)

  const completion = await openai.createCompletion(
    {
      model,

      prompt: [...messages],

      max_tokens: 1000,

      temperature: 1,

      frequency_penalty: 0,

      presence_penalty: 0,

      top_p: 0.5,

      best_of: 1,

      stop: null,
    },

    {
      headers: {
        'api-key': '7e90605a213947d1b226bfeb8f58f942',
      },

      params: { 'api-version': '2022-12-01' },
    }
  )

  return completion
}

// azureOpenAiChatGPT(model)
//   .then((result) => {
//     console.log(result.data.choices[0].text)

//     return 'ok'
//   })

//   .catch((err) => {
//     console.log(err)

//     return 'not ok'
//   })
