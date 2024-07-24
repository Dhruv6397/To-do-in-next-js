import db from '../utils/firestore'
import {doc,deleteDoc} from '@firebase/firestore'

const DeleteItem = ({id})=>{
    const handleDelete = async()=>{
        const itemRef = doc(db,'items',id)
        try{
            await deleteDoc(itemRef)
            alert("item deleted successfully")
        }catch(error){
            console.log("error")
            alert("error deleting")
        }
    }

    return(
        <button onClick={handleDelete} className='delete-button'> REMOVE</button>
    )
}

export default DeleteItem  