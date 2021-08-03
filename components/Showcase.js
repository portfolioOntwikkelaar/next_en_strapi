import styles from '@/styles/Showcase.module.css'
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation'

export default function Showcase() {
  const router = useRouter()
  const { locale } = router
  const { t } = useTranslation('common')
  return (
    <div className={styles.showcase}>
      <h1>{t('titel1')}</h1>
      <h2>T&D {t('titel2')}</h2>
      <div className={styles.showcase2}>
        
      </div>
      <div className={styles.showcase3}>
        <h3 className={styles.kop3}>
        {t('titel3')}
        </h3>
        </div>

    </div>
  )
}
