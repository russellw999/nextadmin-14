'use client'

import styles from '@/app/ui/login/login.module.css'
import { authenticate } from '../lib/actions';
import { useFormState } from "react-dom";
const LoginPage = () => {
//  const [state, formAction] = useFormState(authenticate, undefined);

  return (
    <div className={styles.container}>
       <form action={authenticate} className={styles.form}>
        <h1>Login</h1>
           <input id='username' type='text' placeholder='username' name='username'/>
           <input id='password' type='password' placeholder='password'  name='password'/>
           <button>Login</button>
       </form>
    </div>
  );
}

export default LoginPage;
