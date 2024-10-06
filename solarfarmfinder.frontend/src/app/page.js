import "bootstrap/dist/css/bootstrap.min.css";
// import styles from "./page.module.css";
// import styles from './GoogleMapLoader.module.css'
import GoogleMapsLoader from "@/app/GoogleMapLoader";
import DataView from "@/app/DataView";
import NavBar from "@/app/NavBar";
import GISLayer from "@/app/GISLayer";

export default function Home() {
  return (
    <div>
      <main>
        <NavBar />
        <div>
          <GoogleMapsLoader />
        </div>
        <GISLayer />
        <DataView />
      </main>
      <footer></footer>
    </div>

    // <div className={styles.page}>
    //   <main className={styles.main}>
    //     {/*<NavBar/>*/}
    //
    //     {/*<GISLayer/>*/}
    //     {/*<DataView/>*/}
    //   </main>
    //     <footer className={styles.footer}>
    //
    //     </footer>
    // </div>
  );
}
