import { useState } from "react";
import db from '../utils/firestore'
import "../styles/style.css";
import { collection,addDoc } from "@firebase/firestore";
const AddItem = () =>{
    const [value,setValue] = useState('')
    const handleSubmit= async (event)=>{
        event.preventDefault()
        try{
            const docRef = await addDoc(collection(db,'items'),{
                name:value,
            })
            console.log("document written with id",docRef.id);
            alert("Task added")
            setValue('')
        }catch(error){
            console.log(error)
        }
    }
    return(
        <form onSubmit={handleSubmit} className="form-class">
            <input 
            type="text"
            value={value}
            onChange={(e)=>setValue(e.target.value)}
            placeholder="Add new item"
            />
            <button type="submit" className="add-button">Add item</button> 
        </form>
    )
}

export default AddItem