import React, { useEffect, useState } from 'react'
import './NewCollections.css'
import Item from '../item/Item'

const API_BASE_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:4000";

const NewCollections = () => {

  const [newCollection, setNewCollection] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/newcollections`)
      .then((res)=>res.json()).then((data)=>setNewCollection(data))
  }, [])

  return (
    <div className='new-collections'>
        <h1>NEW COLLECTIONS</h1>
        <hr />
        <div className="collections">
          {newCollection.map((item, i) => {
            return <Item  key={i} 
                          id={item.id} 
                          name={item.name} 
                          image={item.image} 
                          new_price={item.new_price} 
                          old_price={item.old_price}/>
          })}
        </div>
    </div>
  )
}

export default NewCollections