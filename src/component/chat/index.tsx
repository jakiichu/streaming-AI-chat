import {type ReactNode, useEffect, useRef} from 'react';
import type {IMessages} from "@/types";
import ChatItem from "@/component/chat-item";

interface IChatProps {
    data: IMessages
}

const Chat = ({data}: IChatProps): ReactNode => {
    const chat = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const el = chat.current;
        if (!el) return;

        const callback = (e: WheelEvent) => {
            e.preventDefault();
            el.scrollTop -= e.deltaY;
        };

        el.addEventListener('wheel', callback, {passive: false});

        return () => {
            el.removeEventListener('wheel', callback);
        };
    }, []);

    return (
        <div ref={chat} className='h-full overflow-y-auto flex flex-col transform scale-y-[-1]'>
            {data.map((item) => <ChatItem key={item.id} {...item}/>)}
        </div>
    );
};

export default Chat;
