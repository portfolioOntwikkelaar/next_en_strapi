import Link from 'next/link'
import styles from '@/styles/Footer.module.css'
import { MdHome } from "react-icons/md"



export default function Footer() {
  
  return (
    <footer className={styles.footer}>
      <div className={styles.block200}>
      <h1>WE HEBBEN: EEN TELEFOON / E-MAIL /</h1>
      <div className={styles.block}>
      <MdHome className={styles.icon} />
      
        <h3>OFFICE ADDRESS</h3>
        <p>Herkenrodesingel 4 / 1</p>
        <p>3500 Hasselt – Belgium</p>
      </div>
      
      <div className={styles.block2}>
      <MdHome className={styles.icon} />
      
        <h3>OFFICE ADDRESS</h3>
        <p>Herkenrodesingel 4 / 1</p>
        <p>3500 Hasselt – Belgium</p>
      </div>

      
      
      </div>
      <p>Copyright &copy; T&D News 2021</p>
      <p>
        <Link href='/about'>About This Firma</Link>
      </p>
    </footer>
  )
}
