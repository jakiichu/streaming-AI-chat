import {create} from "zustand";
import type {IMessageEntities, IMessages} from "@/types";

interface IChatStoreMethods {
    data: IMessages
    addItem: (item: IMessageEntities) => void
    changeItem: (id: string, newItem: IMessageEntities) => void
    findOne: (id: string) => IMessageEntities
}

const initialData = [
    {user: 'me', text: 'Hello', id: '123'},
] as IMessages

const chatStore = create<IChatStoreMethods>((setState, getState) => ({
    data: initialData,
    findOne: (id: string) => getState().data.find((item) => item.id === id),
    addItem: (item: IMessageEntities) => setState((state) => ({data: [item, ...state.data]})),
    changeItem: (id: string, newItem: IMessageEntities) => setState((state) => ({data: state.data.map((item) => item.id === id ? newItem : item)}))
}))

export {chatStore}
