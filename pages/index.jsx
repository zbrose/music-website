import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from '../components/footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Zach Brose</title>
      </Head>

      <main style={{textAlign:'center'}}>
          <Image
            src='/images/zach2.jpg'
            alt='a pic of zach brose'
            width={800}
            height={1000}
          /> 
      </main>
    </div>
  )
}
