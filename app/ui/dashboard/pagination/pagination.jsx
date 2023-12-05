'use client'
import styles from './pagination.module.css';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const Pagination = ({count}) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathName = usePathname();

  const page = searchParams.get('page') || 1;

  const params = new URLSearchParams(searchParams);
  const ITEM_PER_PAGE = parseInt(process.env.ITEM_PER_PAGE);

  const hasPrev = ITEM_PER_PAGE * (parseInt(page) -1) > 0
  const hasNext = ITEM_PER_PAGE * (parseInt(page) -1) + ITEM_PER_PAGE < count;

  const handleChangePage = () => {
    type === "prev"
      ? params.set("page", parseInt(page) - 1)
      : params.set("page", parseInt(page) + 1);
     replace(`${pathname}?${params}`);
    
  }

  <div className={styles.container}>
    <button className={styles.button} 
            disabled={!hasPrev}
            onClick={()=> handleChangePage('prev')}
    >Previous</button>
    <button className={styles.button} 
            disabled={!hasNext}
            onClick={()=> handleChangePage('next')}
    >Next</button>
  </div>;
};

export default Pagination;
