import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaPencilAlt, FaTimes } from "react-icons/fa"
import Link from 'next/link'
import Image from 'next/image'
import Layout from '@/components/Layout'
import EventMap from '@/components/EventMap'
import {API_URL} from '@/config/index'
import styles from '@/styles/Event.module.css'
import { useRouter } from 'next/router'




export default function EventPage({evt}) {
  const router = useRouter()
  
  

  

  return (
    <Layout>
      <div className={styles.event}>
        
        
      </div>
      <span>
      {/* {new Date(evt.date)} at {evt.time} */}
      {new Date(evt.date).toLocaleDateString('en-US')} at {evt.time}
      </span>
      <h2>
          {evt.name}
        </h2>
        <ToastContainer />
      {evt.image && (
        <div className={styles.image}>
          <Image src={evt.image ? evt.image.formats.thumbnail.url : '/images/event-default.png'} width={960} height={600}/>
        </div>
      )}
{/* <Image src={evt.image.formats.medium.url } width={960} height={600}/> */}
{/* evt.image ? evt.image.formats.thumbnail.url : '/images/event-default.png' */}

        <h3>Titel:</h3>
        <p>{evt.performers}</p>
        <h3>Beschrijving:</h3>
        <p>{evt.description}</p>
        <h3>Afkorting: {evt.venue}</h3>
        <p>{evt.address}</p>

        <EventMap evt={evt} />
        
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
    params: {slug: evt.slug}, 
  }))
  
  return {
    paths,
    fallback: true,
    
  } // create additional languages
  
}

export async function getStaticProps({params: { slug }}) {
  const res = await fetch(`${API_URL}/events?slug=${slug}`)
  const events = await res.json()

  return {
    props: {
      evt: events[0],
      
    },
    revalidate: 1
  }
}
