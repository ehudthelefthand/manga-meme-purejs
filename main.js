const manga = (() => {

    let box,
        boxX = 0,
        boxY = 0,
        mouseX = 0,
        mouseY = 0

    const dragstart = (e) => {
        console.log(e.pageX);
        console.log(e.pageY);
        console.log(e.clientX);
        console.log(e.clientY);
        mouseX = e.pageX
        mouseY = e.pageY
        const offset = getOffset()
        boxX = offset.x
        boxY = offset.y
    }

    const dragend = (e) => {
        x = e.pageX
        y = e.pageY
        setBoxPosition()
    }

    const setBoxPosition = () => {
        console.log('eiei')
        box.style.top = `${y}px`
        box.style.left = `${x}px`
    }

    const getBoxPosition = () => {
        const x = box.getBoundingClientRect().x + window.scrollX
        const y = box.getBoundingClientRect().y + window.scrollY
        return { x, y }
    }

    const init = () => {
        box = document.getElementById('box')
        box.addEventListener('mousedown', () => {
            box.addEventListener('dragstart', dragstart)
            box.addEventListener('dragend', dragend)
        })
        box.addEventListener('mouseup', (e) => {
            box.removeEventListener('dragstart', dragstart)
            box.removeEventListener('dragend', dragend)
        })
    }


    return {
        init
    }
})()

document.addEventListener('DOMContentLoaded', () => {
    manga.init()
})