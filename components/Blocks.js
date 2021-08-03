import styles from '@/styles/Block2.module.css'
import { FaSearchLocation } from "react-icons/fa"
import { BiVideoRecording } from "react-icons/bi"
import { GiCctvCamera } from "react-icons/gi"
import { useRouter } from "next/router"
import useTranslation from 'next-translate/useTranslation'


export default function Blocks() {
  const router = useRouter()
  const { locale } = router
  const { t } = useTranslation('common')
  return (
    <div className={styles.backgrnd}>
      
      <div className={styles.card}>
        
      {/* <h1>{greeting}</h1> */}
      <p><br /></p>
      <FaSearchLocation className={styles.iconi} size={80} />
  <h1>{t('card1')}</h1>
  <p className={styles.price}>{t('card2')}</p>
  <p><br /></p>
  
</div>
<div className={styles.card}>
<p><br /></p>
<BiVideoRecording className={styles.iconi} size={80} />
  <h1>{t('card3')}</h1>
  <p className={styles.price}>{t('card4')}</p>
  <p><br /></p>
  
</div>
<div className={styles.card}>
<p><br /></p>
<GiCctvCamera className={styles.iconi} size={80} />
  <h1>{t('card5')}</h1>
  <p className={styles.price}>{t('card6')}</p>
  <p><br /></p>
  
</div>
<div className={styles.lijn}>
       
       </div>
    </div>
  )
}
{/* <div className={styles.conta}>
      <h1 className={styles.waarden}>ONZE WAARDEN</h1>
        <div className={styles.block3}>
          <FaSearchLocation className={styles.iconi} size={80} />
          <h1 className={styles.texxt}>CUSTOMER FOCUS</h1>
          <h3 className={styles.texxt}>BY ANTICIPATING MARKET TRENDS AND INVESTING TIME AND EFFORT TO FULLY UNDERSTAND CUSTOMER NEEDS, WE GO TO GREAT LENGTHS TO PROVIDE PRODUCTS AND SOLUTIONS OF SUPERIOR VALUE.</h3>
        </div>
        <div className={styles.block2}> <MdHome className={styles.iconi} size={80} />
          <h1 className={styles.texxt}>CUSTOMER FOCUS</h1>
          <h3 className={styles.texxt}>MET HET DOEL OM EEN SUPERIEURE KLANTENWAARDE TE CREREN, DAGEN WE DE STATUS QUO CONSTRUCTIEF UIT EN ONDERZOEKEN KANSEN OM TE INNOVEREN. WIJ ZIJN BEREID OM GECONTROLEERDE RISICO'S TE NEMEN EN ZIJN VASTBESLOTEN OM TE VOLDOEN.</h3></div>
        <div className={styles.block2}> <MdHome className={styles.iconi} size={80} />
          <h1 className={styles.texxt}>CUSTOMER FOCUS</h1>
          <h3 className={styles.texxt}>ONZE TROTS OP WAT ONS BEDRIJF ONS INSPIRERT EN MOTIVEERT OM ONS BEST OP HET WERK TE GEVEN. WIJ STAAN GRAAG OM OVER ONS BEDRIJF TE LEREN EN OM ONZE KENNIS EN ENTHOUSIASME MET ANDEREN TE DELEN.</h3></div>
        <div className={styles.block4}> <MdHome className={styles.iconi} size={80} />
          <h1 className={styles.texxt}>CUSTOMER FOCUS</h1>
          <h3 className={styles.texxt}>OF OP HET VELD BIJ KLANTEN, OP KANTOOR, OP DE WEG - WIJ ZIJN ÉÉN TEAM, DELEN EEN GEMEENSCHAPPELIJK DOEL EN GEMEENSCHAPPELIJKE DOELEN. OPEN COMMUNICATIE, IDEE DELEN, GEMEENSCHAPPELIJKE DOELEN BEREIKEN ZIJN DE SLEUTEL!</h3></div>
  </div> */}