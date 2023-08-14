import ChatInput from '../Input'
import Messages from '../Messages'
import './chat-container.style.css'
export default function ChatContainer({ toggle }: { toggle: boolean }) {
    console.log(toggle)
    return (
        <div className={`chat-container ${toggle && 'show-chat'}`}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Messages />
                    </div>
                    <div className="col-12">
                        <ChatInput />

                    </div>
                </div>
            </div>

        </div>
    )
}
