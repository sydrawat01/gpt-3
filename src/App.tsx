import { FC, useEffect, useRef, useState } from 'react'
import Loader from './components/Chat/Loader'
import Chat from './components/Chat/Chat'
import Navbar from './components/Layout/Navbar'
import Footer from './components/Layout/Footer'
import { Message } from './types'
import { azureOpenAiChatGPT } from './utils'

const App: FC = () => {
  const [messages, setMessages] = useState<Message[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleSend = async (message: Message) => {
    const updatedMessages = [...messages, message]
    setMessages(updatedMessages)
    let x = ''
    updatedMessages.forEach((element) => {
      x += '\n' + element.role + ': ' + element.content + '\n'
    })
    console.log(x)

    setLoading(true)
    const url = `http://localhost:1337/ask?prompt=${x}`
    // get response from custom API
    try {
      const response = await fetch(url)
      const data = await response.json()

      setMessages((messages) => [
        ...messages,
        {
          role: 'assistant',
          content: data.message.trim(),
        },
      ])
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    setMessages([
      {
        role: 'assistant',
        content: `Hi there! I'm Chatbot UI, an AI assistant. I can help you with things like answering questions, providing information, and helping with tasks. How can I help you?`,
      },
    ])
  }, [])

  return (
    <>
      <header>
        <title>Chatbot UI</title>
        <meta
          name="description"
          content="A simple chatbot starter kit for OpenAI's chat model using Next.js, TypeScript, and Tailwind CSS."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </header>
      <div className="flex flex-col h-screen">
        <Navbar />

        <div className="flex-1 overflow-auto sm:px-10 pb-4 sm:pb-10">
          <div className="max-w-[800px] mx-auto mt-4 sm:mt-12">
            <Chat messages={messages} loading={loading} onSend={handleSend} />
            <div ref={messagesEndRef} />
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
