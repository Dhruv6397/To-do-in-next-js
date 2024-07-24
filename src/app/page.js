'use client'
import Image from "next/image";
import "../styles/style.css";
import AddItem from '../components/Additem'
import Listitems from '../components/Listitems'

export default function Home() {
  return (
   <div className="main">
     <h1>TODO LIST</h1>
     <AddItem/>
     <Listitems/>
   </div>
  );
}
