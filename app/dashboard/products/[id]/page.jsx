import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";

const SingleProductPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noproduct.jpg" alt="" fill />
          Iphone 13
        </div>
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label>Title</label>
          <input type="text" name="price" placeholder="John Doe" />
          <label>Price</label>
          <input type="number" name="price" placeholder="$1,150.00" />
          <label>Stock</label>
          <input type="number" name="stock" placeholder="23"/>
          <label>Color</label>
          <input type="text" name="color" placeholder="Gold" />
          <label>Size</label>
          <textarea type="text" name="size" placeholder="Max" />
          <label>Category</label>
          <select name="cat" id="cat">
            <option value='kitchen'>Kitchen</option>
            <option value='computer'>Computers</option>
          </select>
          <label>Description</label>
          <textarea name='desc' id='desc' rows='10' placeholder='description' />
  
        </form>
      </div>
    </div>
  );
}

export default SingleProductPage;
