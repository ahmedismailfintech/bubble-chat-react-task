import { useState } from "react";
import ChatContainer from "./ChatContainer";
import ChatIcon from "./ChatIcon";
export default function ChatBauble() {
    const [toggle, setToggle] = useState<boolean>(false)
    const handleToggle = () => {
        setToggle(!toggle)
    }
    return (
        <div>
            <ChatIcon onClick={handleToggle} />
            <ChatContainer toggle={toggle} accentColor="#fff" title="ahmed" avatar="img_1.jpg" />
        </div>
    )
}
