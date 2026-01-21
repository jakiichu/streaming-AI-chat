import {type ReactNode} from 'react';
import './App.css'
import Chat from "@/component/chat";
import {chatStore} from "@/store";
import {PaperPlaneRightIcon} from "@phosphor-icons/react";
import type {IMessageEntities} from "@/types";

const App = (): ReactNode => {
    const {data, addItem, changeItem, findOne} = chatStore()

    const handleStartStream = async () => {
        const newItem = {id: crypto.randomUUID(), text: 'Lorem', user: 'other'} as IMessageEntities

        addItem(newItem)
        const intervalId = setInterval(() => {
            const item = findOne(newItem.id)
            if (!item) {
                clearInterval(intervalId)
                return
            }
            changeItem(item.id, {
                ...item,
                text: item.text + " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown"
            })
            if (Math.random() < 0.1) {
                clearInterval(intervalId)
            }

        }, 500)

    }

    return (
        <div className='h-screen max-h-screen flex flex-col p-2'>
            <Chat data={data}/>
            <div className='flex gap-2'>
                <input value='Нажмите на иконку справа' type="text"
                       className='rounded-2xl p-2 w-full  border border-black'/>
                <button className='cursor-pointer' onClick={handleStartStream}><PaperPlaneRightIcon
                    size={24}/></button>
            </div>
        </div>
    );
};

export default App;
