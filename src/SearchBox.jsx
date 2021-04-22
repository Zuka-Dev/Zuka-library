import React, {useState} from 'react'
import Feel from './Color'
import Error from './Error'

function SearchBox(props) {
    const[apiKey, setApiKey]=useState(process.env.REACT_APP_GOOGLE_API_KEY)
    const[bookName,setBookName]=useState("")
    const nameHandler = (e)=>{
        e.preventDefault();
        const name = e.target.value;
        setBookName(name)

    }
    const submitHandler = (e)=>{
        e.preventDefault();
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${bookName}&key=${apiKey}&maxResults=40`)
        .then(res=>res.json())
        .then(data=> {
            console.log(data.items)
            props.getResult(data.items)
        })
        .catch(error => {
                return <Error error={error}/>
        })
    }

    return (
        <div>
            <form onSubmit={submitHandler} className="form-group">
                <div className="d-flex justify-content-center row mb-3 mx-auto">
                    <input type="text" onChange={nameHandler} style={{border:`1.12px solid ${Feel.accent}`,}} className="form-control col-7 mr-2" placeholder="Search Books Here"/>
                    <button type="submit" className="btn col-1" style={{border:`1.12px solid ${Feel.accent}`}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={Feel.accent} className="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                        </svg>
                    </button>
                </div>
               
            </form>
            
        </div>
    )
}

export default SearchBox
