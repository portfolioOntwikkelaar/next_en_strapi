import Link from 'next/link'
import styles from '@/styles/Footer.module.css'
import { AiTwotonePhone } from "react-icons/ai"
import { MdHome } from "react-icons/md"
import Image from 'next/image'
import profilePic from '../public/tnd-group.png'



export default function Footer() {
  
  return (
    <footer className={styles.footer}>
      
      <div className={styles.paragraf}>
      <p>T&D security bvba met als identificatienummer 'BE 0830 397 501' bij de Kruispuntbank van Ondernemingen is verzekerd tegen lichamelijke of materiële schade die voortvloeien uit  de uitoefening van zijn activiteiten inzake private veiligheid. De benadeelden kunnen zich rechtstreeks wenden tot AG insurance te Emile Jacqmainlaan 53, 1000 Brussel. </p>
      </div>
    </footer>
  )
}
