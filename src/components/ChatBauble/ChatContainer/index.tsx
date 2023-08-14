import { useState } from 'react'
import ChatInput from '../Input'
import Messages from '../Messages'
import './chat-container.style.css'

export interface MessageItem {
    type: string,

    content: string | JSX.Element
}

interface Props {
    title: string,
    accentColor: string,
    avatar: string,
    toggle: boolean
}

export default function ChatContainer({ toggle, title, accentColor, avatar }: Props) {
    const [mockMessages, setMockMessages] = useState<MessageItem[]>([
        { type: 'text', content: 'Hello there!' },
        { type: 'image', content: <img className='message-image' src="/img_1.jpg" alt="Image" /> },
        {
            type: 'voice', content:
                <audio controls>
                    <source src="audio.mp3" type="audio/mp3" />
                    Your browser does not support the audio element.
                </audio>
        },
    ])


    const handleSendMessage = (item: MessageItem) => {
        setMockMessages([...mockMessages, item])
    }
    return (
        <div className={`chat-container ${toggle && 'show-chat'}`}>
            <div className="container">
                <div className="col-12">
                    <div className="header" style={{ backgroundColor: accentColor }}>
                        <div className="avatar">
                            <img src={`/${avatar}`} alt={`${title}'s Avatar`} />
                        </div>
                        <div className="title">
                            <h3>{title}</h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <Messages mockMessages={mockMessages} />
                    </div>
                    <div className="col-12">
                        <ChatInput handleSendMessage={handleSendMessage} />
                    </div>
                </div>
            </div>

        </div>
    )
}
