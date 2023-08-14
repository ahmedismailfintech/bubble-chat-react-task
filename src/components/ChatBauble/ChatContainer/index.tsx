import './chat-container.style.css'
export default function ChatContainer({ toggle }: { toggle: boolean }) {
    console.log(toggle)
    return (
        <div className={`chat-container ${toggle && 'show-chat'}`}>ChatContainer</div>
    )
}
