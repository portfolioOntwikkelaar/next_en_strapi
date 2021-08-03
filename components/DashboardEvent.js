import Link from 'next/link'
import { FaPencilAlt, FaTimes } from 'react-icons/fa'
import styles from '@/styles/DashboardEvent.module.css' 
import { useRouter } from "next/router"
import useTranslation from 'next-translate/useTranslation'

export default function DashboardEvent({evt, handleDelete}) {
  const { t } = useTranslation('common')
  const router = useRouter()
  return (
    <div className={styles.event}>
      <h4>
        <Link href={`/events/${evt.slug}`}>
          <a>{evt.name}</a>
        </Link>
      </h4>
      <Link href={`/events/edit/${evt.id}`}>
        <a className={styles.edit}>

        <FaPencilAlt /> <span>{t('wijzigen')}</span>
        </a>
      </Link>
      <a href="#" className={styles.delete} onClick={() => handleDelete(evt.id)}>
        <FaTimes /> <span>{t('verwijderen')}</span>
      </a>
    </div>
  )
}
