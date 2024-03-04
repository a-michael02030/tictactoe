"use client";

import Image from "next/image";
import styles from './page.module.css';
import Day from "./Components/Day";
import EnterField from "./Components/EnterField"
import {useState, Component, React } from 'react';
import DatePickerComponent from "./Components/DatePicker";
import Month from "./Components/Month";

export default function Home() {
  const initialValues = {
    calendarArray:[],
    numMonths: 0,
    startDate:null,
    endDate:null,
  }
  const [values, setValues] = useState(initialValues);
  const enterFieldValue = (enterFieldValue) => {
    var tempArray = []
    for(var i = 0; i < enterFieldValue; i++){
      tempArray.push({value:"X"});
    }
    setValues({...values,"calendarArray":tempArray
    });    
  }
  const returnDate = (range) => {
    console.log("HELLO");
    const [startDate, endDate] = range;
    console.log(startDate);
    console.log(endDate);
    setValues({...values,"startDate":startDate, "endDate":endDate});
    var monthDiff = (endDate.getFullYear() - startDate.getFullYear())*12 - startDate.getMonth() + endDate.getMonth() + 1;
    enterFieldValue(monthDiff);
  }
  const clearCalendar = () =>{
    setValues({...values,"calendarArray":[],"startDate":null, "endDate":null})
  }
  return (<>
  <DatePickerComponent returnRange={returnDate}/>
  <div className={styles.Button}>
  <button  onClick={clearCalendar}>clear</button>
  </div>
  <div  className={styles.Page}>
    {
      values.calendarArray.map((day)=>{
        return (
          <Month monthName="Test" />
        )
      })
    }
  </div>
  </>
  );
}
