import Link from 'next/link'
import styles from '@/styles/Footer.module.css'
import { AiTwotonePhone } from "react-icons/ai"
import { MdHome } from "react-icons/md"
import Image from 'next/image'
import { useRouter } from "next/router"
import useTranslation from 'next-translate/useTranslation'
import profilePic from '../public/bvbo_1.jpg'
import profilePic1 from '../public/trends.jpg'
import profilePic2 from '../public/group.png'



export default function Footer() {
  const router = useRouter()
  const { locale } = router
  const { t } = useTranslation('common')
  
  return (
    <footer >
      <div className={styles.lijn}>
       
      </div>
      <div className={styles.footer} >
      
      <div className={styles.paragraf}>
        <div className={styles.paragraf5}>
        <Image className={styles.paragraf7}
        src={profilePic}
        alt="Picture of the author"
        width={'300 px'}
        height={'80 px'}
      />
        <Image className={styles.paragraf4}
        src={profilePic1}
        alt="Picture of the author"
        width={'300 px'}
        height={'80 px'}
      /></div>
      <div className={styles.paragraf9}>
        <Image 
        src={profilePic2}
        alt="Picture of the author"
        width={'300 px'}
        height={'80 px'}
      /></div>
        <div className={styles.achtergrond}>
        <div className={styles.paragraf2}>
      <p className={styles.paragraf3}>{t('fter')}<br /> {t('fter2')} </p></div></div>
      </div></div>
      
    </footer>
  )
}
