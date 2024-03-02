import {useState, Component, React } from 'react';
import '../page.module.css'
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
    <div >
        <button className='Column' style={{ backgroundColor: 'red' }} onClick={onClick}>{values.availableValues[values.start]}</button>
        <button className='Column' onClick={onClick}>{values.availableValues[values.start]}</button>
        <button  onClick={onClick}>{values.availableValues[values.start]}</button>
        <button  onClick={onClick}>{values.availableValues[values.start]}</button>
    </div>
    
    </>);
}