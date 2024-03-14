"use client";
import {useState, Component, React } from 'react';
import styles from '../page.module.css'
import Link from 'next/link'
import styles from '../Components'

export default function NavBar(){
    return(<>
    <div>
        <ul className={styles.Navbar}>
            <li>
            <Link href="/">
                <p>Home</p>
            </Link>
            </li>
            <li>
            <Link href="/">
                <p>Settings</p>
            </Link>
            </li>
            <li>
            <Link href="/">
                <p>Profile</p>
            </Link>
            </li>
        </ul>
    </div>
    </>)
}