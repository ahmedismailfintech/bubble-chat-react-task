import React, { useRef, useState } from 'react'
import { MessageItem } from '../ChatContainer'
import { Props } from '.'

export default function useInput({ handleSendMessage }: Props) {
  const [inputValue, setInputValue] = useState<string>()
  const [_item, setItem] = useState<MessageItem>({ type: '', content: '' })
  const file_ref = useRef<HTMLInputElement>(null)
  const onFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target?.files as FileList
    const file: File = files[0]
    const fileUrl: string = URL.createObjectURL(file)
    const [type] = file.type.split('/')
    const content: JSX.Element = type === 'audio' ? <audio controls>
      <source src={fileUrl} type="audio/mp3" />
    </audio> : <img className='message-image' src={fileUrl} alt="Image" />
    setItem(() => {
      const item = {
        type,
        content
      }
      handleSendMessage(item)
      return item
    })
  }

  const onSendMessage = (e: React.KeyboardEvent<HTMLInputElement>) => {

    if (e.code == 'Enter') {
      if (inputValue) {
        handleSendMessage({ type: 'text', content: inputValue })
        setInputValue('')
      }
    }
  }
  const onSend = () => {
    if (inputValue) {
      handleSendMessage({ type: 'text', content: inputValue })
      setInputValue('')
    }
  }

  return {
    file_ref,
    onFileSelect,
    onSendMessage,
    setInputValue,
    inputValue,
    onSend
  }
}
