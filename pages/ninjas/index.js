import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Ninjas.module.css'

export const getStaticProps = async () => {
    
    // fetch users from jsonplaceholder api
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: {
            title: 'Ninjas List',
            description: 'List of ninjas',
            keywords: 'list, ninjas',
            ninjas: data
        },
    }
}

const Ninjas = ({ title, description, keywords, ninjas }) => {
    return ( 
        <>
            <Head>
                <title>{title}</title>
                <meta name="keywords" content={keywords} />
                <meta name="description" content={description} />
            </Head>
            <div>
                <h1>All Ninjas</h1>
                <ul>
                    {ninjas.map(ninja => (
                        <Link href={'/ninjas/' + ninja.id} key={ninja.id}>
                            <a className={styles.single}>
                                <h3>{ninja.name}</h3>
                            </a>
                        </Link>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Ninjas;