
import styles from "./page.module.css";
import GoogleMapsLoader from "@/app/GoogleMapLoader";
import DataView from "@/app/DataView";
import NavBar from "@/app/NavBar";
import GISLayer from "@/app/GISLayer";


export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <NavBar/>
        <GoogleMapsLoader/>
        <GISLayer/>
        <DataView/>
      </main>
        <footer className={styles.footer}>

        </footer>
    </div>
  );
}
