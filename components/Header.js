import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa"
import { useContext } from "react"
import { GiHandBandage } from 'react-icons/gi'
import { IoLanguage } from 'react-icons/io'
import Image from 'next/image'
import profilePic from '../public/tnd-technology.png'
import profilePic5 from '../public/images/belgie.jpg'
import profilePic6 from '../public/images/usa.png'
// import Search from './Search'
import Link from 'next/link'
import AuthContext from '@/context/AuthContext'
import styles from '@/styles/Header.module.css'
import { useRouter } from "next/router"
import useTranslation from 'next-translate/useTranslation'


export default function Header() {
  const router = useRouter()
  const { locale } = router
  const { t } = useTranslation('common')
  
  
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
              <a>{t('nav1')}</a>
            </Link>
          </li>
          <li>
            <Link href='/account/dashboard'>
              <a>Dashboard</a>
            </Link>
          </li>
          <li>
            <Link href='/events/news'>
              <a>{t('nav3')}</a>
            </Link>
          </li>
          <div  className={styles.vlag}>
          <div className={styles.vlagitem}>
            <Link href="/" locale="nl">
              {/* <a>Change to nl</a> */}
              {/* <GiTrumpetFlag /> */}
              <Image 
        src={profilePic5}
        alt="Picture of the author"
        width={'30 px'}
        height={'30 px'}
      />
            </Link>
          </div>
          <div>
            <Link href="/" locale="en">
            {/* <GiUsaFlag /> */}
            <Image 
        src={profilePic6}
        alt="Picture of the author"
        width={'30 px'}
        height={'30 px'}
      />
              {/* <a>Change to en</a> */}
            </Link>
          </div></div>
          {user ? (
          // if logged in
          <><li>
            <Link href='/events/add'>
              <a>{t('nav4')}</a>
            </Link>
          </li>
          
          <li>
            <button onClick={() => logout()} className="btn-secondary btn-icon">
              <FaSignOutAlt /> {t('nav5')}
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
