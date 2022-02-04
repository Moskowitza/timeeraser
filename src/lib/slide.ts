
export function slide(node: HTMLDivElement, { isOpen, duration = 500
}: {
    isOpen: boolean, duration: number
}): { update: (isOpen: boolean) => void } {

    const initialHeight = node.offsetHeight;

    node.style.height = isOpen ? 'auto' : '0px'

    node.style.overflow = 'hidden'

    const animation = node.animate([
        { height: '0px', },
        { height: `${initialHeight}px` }
    ], {
        duration
        ,
        fill: 'both',
        direction: isOpen ? 'reverse' : 'normal'
    })
    animation.pause()
    animation.onfinish = ({ currentTime }) => {
        if (!currentTime) {
            animation.reverse()
            animation.pause()
        }
        node.dispatchEvent(new CustomEvent('animationEnd'))
    }


    return {
        // update: (isOpen) => {
        //     node.style.height = isOpen ? 'auto' : '0px'
        // }
        update: () => {
            animation.currentTime ? animation.reverse() : animation.play()
        }
    }
}
