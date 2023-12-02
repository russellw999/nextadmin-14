import styles from './pagination.module.css';

const Pagination = () => {
    <div className={styles.container}>
      <button className={styles.button}
              disabled  
      >  
        Previous
      </button>
      <button className={styles.button}>
         Next
      </button>
    </div>
}

export default Pagination;
