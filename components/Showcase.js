import styles from '@/styles/Showcase.module.css'
import { useRouter } from 'next/router';


export default function Showcase() {
  const router = useRouter()
  const titel = router.locale === "en-US" 
  ? "Trust and Duty" 
  : router.locale === "nl-NL" 
  ? "Vertrouwen en Plicht" 
  : router.locale === "fr" 
  ? "Confiance et Devoir"
  : "";
  const subtitel = router.locale === "en-US" 
  ? "is your technology transformation partner!" 
  : router.locale === "nl-NL" 
  ? "is uw technologie transformatie partner!" 
  : router.locale === "fr" 
  ? "est votre partenaire de transformation technologique!"
  : "";
  const info = router.locale === "en-US" 
  ? "Our mission is to be our customers' first choice for solutions and services for process-oriented companies whose core business is built around people, organizations and locations." 
  : router.locale === "nl-NL" 
  ? "Onze missie is om de eerste keuze van onze klanten te zijn voor oplossingen en diensten voor procesgerichte bedrijven waarvan de core business is opgebouwd rond mensen, organisaties en locaties." 
  : router.locale === "fr" 
  ? "Notre mission est d'être le premier choix de nos clients en matière de solutions et de services pour les entreprises orientées processus dont le cœur de métier est construit autour des personnes, des organisations et des sites."
  : "";
  return (
    <div className={styles.showcase}>
      <h1>{titel}</h1>
      <h2>T&D {subtitel}</h2>
      <div className={styles.showcase2}>
        
      </div>
      <div className={styles.showcase3}>
        <h3 className={styles.kop3}>

        {info}
        </h3>
        </div>

    </div>
  )
}
