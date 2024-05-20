import { Categoriy } from "@/components/categoriy";
import styles from "./page.module.css";
import { Product } from "@/components/product";

export default function Home() {
  return (
    <main className={styles.main}>
      <Categoriy/>
      <h1>All Product</h1>
      <Product/>
    </main>
  );
}
