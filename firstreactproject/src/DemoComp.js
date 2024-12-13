import React from 'react'

const DemoComp = (props) => {
    return (
        <div>
            <h2>This is Demo</h2>
            <p>My Name is :{props.name}</p>
            <p>I am :{props.post}</p>
        </div>
    )
}

export default DemoComp
