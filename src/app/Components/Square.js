import {useState, Component, React } from 'react';
export default function Square({value})  {
    const initialValues = {
        availableValues:["1","2"],
        start:0
    }
    const onClick = () =>{
        setValues({...values,"start":((values.start+1)%values.availableValues.length)});
    }
    const [values,setValues] = useState(initialValues)
    return (<>
    <div className="Column">
        <button className="Column" onClick={onClick}>{values.availableValues[values.start]}</button>
        <button className="Column" onClick={onClick}>{values.availableValues[values.start]}</button>
        <button className="Column" onClick={onClick}>{values.availableValues[values.start]}</button>
        <button className="Column" onClick={onClick}>{values.availableValues[values.start]}</button>
    </div>
    
    </>);
}