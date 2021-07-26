import moment from 'moment'
import { FaImage } from "react-icons/fa"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '@/components/Layout'
import Modal from '@/components/Modal'
import ImageUpload from '@/components/ImageUpload'
import {API_URL} from '@/config/index'
import styles from '@/styles/Form.module.css'

export default function EditEventPage({evt}) {

  const [values, setValues] = useState({
    name: evt.name,
    performers: evt.performers,
    venue: evt.venue,
    address: evt.address,
    date: evt.date,
    time: evt.time,
    description: evt.description,
  })

  const [imagePreview, setImagePreview] = useState(evt.image ? evt.image.formats.thumbnail.url : null)

  const [showModal, setShowModal] = useState(false)

  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validation
    const hasEmptyFields = Object.values(values).some((element) => element === '')
    if(hasEmptyFields){
      toast.error('Toevoeg nog een veld')
    }

    const res = await fetch(`${API_URL}/events/${evt.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
    if(!res.ok) {
      toast.error('Iets was verkeerd')
    } else {
      const evt = await res.json()
      router.push(`/events/${evt.slug}`)
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  const ImageUploaded = async (e) => {
    const res = await fetch(`${API_URL}/events/${evt.id}`)
    const data = await res.json()
    setImagePreview(data.image.formats.thumbnail.url)
    setShowModal(false)
  }

  return (
    <Layout title='Add News'>
      <Link href='/events'>Ga Terug</Link>
      <h1>Wijzigen BTP</h1>
      <ToastContainer />
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.grid}>
          <div>
            <label htmlFor="name">Adv Naam</label>
            <input type="text" id="name" name="name" value={values.name} 
            onChange={handleInputChange} />
          </div>
          <div>
            <label htmlFor='performers'>SubTitel</label>
            <input
              type='text'
              name='performers'
              id='performers'
              value={values.performers}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor='venue'>Straat</label>
            <input
              type='text'
              name='venue'
              id='venue'
              value={values.venue}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor='address'>Address</label>
            <input
              type='text'
              name='address'
              id='address'
              value={values.address}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor='date'>Date</label>
            <input
              type='date'
              name='date'
              id='date'
              value={moment(values.date).format('yyyy-MM-DD')}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor='time'>Tijd</label>
            <input
              type='text'
              name='time'
              id='time'
              value={values.time}
              onChange={handleInputChange}
            />
          </div>
        </div>

        
        <div>
          <label htmlFor='description'>Adv Beschrijving</label>
          <textarea
            type='text'
            name='description'
            id='description'
            value={values.description}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <input type="submit" value="Update Event" className='btn' />
      </form>
      <h2>Adv Afbeelding</h2>
      {imagePreview ? (
        <Image src={imagePreview} height={100} width={170} />
      ) : (<div>
          <p>Geen afb was bijgezet</p>
        </div>)}
        <div>
          <button onClick={() => setShowModal(true)} className="btn-secondary">
            <FaImage /> Afb Bijzetten
          </button>
        </div>
        <Modal show={showModal} onClose={() => setShowModal(false)}>
          <ImageUpload evtId={evt.id} ImageUploaded={ImageUploaded} />
        </Modal>
    </Layout>
  )
}

export async function getServerSideProps({params: {id}}) {
  const res = await fetch(`${API_URL}/events/${id}`)
  const evt = await res.json()

  console.log(req.headers.cookie)

  return {
    props: {
      evt,
    },
  }
}
