interface IMessageEntities {
    key: string
    text: string
    user: 'me' | 'other'
}

type IMessages = Array<IMessageEntities>


export type {IMessageEntities, IMessages}
