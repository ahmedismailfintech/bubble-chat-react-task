import './chat-icon.style.css'
interface Props {
    onClick: () => void
}
export default function ChatIcon({ onClick }: Props) {
    return (
        <div className="chat-icon" onClick={onClick}>
            <img src="/chat.png" alt="chat-icon" />
        </div>
    )
}
