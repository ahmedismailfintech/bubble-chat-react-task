import './input.style.css'
import { MessageItem } from '../ChatContainer'
import useInput from './useInput'

export interface Props {
    handleSendMessage: (value: MessageItem) => void
}

export default function ChatInput({ handleSendMessage }: Props) {
    const { file_ref, setInputValue, inputValue, onSendMessage, onFileSelect, onSend } = useInput({ handleSendMessage })

    return (
        <div className='input-wrapper'>
            <input onChange={(event) => setInputValue(event.target.value)} value={inputValue} onKeyUp={onSendMessage} type="text" placeholder="typing..." />
            <img onClick={() => file_ref.current?.click()} title='attachment' className='attach-icon' src="/attach.png" alt="attach-icon" />
            <img onClick={onSend} title='send' className='send-icon' src="/send.svg" alt="send-icon" />
            <input onChange={onFileSelect} type="file" hidden ref={file_ref} />
        </div>
    )
}
