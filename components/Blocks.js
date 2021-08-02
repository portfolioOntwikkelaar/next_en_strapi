import styles from '@/styles/Block2.module.css'
import { FaSearchLocation } from "react-icons/fa"
import { BiVideoRecording } from "react-icons/bi"
import { GiCctvCamera } from "react-icons/gi"
// import { useRouter } from "next/router"



export default function Blocks() {
  // let router = useRouter();
  
  // let focus = router.locale === "en-US" 
  // ? "CUSTOMER FOCUS" 
  // : router.locale === "nl-NL" 
  // ? "KLANTGERICHTHEID" 
  // : router.locale === "fr" 
  // ? "ORIENTATION CLIENT"
  // : "";
  // let focus2 = router.locale === "en-US" 
  // ? "BY ANTICIPATING MARKET TRENDS AND INVESTING TIME AND EFFORT TO FULLY UNDERSTAND CUSTOMER NEEDS, WE GO TO GREAT LENGTHS TO PROVIDE PRODUCTS AND SOLUTIONS OF SUPERIOR VALUE." 
  // : router.locale === "nl-NL" 
  // ? "DOOR TE ANTICIPEREN OP MARKTTRENDS EN TIJD EN INSPANNING TE INVESTEREN OM DE BEHOEFTEN VAN DE KLANT VOLLEDIG TE BEGRIJPEN, GAAN WIJ OP GROTE LENGTES OM PRODUCTEN EN OPLOSSINGEN VAN SUPERIEURE WAARDE TE LEVEREN." 
  // : router.locale === "fr" 
  // ? "EN ANTICIPANT LES TENDANCES DU MARCHÉ ET EN INVESTISSANT DU TEMPS ET DES EFFORTS POUR COMPRENDRE PLEINEMENT LES BESOINS DES CLIENTS, NOUS ALLONS TRÈS BEAUCOUP POUR FOURNIR DES PRODUITS ET DES SOLUTIONS DE VALEUR SUPÉRIEURE."
  // : "";
  // let passion = router.locale === "en-US" 
  // ? "PASSION" 
  // : router.locale === "nl-NL" 
  // ? "PASSIE" 
  // : router.locale === "fr" 
  // ? "LA PASSION"
  // : "";
  // let passion2 = router.locale === "en-US" 
  // ? "OUR PRIDE IN WHAT OUR COMPANY DOES INSPIRES AND MOTIVATES US TO GIVE OUR BEST AT WORK. WE ARE EAGER TO LEARN ABOUT OUR BUSINESS AND TO SHARE OUR KNOW-HOW AND ENTHUSIASM WITH OTHERS." 
  // : router.locale === "nl-NL" 
  // ? "ONZE TROTS OP WAT ONS BEDRIJF ONS INSPIRERT EN MOTIVEERT OM HET BESTE OP HET WERK TE GEVEN. WIJ ZIEN ER UIT OM ONS WERK TE LEREN KENNEN EN ONZE KENNIS EN ONS ENTHOUSIASME MET ANDEREN TE DELEN." 
  // : router.locale === "fr" 
  // ? "NOTRE FIERTÉ DE CE QUE NOTRE ENTREPRISE NOUS INSPIRE ET NOUS MOTIVE À DONNER LE MEILLEUR AU TRAVAIL. NOUS AVONS HÂTE DE CONNAÎTRE NOTRE MÉTIER ET DE PARTAGER NOTRE SAVOIR-FAIRE ET NOTRE ENTHOUSIASME AVEC LES AUTRES."
  // : "";
  // let team = router.locale === "en-US" 
  // ? "TEAM SPIRIT" 
  // : router.locale === "nl-NL" 
  // ? "TEAM GEEST" 
  // : router.locale === "fr" 
  // ? "ESPRIT D'ÉQUIPE"
  // : "";
  // let team2 = router.locale === "en-US" 
  // ? "WHETHER IN THE FIELD AT CUSTOMERS, IN THE OFFICE, ON THE ROAD – WE ARE ONE TEAM, SHARING A COMMON PURPOSE AND COMMON GOALS. OPEN COMMUNICATION, IDEA SHARING, ACHIEVING COMMON GOALS ARE KEY!" 
  // : router.locale === "nl-NL" 
  // ? "OF OP HET VELD BIJ KLANTEN, OP KANTOOR, OP DE WEG - WIJ ZIJN ÉÉN TEAM, DELEN EEN GEMEENSCHAPPELIJK DOEL EN GEMEENSCHAPPELIJKE DOELEN. OPEN COMMUNICATIE, IDEE DELEN, GEMEENSCHAPPELIJKE DOELEN BEREIKEN ZIJN DE SLEUTEL!" 
  // : router.locale === "fr" 
  // ? "QUE CE SOIT SUR LE TERRAIN CHEZ LES CLIENTS, AU BUREAU, SUR LA ROUTE – NOUS SOMMES UNE ÉQUIPE, PARTAGANT UN OBJECTIF ET DES OBJECTIFS COMMUNS. COMMUNICATION OUVERTE, PARTAGE D'IDÉES, ATTEINDRE DES OBJECTIFS COMMUNS SONT LA CLÉ !"
  // : "";
  return (
    <div className={styles.backgrnd}>
      
      <div className={styles.card}>
        
      {/* <h1>{greeting}</h1> */}
      <p><br /></p>
      <FaSearchLocation className={styles.iconi} size={80} />
  <h1>KLANTGERICHTHEID</h1>
  <p className={styles.price}>DOOR TE ANTICIPEREN OP MARKTTRENDS EN TIJD EN INSPANNING TE INVESTEREN OM DE BEHOEFTEN VAN DE KLANT VOLLEDIG TE BEGRIJPEN, GAAN WIJ OP GROTE LENGTES OM PRODUCTEN EN OPLOSSINGEN VAN SUPERIEURE WAARDE TE LEVEREN.</p>
  <p><br /></p>
  
</div>
<div className={styles.card}>
<p><br /></p>
<BiVideoRecording className={styles.iconi} size={80} />
  <h1>PASSIE</h1>
  <p className={styles.price}>ONZE TROTS OP WAT ONS BEDRIJF ONS INSPIRERT EN MOTIVEERT OM HET BESTE OP HET WERK TE GEVEN. WIJ ZIEN ER UIT OM ONS WERK TE LEREN KENNEN EN ONZE KENNIS EN ONS ENTHOUSIASME MET ANDEREN TE DELEN.</p>
  <p><br /></p>
  
</div>
<div className={styles.card}>
<p><br /></p>
<GiCctvCamera className={styles.iconi} size={80} />
  <h1>TEAM GEEST</h1>
  <p className={styles.price}>OF OP HET VELD BIJ KLANTEN, OP KANTOOR, OP DE WEG - WIJ ZIJN ÉÉN TEAM, DELEN EEN GEMEENSCHAPPELIJK DOEL EN GEMEENSCHAPPELIJKE DOELEN. OPEN COMMUNICATIE, IDEE DELEN, GEMEENSCHAPPELIJKE DOELEN BEREIKEN ZIJN DE SLEUTEL!</p>
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