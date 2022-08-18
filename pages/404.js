import Link from "next/link";
import styles from "../styles/Home.module.css";

import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        console.log('use effect run');
        setTimeout(() => {
            router.push('/');
        }, 3000);
    }, [])

    return ( 
        <div className="container">
            <div className="not-found">
                <h1 className={styles.title}>404</h1>
                <div>
                    <h4 className={styles.title}>Page not found</h4>
                    <Link href="/">
                        <a className={styles.btn}>Homepage</a>
                    </Link>
                </div>
            </div>

        </div>
    );
}
 
export default NotFound;