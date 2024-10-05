import Image from "next/image";
import styles from "./page.module.css";
import GoogleMapsLoader from "@/app/GoogleMapLoader";
import DataView from "@/app/DataView";
import {Component} from "react";
import NavBar from "@/app/NavBar";


export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <NavBar/>
        <GoogleMapsLoader/>
        <DataView/>
      </main>
    </div>
  );
}
