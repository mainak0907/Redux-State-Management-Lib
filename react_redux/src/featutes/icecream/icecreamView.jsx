import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ordered,restocked } from './icecreamSlice'
import { useState } from 'react'
export const IcecreamView = () => {
  const [val, setVal] = useState(1);
  const dispatch=useDispatch()
    const num = useSelector((state) =>state.icecream.numoficecream);
  return (
    <div>
        <h1>Number of ice-creams - {num}</h1>
        <button onClick={()=>dispatch(ordered())}> Order ice-cream</button>
        <button onClick={()=>dispatch(restocked(val))}> Restock Ice-cream</button>
        <input
        value={val}
        onChange={(e) => {
          setVal(parseInt(e.target.value));
        }}
      ></input>
    </div>
  )
}
