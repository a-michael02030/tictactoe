"use client";
import {useState, Component, React } from 'react';
import styles from '../page.module.css'
export default function Day({value})  {
    var availableColors = ['grey','red',"yellow","green"];
    const initialValues = {
        color:"blue",
        colorIndex:0,
        start:0
    }
    const [values,setValues] = useState(initialValues);
    const onClick = () =>{
        console.log("Click");
        setValues({...values,"colorIndex":((values.colorIndex+1)%availableColors.length)});
    }
    return (<>
        <button className={styles.Day} style={{ backgroundColor:availableColors[values.colorIndex]}}  onClick={onClick}></button>
    </>);
}