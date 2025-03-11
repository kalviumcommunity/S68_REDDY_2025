import { useEffect, useState } from "react";

const EntityList = () => {
  const [entities, setEntities] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/entity")
      .then((res) => res.json())
      .then((data) => setEntities(data))
      .catch((err) => console.error("Error fetching entities:", err));
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/api/entity/${id}`, { method: "DELETE" })
      .then(() => setEntities(entities.filter((entity) => entity._id !== id)))
      .catch((err) => console.error("Error deleting entity:", err));
  };

  return (
    <div>
      <h2>Entities</h2>
      <ul>
        {entities.map((entity) => (
          <li key={entity._id}>
            {entity.name} - {entity.description}
            <button onClick={() => handleDelete(entity._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EntityList;
