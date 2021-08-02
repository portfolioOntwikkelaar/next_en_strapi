import Link from 'next/link'
import styles from '@/styles/Footer.module.css'
import { AiTwotonePhone } from "react-icons/ai"
import { MdHome } from "react-icons/md"
import Image from 'next/image'

import profilePic from '../public/bvbo_1.jpg'
import profilePic1 from '../public/trends.jpg'
import profilePic2 from '../public/group.png'



export default function Footer() {
  
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
      <p>T&D security bvba met als identificatienummer 'BE 0830 397 501' bij de Kruispuntbank van Ondernemingen<br /> is verzekerd tegen lichamelijke of materiële schade  die voortvloeien uit  de uitoefening van zijn activiteiten inzake private veiligheid.<br /> De benadeelden kunnen zich rechtstreeks wenden tot AG insurance te Emile Jacqmainlaan 53, 1000 Brussel. </p></div></div>
      </div></div>
      
    </footer>
  )
}
