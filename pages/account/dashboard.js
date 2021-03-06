import { parseCookies } from "@/helpers/index"
import { useRouter } from "next/router"
import Layout from '@/components/Layout'
import DashboardEvent from '@/components/DashboardEvent'
import { API_URL } from "@/config/index"
import styles from '@/styles/Dashboard.module.css'

import useTranslation from 'next-translate/useTranslation'

export default function DashboardPage({events, token}) {
  
  // const { locale } = router
  const { t } = useTranslation('common')
  const router = useRouter()
  const deleteEvent = async (id) => {
    if(confirm('Ben je zeker?')) {
      const res = await fetch(`${API_URL}/events/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      const data = await res.json()

      if(!res.ok) {
        toast.error(data.message)
      } else {
        router.reload()
      }
    }
  }

  return (
    <Layout title='Gebruikers Dashboard'>
      <div className={styles.dash}>
      <h1>Dashboard</h1>
      <h3>{t('titelAdv')}</h3>

      {events.map((evt) => (
        <DashboardEvent key={evt.id} evt={evt} handleDelete={deleteEvent} />
      ))}

      </div>
      
    </Layout>
  )
}


export async function getServerSideProps({req}) {
  const {token} = parseCookies(req)

  const res = await fetch(`${API_URL}/events/me`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  
  const events = await res.json()
  return {
    props: {
      events,
      token
    },
  }
}