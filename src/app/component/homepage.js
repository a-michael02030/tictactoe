"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Square from "./Square";
import EnterField from "./EnterField"
import { useState } from 'react';

export default function homepage() {
  const [value, setValue] = useState('10');

  return (<>    
  <EnterField message="THIS IS A TEST"/>
  <div className="board-row">
  <Square />
  <button className="square">2</button>
  <button className="square">3</button>
  </div>
  <div className="board-row">
  <button className="square">1</button>
  <button className="square">2</button>
  <button className="square">3</button>
  </div>
  <div className="board-row">
  <button className="square">1</button>
  <button className="square">2</button>
  <button className="square">3</button>
  </div>
  </>
  );
}
