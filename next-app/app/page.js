import { Categoriy } from "@/components/categoriy";
import styles from "./page.module.css";
import { Product } from "@/components/product";
import { Banner } from "@/components/banner";
import { CategoryButton } from "@/components/categoryButton";

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
