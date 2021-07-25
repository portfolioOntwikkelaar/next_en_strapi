import { FaPencilAlt, FaTimes } from "react-icons/fa"
import Layout from '@/components/Layout'
import {API_URL} from '@/config/index'
import styles from '@/styles/Event.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function EventPage({evt}) {
  const deleteEvent = (e) => {
    console.log('delete')
  }

  return (
    <Layout>
      <div className={styles.event}>
        <div className={styles.controls}>
          <Link href={`/events/edit/${evt.id}`}>
            <a>
              <FaPencilAlt />Wijzigen Adv
            </a>
          </Link>
          <a href="#" className={styles.delete} onClick={deleteEvent}>
            <FaTimes /> Verwijder Adv
          </a>
        </div>
        <h2>
          {evt.name}
        </h2>
      </div>
      <span>
      {new Date(evt.date).toLocaleDateString('en-US')} at {evt.time}
      </span>
      {evt.image && (
        <div className={styles.image}>
          <Image src={evt.image.formats.medium.url} width={960} height={600}/>
        </div>
      )}
        <h3>Titel:</h3>
        <p>{evt.performers}</p>
        <h3>Beschrijving:</h3>
        <p>{evt.description}</p>
        <h3>Locatie: {evt.venue}</h3>
        <p>{evt.address}</p>
        
      <Link href='/events'>
        <a className={styles.back}>
          {'<'} Ga Terug
        </a>
      </Link>

    </Layout>
  )
}

export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/events`)
  const events = await res.json()

  const paths = events.map(evt => ({
    params: {slug: evt.slug}
  }))
  
  return {
    paths,
    fallback: true,
    
  }
}

export async function getStaticProps({ params: { slug }}) {
  const res = await fetch(`${API_URL}/events?slug=${slug}`)
  const events = await res.json()

  return {
    props: {
      evt: events[0]
    },
    revalidate: 1
  }
}

// export async function getServerSideProps({ query: { slug }}) {
//   const res = await fetch(`${API_URL}/api/events/${slug}`)
//   const events = await res.json()

//   return {
//     props: {
//       evt: events[0]
//     },
//   }
// }
