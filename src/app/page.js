"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Square from "./Components/Square";
import EnterField from "./Components/EnterField"
import {useState, Component, React } from 'react';
import DatePickerComponent from "./Components/DatePicker";

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
  }
  return (<>
  <DatePickerComponent returnRange={returnDate}/>
  <div>{values.startDate}</div>
  <div>
    {
      values.calendarArray.map((day)=>{
        return (
          <Square value= {day.value} />
        )
      })
    }
  </div>
  <div className="board-row">
  <Square />
  </div>
  </>
  );
}
