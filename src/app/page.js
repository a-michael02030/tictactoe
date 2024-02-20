"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Square from "./Square";
import EnterField from "./EnterField"
import {useState, Component, React } from 'react';

export default function Home() {
  const initialValues = {
    calendarArray:[],
    numMonths: 0,

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
  return (<>    
  <EnterField message="TEST" enterFieldValue={enterFieldValue}/>
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
