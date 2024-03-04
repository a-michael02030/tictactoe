"use client";
import { useState, Component, React} from 'react';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css';
import { Button} from 'react-bootstrap';
import styles from '../page.module.css'

export default function DatePickerComponent({returnRange}) {
    const [date, setDate] = useState(new Date());
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const handleChange = (range) => {
      const [startDate, endDate] = range;
      console.log("Hello");
      setStartDate(startDate);
      setEndDate(endDate);
    };
  
    return (
      <div className={styles.Button}>
        <DatePicker selected={date} onChange={handleChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange/>
        <Button onClick = {()=>returnRange([startDate,endDate])}  as="input" type="submit" value="Submit" />
      </div>
    );
  }
  
  