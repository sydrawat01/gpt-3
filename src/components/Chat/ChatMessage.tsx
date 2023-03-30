import { FC } from 'react'
import { Message } from '../../types'

interface Props {
  message: Message
}
const ChatMessage: FC<Props> = ({ message }) => {
  return (
    <div
      className={`flex flex-col ${
        message.role === 'assistant' ? 'items-start' : 'items-end'
      }`}
    >
      <div
        className={`flex items-center ${
          message.role === 'assistant'
            ? 'bg-neutral-200 text-neutral-900'
            : 'bg-blue-500 text-white'
        } rounded-2xl px-3 py-2 max-w-[67%] whitespace-pre-wrap`}
        style={{ overflow: 'anywhere' }}
      >
        {message.content}
      </div>
    </div>
  )
}

export default ChatMessage
