import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getAllAuthors, deleteAuthor } from "../services/internalApiService"

export const AllAuthors = (props) => {
    const [authors, setAuthors] = useState([])

    useEffect(()=>{
        getAllAuthors()
            .then((data) => {
                setAuthors(data);
            })
            .catch((error)=>{
                console.log(error);
            })
    }, []) 

    const handleDeleteClick = (idToDelete) => {
        deleteAuthor(idToDelete)
        .then((data) => {
            console.log(data)
            const filteredAuthors = authors.filter((author) => {
                return author._id !== idToDelete
            })
            setAuthors(filteredAuthors)
        })
        .catch((error) =>{
            console.log(error)
        })
    }

    return (
        <div className="w-50 mx-auto text-center">
            <h2> Authors</h2>
            {authors.map((author, i) => {
                const {_id, name, description} = author;
                return (
                    <div key={i} className="shadow mb-4 rounded border p-4">
                        <Link to={`/authors/${_id}`}>
                            <h4>{name}</h4>
                        </Link>
                        <p>{description}</p>
                        <button 
                        className="btn btn-sm btn-outline-danger mx-1"
                        onClick={(e)=> {
                            handleDeleteClick(_id)
                        }}
                        >
                            Delete
                        </button>
                        <Link to={`/authors/${_id}/edit`}> Edit </Link>
                    </div>
                )
            })}
        </div>
    )
}