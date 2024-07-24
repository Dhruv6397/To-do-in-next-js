'use client'

import { useEffect,useState } from "react"
import db from '@/utils/firestore'
import { collection,getDocs } from "@firebase/firestore"
import DeleteItem from "./DeleteItem"

const ListItems = () =>{
    const [items,setItems] = useState([])
    useEffect(()=>{
        const fetchItems = async ()=>{
            const querySnapShot = await getDocs(collection(db,'items'))
            setItems(
                querySnapShot.docs.map((doc)=>(
                    {...doc.data(),id:doc.id}
                ))
            )
        }
        fetchItems()
    },[])

    return(
        <>
        <h2>LIST OF ITEMS</h2>
        <div className="list-container">
            
            <ul>
                {items.map((item)=>(
                    <li className="item" key={item.id}>
                        <p>{item.name}</p>
                        <DeleteItem id={item.id}/>
                    </li>
                ))}
            </ul>
        </div>
        </>
    )
}
export default ListItems