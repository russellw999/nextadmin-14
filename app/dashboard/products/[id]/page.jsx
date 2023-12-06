import { updateProduct } from "@/app/lib/actions";
import { fetchProduct } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";

const SingleProductPage = async ({ params }) => {
  const { id } = params;
  const product = await fetchProduct(id);
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noproduct.jpg" alt="" fill />
        </div>
        {product.title}
      </div>
      <div className={styles.formContainer}>
        <form action={updateProduct} className={styles.form}>
         <input type="hidden" name="id" value={product.id} /> 
          <label>Title</label>
          <input type="text" name="price" placeholder={product.title} />
          <label>Price</label>
          <input type="number" name="price" placeholder={product.price} />
          <label>Stock</label>
          <input type="number" name="stock" placeholder={product.stock}/>
          <label>Color</label>
          <input type="text" name="color" placeholder={product.color || "color"} />
          <label>{product.size || "size"}</label>
          <textarea type="text" name="size" placeholder="Max" />
          <label>Cat</label>
          <select name="cat" id="cat" >
            <option value='kitchen'>Kitchen</option>
            <option value='computer'>Computers</option>
          </select>
          <label>Description</label>
          <textarea name='desc' id='desc' rows='10' placeholder={product.desc} />
          <button>Update</button>
        </form>
      </div>
    </div>
  );
}

export default SingleProductPage;
