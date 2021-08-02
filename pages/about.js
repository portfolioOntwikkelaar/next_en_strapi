import Layout from "@/components/Layout"
import { useRouter } from "next/router";


export default function AboutPage() {
  // const router = useRouter();
  // const overons = router.locale === "en-US" 
  // ? "Who are we?" 
  // : router.locale === "nl-NL" 
  // ? "Wie zijn wij?" 
  // : router.locale === "fr" 
  // ? "Qui sommes-nous ?"
  // : "";
  // const verhaal = router.locale === "en-US" 
  // ? "Started in 2011 as a security company under Belgian law, T&D security bvba has come a long way. While in the first years the emphasis was mainly on the monitoring of events, T&D security has since 2014 successfully focused on the static and mobile components of the profession. More specifically, T&D security specializes in dog guarding, museum guarding, retail guarding and port areas. However, T&D security has always attached great importance to the values to which they have been faithful from their conception. These values are trust and a sense of duty (Trust and Duty, T&D) coupled with an emphasis on quality rather than quantity." 
  // : router.locale === "nl-NL" 
  // ? "​Opgestart in 2011 als een bewakingsonderneming naar Belgisch recht heeft T&D security bvba een mooi parcours afgelegd. Terwijl in de eerste jaren de nadruk voornamelijk lag op de bewaking van evenementen heeft T&D security zich sinds 2014 met succes toegelegd op de statische en de mobiele componenten van het vak.  Meer bepaald is T&D security gespecialiseerd in bewaking met hond, Museale bewaking, retail bewaking en havengebieden. Steeds heeft T&D security echter de waarden waaraan ze van in hun conceptie trouw zijn geweest hoog in het vaandel gedragen. Deze waarden zijn vertrouwen en plichtsbesef (Trust and Duty, T&D) gekoppeld aan een nadruk op kwaliteit eerder dan kwantiteit. " 
  // : router.locale === "fr" 
  // ? "Créée en 2011 en tant que société de sécurité de droit belge, T&D security bvba a parcouru un long chemin. Alors que dans les premières années l'accent était mis principalement sur la surveillance des événements, la sécurité de T&D s'est depuis 2014 avec succès focalisée sur les composantes statiques et mobiles de la profession. Plus spécifiquement, T&D security est spécialisé dans la garde de chiens, la garde de musées, la garde de commerces et les zones portuaires. Cependant, T&D security a toujours attaché une grande importance aux valeurs auxquelles ils ont été fidèles dès leur conception. Ces valeurs sont la confiance et le sens du devoir (Trust and Duty, T&D) couplés à un accent mis sur la qualité plutôt que sur la quantité."
  // : "";
  return (
    <Layout title='About TD News' >
      <h1>Over ons</h1>
      <p>Lorem ipsum dolor sit amet consectetur.</p>
      <p>Versie: 2.0.0</p>
      
    </Layout>
  )
}
