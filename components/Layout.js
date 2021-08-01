import Head from 'next/head'
import {useRouter} from 'next/router'
import Header from './Header'
import Footer from './Footer'
import Showcase from './Showcase'
import styles from '@/styles/Layout.module.css'
import Link from 'next/link'


export default function Layout({title, keywords, description, children}) {
  const router = useRouter()
  return (
    <div>
      <Head>
        <title>OUR VALUES</title>
        <meta name='description' content={description}/>
        <meta name='keywords' content={keywords}/>
      </Head>

      <Header />
        
       

      {router.pathname === '/' && <Showcase />}
      <div className={styles.container}>

      {children}
      </div>
      {/* <div>
        <ul>{router.locales.map(locale =>(
          <li key={locale}>
            <Link href={router.asPath} locale={locale}><a>{locale}</a></Link>
          </li>
        ))}</ul>
      </div> */}
      <Footer />
    </div>
  )
}

Layout.defaultProps = {
  title: 'TD News | Find your webcam', description: 'Find the drone', keywords: 'webcams, drones, saas'
}