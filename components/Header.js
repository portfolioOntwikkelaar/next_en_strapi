import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa"
import { useContext } from "react"
import { GiHandBandage } from 'react-icons/gi'
import { IoLanguage } from 'react-icons/io'
import Image from 'next/image'
import profilePic from '../public/tnd-technology.png'

// import Search from './Search'
import Link from 'next/link'
import AuthContext from '@/context/AuthContext'
import styles from '@/styles/Header.module.css'
import { useRouter } from "next/router"


export default function Header() {
  
  
  const {user, logout} = useContext(AuthContext)
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href='/'>
        <Image className={styles.picture}
        src={profilePic}
        alt="Picture of the author"
        width={'300 px'}
        height={'80 px'}
      />
          {/* <a className={styles.logo4}> <GiHandBandage size="30px" /></a> */}
        </Link>
      </div>
      {/* <Search /> */}

      <nav>
        <ul>
          <li>
            <Link href='/events'>
              <a>Aanbod</a>
            </Link>
          </li>
          <li>
            <Link href='/account/dashboard'>
              <a>Dashboard</a>
            </Link>
          </li>
          <li>
            <Link href='/events/news'>
              <a>Nieuws</a>
            </Link>
          </li>
          {user ? (
          // if logged in
          <><li>
            <Link href='/events/add'>
              <a>Adv toevoegen</a>
            </Link>
          </li>
          
          <li>
            <button onClick={() => logout()} className="btn-secondary btn-icon">
              <FaSignOutAlt /> Uitloggen
            </button>
          </li>
          </>
          ) : (
            // if logged out
          <><li>
            <Link href='/account/login'>
              <a className='btn-secondary btn-icon'>
                <FaSignInAlt />Inloggen</a>
            </Link>
          </li></>)}
          
          
        </ul>
      </nav>
      
      
    </header>
  )
}
