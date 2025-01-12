import react from "react"

const ShinyEffect = ({left, right, top, size = 500}) => {

    const positionStyles = {
        top: '${top}px',
        width: '${size}px',
        height: '${size}px',
        zIndex: -1,
    }

    if (left !== undefined) {
        positionStyles.left = '${left}px'
    }

    if (right !== undefined) {
        positionStyles.right = '${right}px'
    }

    return (
        <div className='shinyEffect' style={positionStyles}></div>
    )

}

export default ShinyEffect
