import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Social App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Social app</h1>
    </div>
  )
}