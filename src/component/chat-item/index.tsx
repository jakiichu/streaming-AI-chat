import {memo, type ReactNode} from 'react';
import {cn} from 'tailwind-variants';
import type {IMessageEntities} from "@/types";

const ChatItem = memo(({text, user}: IMessageEntities): ReactNode => {
    return (
        <div className={cn('flex', user === 'me' ? 'justify-start' : 'justify-end')}>
            <div>{text}</div>
        </div>
    );
});

export default ChatItem;
