import { GiHandBandage } from 'react-icons/gi'
import Search from './Search'
import Link from 'next/link'
import styles from '@/styles/Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href='/'>
          <a>TD News <GiHandBandage size="30px" /></a>
        </Link>
      </div>
      <Search />

      <nav>
        <ul>
          <li>
            <Link href='/events'>
              <a>Aanbod</a>
            </Link>
          </li>
        </ul>
      </nav>
      
      
    </header>
  )
}
