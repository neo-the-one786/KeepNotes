import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

function Note(props) {
    function handleClick() {
        props.delBtnClicked(props.idx);
    }

    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={handleClick}>
                <DeleteIcon></DeleteIcon>
            </button>
        </div>
    );
}

export default Note;
