import Layout from "@/components/Layout"
import EventItem from "@/components/EventItem"
import Blocks from "@/components/Blocks"
import {API_URL} from "@/config/index"
import Link from "next/link"
import 'semantic-ui-css/semantic.min.css'
import useTranslation from 'next-translate/useTranslation'



//client side
export default function HomePage({events}) {
  let { t } = useTranslation()
  
  console.log(events)
  return (
    <Layout >
      <h1>OUR VALUES</h1>
      {/* <h1>Wie is T&D Technology en wat doen we? 
</h1> */}
{events.length === 0 && <h3>Geen informatie hier</h3>}
<Blocks />
{events.map((evt) => (
  <EventItem key={evt.id} evt={evt} />
))}
{events.length > 0 && (
  <Link href='/events'>
    <a className='btn-secondary2'>Alles Bekijken</a>
  </Link>
)}

    </Layout>
  )
}
// server side getServerSideProp
export async function getStaticProps() {
  const res = await fetch(`${API_URL}/events?_sort=date:ASC&_limit=3`)
  const events = await res.json()

  return {
    props: { events },
    revalidate: 1,
  }
}
