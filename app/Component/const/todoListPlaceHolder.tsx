
const date = new Date();
export interface task {
    id: string,
    task: string,
    formateDate: string,
    status: boolean,
    icon: string
} 


export const todoListTaskPlaceHolder: task[] = [
    {
        id:'1',
        task:'Washing my car',
        formateDate: (`${date.getDay()}-${date.getMonth() + 1}-${date.getFullYear()} `),
        status: true,
        icon: 'delete'
    },
    {
        id:'2',
        task:'Talk to my girl',
        formateDate: (`${date.getDay()}-${date.getMonth() + 1}-${date.getFullYear()} `),
        status: false,
        icon: 'delete'
    },
    {
        id:'3',
        task:'Go to school',
        formateDate: (`${date.getDay()}-${date.getMonth() + 1}-${date.getFullYear()} `),
        status: true,
        icon: 'delete'
    }
] 



