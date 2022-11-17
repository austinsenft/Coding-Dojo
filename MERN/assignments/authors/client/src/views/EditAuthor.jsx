import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { updateAuthor, getAuthorById } from '../services/internalApiService';

export const EditAuthor = (props) => {
    const { id } = useParams();

    const [formData, setFormData] = useState({})

    const [errors, setErrors] = useState(null);

    const navigate = useNavigate()

    useEffect(() => {
        getAuthorById(id)
            .then((data) => {
                setFormData(data);
            })
            .catch((error) => {
                console.log(error)
            })
    }, [id])

    const handleSubmit = (e) => {
        e.preventDefault();
        for (const key in formData) {
            if (formData[key] === false) {
                delete formData[key];
            }
        }
        updateAuthor(id, formData)
            .then((data) => {
                console.log('new author data:', data)
                navigate(`/authors/${data._id}`)
            })
            .catch((error) => {
                console.log(error.response);
                setErrors(error.response?.data?.errors)
            })
    }

    const handleFormChanges = (e) => {
        console.log("here in the change", e.target.checked)
        if (e.target.type === "checkbox") {
            setFormData({
                ...formData,
                [e.target.name]: e.target.checked,
            })
            return null;
        }
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    if (formData === null) {
        return null
    }

    const { name, description } = formData;
    return (
        <div className="w-50 p-4 rounded mx-auto shadow">
            <h3 className="text-center"> Edit Author</h3>
            <form onSubmit={(e) => {
                handleSubmit(e);
            }}>
                <div className="form-group">
                    <label className="h6">Name</label>
                    <input
                        onChange={handleFormChanges}
                        type="text"
                        name="name"
                        value={formData.name}
                        className="form-control"
                    />
                </div>
                {
                    errors?.name && (
                        <span className="text-danger">{errors.name?.message}</span>
                    )
                }
                <div className="form-group">
                    <label className="h6">description</label>
                    <input
                        onChange={handleFormChanges}
                        type="text"
                        name="description"
                        value={formData.description}
                        className="form-control"
                    />
                </div>
                {
                    errors?.description && (
                        <span className="text-danger">{errors.description?.message}</span>
                    )
                }
                <hr />
        
                <button className="btn btn-sm btn-outline-success">Submit</button>
            </form>
        </div>
    )
}