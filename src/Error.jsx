import React from 'react'

function Error(props) {
    return (
        <div className="d-flex justify-content-center align-items-center">
           <h1 className="display-3 ">404|Ooops..... Book not found</h1> 
           <p>{props.error}</p>
        </div>
    )
}

export default Error
