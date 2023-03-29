import { FC } from 'react'
import { Message } from '../../types'
import ChatMessage from './ChatMessage'
import Input from './Input'
import Loader from './Loader'

interface Props {
  messages: Message[]
  loading: boolean
  onSend: (message: Message) => void
}

const Chat: FC<Props> = ({ messages, loading, onSend }) => {
  return (
    <div className="flex flex-col rounded-lg px-2 sm:p-4 sm:border border-neutral-300">
      {messages.map((message, index) => (
        <div key={index} className="my-1 sm:my-1.5">
          <ChatMessage message={message} />
        </div>
      ))}

      {loading && (
        <div className="my-1 sm:my-1.5">
          <Loader />
        </div>
      )}

      <div className="mt-4 sm:mt-8 bottom-[56px] left-0 w-full">
        <Input onSend={onSend} />
      </div>
    </div>
  )
}

export default Chat
