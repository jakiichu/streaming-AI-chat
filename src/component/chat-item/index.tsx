import {memo, type ReactNode} from 'react';
import {cn} from 'tailwind-variants';
import type {IMessageEntities} from "@/types";

const ChatItem = memo(({text, user}: IMessageEntities): ReactNode => {
    return (
        <div className={cn('flex', user !== 'me' ? 'justify-start' : 'justify-end')}>
            <div className='p-3 m-2 max-w-xs rounded-lg bg-gray-200 transform scale-y-[-1]'>{text}</div>
        </div>
    );
});

export default ChatItem;
