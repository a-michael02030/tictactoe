"use client";
import { useState } from 'react';

export default function EnterField(message) {
const [value , setValue] = useState({message});
function handleOnClick(value) {
  setValue(value)
}
return (
<div>
      <input
         type="text"
         value={value}
         placeholder={message.value}
         onClick={(e) => { setValue(e.target.value)}}
         onChange={(e) => {setValue(e.target.value)}}
       />
</div>
);
}