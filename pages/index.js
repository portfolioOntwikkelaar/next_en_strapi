import Layout from "@/components/Layout"
import EventItem from "@/components/EventItem"
import Blocks from "@/components/Blocks"
import {API_URL} from "@/config/index"
import Link from "next/link"
import 'semantic-ui-css/semantic.min.css'
import { useRouter } from 'next/router';
// import useTranslation from 'next-translate/useTranslation'
import useTranslation from 'next-translate/useTranslation'
import { GiTrumpetFlag, GiUsaFlag } from "react-icons/gi"
import styles from '@/styles/Layout2.module.css'

import Image from 'next/image'


//client side
export default function HomePage({events}) {
  const router = useRouter()
  const { locale } = router
  const { t } = useTranslation('common')
  
  console.log(events)
  return (
    <Layout >
      <div className={styles.iceberg}></div>
      <div className={styles.voorwaarde}>
      <h1>{t('waarden')}</h1>

      </div>
      
      {/* <h1>Wie is T&D Technology en wat doen we? 
</h1> */}
{events.length === 0 && <h3>Geen informatie hier</h3>}
<Blocks />
<div className={styles.container}>

{events.map((evt) => (
  <EventItem key={evt.id} evt={evt} />
))}
</div>
{events.length > 0 && (
  <div className={styles.formargin}>

    <Link href='/events'>
    <a className='btn-secondary2'>Alles Bekijken</a>
  </Link>
    </div>
)}

    </Layout>
  )
}
// server side getServerSideProps
export async function getStaticProps() {
  const res = await fetch(`${API_URL}/events?_sort=date:ASC&_limit=3`)
  const events = await res.json()

  return {
    props: { events },
    revalidate: 1,
  }
}
