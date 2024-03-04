"use client";
import {useState, Component, React } from 'react';
import styles from '../page.module.css'
import Day from './Day';

export default function Month({monthName}) {
const initialValues = {
    numberOfDays:31,
    monthName:monthName
}
const [values,setvalues] = useState(initialValues);
const initMonth = ()=>{
    console.log("Starting intializing month");
    const month =[];
    for(var i =0; i < values.numberOfDays;i++){
        month.push(<Day value="X"/>);
    }
    return month;
}
return (<>
    <div className={styles.Month}>
    {initMonth()}
    </div>
    </>);
}


