import React, {useState} from 'react'
import SearchBox from './SearchBox'
import "./Home.css"
import Feel from './Color'
function Home() {
    const[result, setResult]=useState([])
    const getResult = (myResult) =>{
        setResult(myResult)
    }
    return (
        <div>
            <SearchBox getResult={getResult}/>
            <div className="row p-4 bigDiv" 
            style={{
                    
            }}>
                {result.map((book)=>(
                    <div className="card p-3 mt-4 col-4 grow" style={{width:"18rem", maxHeight:"44rem", overflow:"scroll"}}>
                    <img variant="top" src={book.volumeInfo.imageLinks !== undefined ? book.volumeInfo.imageLinks.thumbnail : ''} class="card-img-top" alt="bookcover" />
                    <div class="card-body text-center">
                        <h5 class="card-title">{book.volumeInfo.title}</h5>
                        <h6 className="card-subtitle text-secondary mb-3 font-weight-bold">Category(ies): {book.volumeInfo.categories}</h6>
                        <p class="card-text">{book.volumeInfo.description}</p>
                        <p><h6 className="font-weight-light">Authors</h6>{book.volumeInfo.authors},<br />{book.volumeInfo.pageCount} pages</p>            
                        <p style={{fontSize:"8px", float:"right",color:Feel.accent}}>{book.volumeInfo.publisher}, Published Date: {book.volumeInfo.publishedDate}</p>
                    </div>  
                </div>
                ))}
            </div>
            
        </div>
    )
}

export default Home
