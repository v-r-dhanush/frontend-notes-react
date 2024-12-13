import React from 'react'

const MyNameComp = (props) => {
    return (
        <div>
            <h2>My Name is Dhanush</h2>
            <p>My Name is :{props.name}</p>
            <p>I am :{props.post}</p>
        </div>
    )
}

export default MyNameComp
