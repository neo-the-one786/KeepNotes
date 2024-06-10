import React, {useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import {Fab, Zoom} from "@mui/material";

function CreateArea(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function changeHandler(event) {
        const {name, value} = event.target;
        setNote(note => {
                return {
                    ...note,
                    [name]: value
                }
            }
        );
    }

    function clickHandler(event) {
        props.addBtnClicked(note);
        setNote({
            title: "",
            content: ""
        });
        event.preventDefault();
    }

    const [isClicked, setClicked] = useState(false);

    function expandNote() {
        setClicked(true);
    }

    return (
        <div>
            <form className="create-note">
                {
                    isClicked &&
                    <input
                        name="title"
                        onChange={changeHandler}
                        value={note.title}
                        placeholder="Title"
                    />
                }
                <textarea
                    name="content"
                    onChange={changeHandler}
                    value={note.content}
                    placeholder="Take a note..."
                    rows={isClicked ? 3 : 1}
                    onClick={expandNote}
                />
                <Zoom in={isClicked}>
                    <Fab onClick={clickHandler}>
                        <AddIcon/>
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;
