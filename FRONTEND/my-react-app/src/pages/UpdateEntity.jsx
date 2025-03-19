import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateEntityForm = () => {
    const { id } = useParams(); // Get the entity ID from the URL
    const navigate = useNavigate();
    const [entity, setEntity] = useState({
        name: '',
        description: '',
    });

    // Fetch the entity data to populate the form
    useEffect(() => {
        const fetchEntity = async () => {
            try {
                const response = await axios.get(`/api/entities/${id}`);
                setEntity(response.data);
            } catch (error) {
                console.error('Error fetching entity:', error);
            }
        };
        fetchEntity();
    }, [id]);

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setEntity({ ...entity, [name]: value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`/api/entities/${id}`, entity);
            navigate('/entities'); // Redirect to the list page after update
        } catch (error) {
            console.error('Error updating entity:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    value={entity.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Description:</label>
                <input
                    type="text"
                    name="description"
                    value={entity.description}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit">Update Entity</button>
        </form>
    );
};

export default UpdateEntityForm;