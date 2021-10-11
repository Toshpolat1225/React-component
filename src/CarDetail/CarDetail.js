import React from 'react'

const CarDetail = () => {
    return ( <
        div style = {
            { textAlign: 'center' } } >
        <
        h1 > { this.props.match.params.name } < /h1> <
        /div>
    )
}

export default CarDetail