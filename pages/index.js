import Layout from "@/components/Layout"
import EventItem from "@/components/EventItem"
import {API_URL} from "@/config/index"

//client side
export default function HomePage({events}) {
  console.log(events)
  return (
    <Layout >
      <h1>Wie is T&D Technology en wat doen we?
</h1>
{events.length === 0 && <h3>Geen informatie hier</h3>}

{events.map((evt) => (
  <EventItem key={evt.id} evt={evt} />
))}

    </Layout>
  )
}
// server side getServerSideProp
export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events`)
  const events = await res.json()

  return {
    props: { events },
    revalidate: 1,
  }
}
