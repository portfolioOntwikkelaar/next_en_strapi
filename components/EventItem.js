
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/EventItem.module.css'
import { useRouter } from "next/router"
import useTranslation from 'next-translate/useTranslation'




export default function EventItem({evt}) {
  const router = useRouter()
  const { locale } = router
  const { t } = useTranslation('common')
  return (
    

    <div className={styles.event} >
      
      <div className={styles.image} >
        <Image className={styles.image1}  src={evt.image ? evt.image.formats.thumbnail.url : '/images/event-default.png'} width={470} height={300} />
        <h3 className={styles.name}>{evt.name}</h3>
      </div>
      <div className={styles.info}>
        <span>
          {/* {new Date(evt.date).toLocaleDateString('en-US')}  */}
          {evt.time}
        </span>
      </div>
      <div className={styles.link}>
        <Link href={`/events/${evt.slug}`}>
          <a className='btn'>{t('button3')}</a>
        </Link>
      </div>
      
    </div>
    
  )
}


