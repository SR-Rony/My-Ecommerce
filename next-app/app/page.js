import { Categoriy } from "@/components/categoriy";
import styles from "./page.module.css";
import { Banner } from "@/components/banner";
import { CategoryButton } from "@/components/categoryButton";
import Product from "@/components/product";

export default function Home() {
  return (
    <main className={styles.main}>
      <Categoriy/>
      <Banner/>
      <CategoryButton/>
      <Product/>
    </main>
  );
}
