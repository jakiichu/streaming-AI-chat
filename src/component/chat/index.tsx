import type {ReactNode} from 'react';
import type {IMessages} from "@/types";
import ChatItem from "@/component/chat-item";

interface IChatProps {
    data: IMessages
}

const Chat = ({data}: IChatProps): ReactNode => {
    return (
        <div>
            {data.map((item) => <ChatItem{...item}/>)}
        </div>
    );
};

export default Chat;
