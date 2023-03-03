import { useState } from "react";

interface IProps {
  editDescription: boolean;
  setEditDescription: React.Dispatch<React.SetStateAction<boolean>>;
}

function Edit({ editDescription, setEditDescription }: IProps) {
  const [newDescription, setNewDescription] = useState("");

  const handleUpdate = () => {
    setEditDescription(!editDescription);
  };

  return (
    <div className="edit">
      <label>Please enter the new Airbnb description below: </label>
      <textarea
        required
        name="description"
        id="description"
        value={newDescription}
        onChange={(e) => setNewDescription(e.target.value)}
      ></textarea>
      <button className="update-button" onClick={() => handleUpdate()}>
        Update Airbnb
      </button>
    </div>
  );
}

export default Edit;
