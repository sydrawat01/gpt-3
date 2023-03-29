export enum OpenAIModel {
  DAVINCI = 'botdemoopenai',
}

export type Role = 'assistant' | 'user'

export interface Message {
  role: Role
  content: string
}
