import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
    const [noteList, updateList] = useState([]);

    function addNote(note) {
        updateList(noteList => [...noteList, note]);
    }

    function deleteNote(idx) {
        updateList(noteList => noteList.filter((elem, index) => index !== idx));
    }

    return (
        <div>
            <Header/>
            <CreateArea addBtnClicked={addNote}/>
            {noteList.map((elem, index) => {
                return (
                    <Note
                        key={index}
                        idx={index}
                        title={elem.title}
                        content={elem.content}
                        delBtnClicked={deleteNote}
                    />
                );
            })}
            <Footer/>
        </div>
    );
}

export default App;
