import Head from 'next/head'

import styles from '../styles/Home.module.css'

const Me = () => {
    return <div className={styles.container}>

           <Head>

            <title>About Me Seyyed Naquib</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
           </Head>
           <main className={styles.main}>
               <p>
                A highly motivated and organized Software Engineering student from University Technology Malaysia
                can perform entire software development life cycle activities.
               </p>

               <p>
                A highly motivated and organized Software Engineering student from University Technology Malaysia
                can perform entire software development life cycle activities.
               </p>

               <p>
                A highly motivated and organized Software Engineering student from University Technology Malaysia
                can perform entire software development life cycle activities.
               </p>
           </main>

    </div>
}

export default Me;