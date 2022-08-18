import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div className={styles.container}>
        <main>
          <h1 className={styles.title}>
            Home page
          </h1>
          <p className={styles.text}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, magnam. Consequuntur possimus accusamus veritatis ratione sequi blanditiis illo quod aliquam, alias in, necessitatibus architecto cupiditate deserunt magnam quas pariatur asperiores doloremque debitis accusantium veniam exercitationem deleniti quos? Nesciunt eaque dolorum sed culpa rem, aspernatur voluptatibus necessitatibus reiciendis natus molestias totam dolores pariatur quasi adipisci atque nulla tempora repellat sit quod voluptas recusandae dignissimos. Voluptatem expedita sunt ut aperiam deserunt, harum eaque alias consequatur, vero aspernatur illum voluptate cumque, suscipit exercitationem cupiditate repellat praesentium repellendus ipsa quasi magnam dolorum id? Nulla provident tempore perspiciatis vero, distinctio fuga error voluptatem ratione consequuntur.
          </p>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit eligendi doloribus perferendis harum natus quas mollitia ipsum in debitis, iure aut laudantium. Laboriosam eos voluptatum corrupti repudiandae voluptate dolores alias, sit dolorum eligendi, minus deserunt? Consectetur quod, unde molestiae blanditiis alias quas cupiditate. Iste voluptate, impedit sunt quas magni vitae.
          </p>
          <Link href="/ninjas">
            <a className={styles.btn}>
              see Ninja Listing
            </a>
          </Link>
        </main>
      </div>
    </>
  )
}
