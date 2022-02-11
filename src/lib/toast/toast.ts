import { writable } from 'svelte/store'

const newToast = () => {
    const { subscribe, update } = writable([])

    function send(
        message: string,
        { duration = 3000, type = 'INFO' }: { duration?: number; type?: 'INFO' | 'ERROR' } = {}
    ) {
        update(state => {
            const newMessage = {
                id: Math.floor(Math.random() * 100000),
                type,
                duration,
                message
            }
            return [...state, newMessage]
        })
    }



    function remove(id: number) {
        update(store => {
            const newStore = store.filter(item => item.id !== id)
            return [...newStore]
        })
    }


    return {
        subscribe,
        send,
        remove
    }
}
export const toast = newToast()
