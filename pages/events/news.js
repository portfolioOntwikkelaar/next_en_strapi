import Footer from '@/components/Footer'
import Header from 'components/Header'



import styles from '@/styles/News.module.css'
import Link from 'next/link'
export default function NewsPage() {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div className={styles.image}>
          <div className={styles.tech}><p>technologie</p></div>
          <Link href='/'>
            
            <a className={styles.fon2}>Lorem, ipsum dolor.</a>
          </Link>
          <p className={styles.fon3}>1 juli 2021</p>
        </div>

        <div className={styles.image2}>
        <div className={styles.tech}><p>gadgets</p></div>
        <Link href='/'>
        <a className={styles.fon2}>Lorem, ipsum dolor.</a>
          </Link>
          <p className={styles.fon3}>1 juli 2021</p>
        </div>
        <div className={styles.image3}>
        <div className={styles.tech}><p>technologie</p></div>
        <Link href='/'>
        <a className={styles.fon2}>Lorem, ipsum dolor.</a>
          </Link>
          <p className={styles.fon3}>1 juli 2021</p>
        </div>
      </div>
      {/* next */}
      <div className={styles.container2}>
        <div className={styles.image4}></div>
          <div className={styles.bckgrnd}><Link href='/'><a className={styles.techst}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, ducimus illo aut quae dolor eveniet.</a></Link></div>
          
          </div><p className={styles.paragraf}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut maxime culpa accusantium ullam dolore minus ratione accusamus labore mollitia reiciendis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, eveniet! Expedita, reiciendis et fugiat impedit perferendis officiis non.</p>
        
          <div className={styles.container2}>
        <div className={styles.image5}></div>
        <div className={styles.bckgrnd2}><Link href='/'><a className={styles.techst}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, ducimus illo aut quae dolor eveniet.</a></Link></div></div><p className={styles.paragraf}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut maxime culpa accusantium ullam dolore minus ratione accusamus labore mollitia reiciendis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, eveniet! Expedita, reiciendis et fugiat impedit perferendis officiis non.</p>
        
        <div className={styles.container2}>
        <div className={styles.image6}></div>
        <div className={styles.bckgrnd3}><Link href='/'><a className={styles.techst}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, ducimus illo aut quae dolor eveniet.</a></Link></div>
        

      </div><p className={styles.paragraf}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut maxime culpa accusantium ullam dolore minus ratione accusamus labore mollitia reiciendis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, eveniet! Expedita, reiciendis et fugiat impedit perferendis officiis non.</p>
      <Footer />
    </div>
  )
}
