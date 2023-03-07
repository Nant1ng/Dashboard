import { useState } from "react";
import { editAirbnb } from "../lib/controller";

interface IProps {
  editDescription: boolean;
  setEditDescription: React.Dispatch<React.SetStateAction<boolean>>;
  id?: string
}

function Edit({ editDescription, setEditDescription, id }: IProps) {
  const [newDescription, setNewDescription] = useState("");

  const handleUpdate = () => {
    editAirbnb(id, {description: newDescription})
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
