import React, { useState } from "react";

function CreateArea(props) {
  //using a note state hooks
  const [note, setNote] = useState({ title: "", content: "" });

  const handleChange = event => {
    // tapping into the notes name and value and attaching it to the event target.
    const { name, value } = event.target;

    //creating a note array that keeps all the previous items and also add the new ones.
    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  };
  //this is a note submition.. to the app node inside of the main app()
  const submitNote = event => {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });

    event.preventDefault();
  };

  return (
    <div>
      <form>
        <input
          onChange={handleChange} //this an input event
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
