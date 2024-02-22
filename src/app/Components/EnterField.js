"use client";
import { useState, Component, React } from 'react';

export default function EnterField({message,enterFieldValue}) {
const [value , setValue] = useState(message);
function handleOnClick(value) {
  setValue(value)
}
return (
<div>
      <input
         type="text"
         value={value}
         placeholder={message}
         onClick={(e) => { enterFieldValue(e.target.value)}}
         onChange={(e) => {setValue(e.target.value)}}
       />
</div>
);
}