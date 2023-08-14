import { MessageItem } from '../ChatContainer'
import './messages.style.css'

interface Props {
  mockMessages: MessageItem[]
}

export default function Messages({ mockMessages }: Props) {
  return (
    <div className='message-container'>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <ul>
              {mockMessages.map((message, index) => (
                <li className='message-item' key={index}>{message.content}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
