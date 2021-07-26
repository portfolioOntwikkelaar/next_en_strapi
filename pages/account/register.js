import { FaUser } from "react-icons/fa"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect, useContext } from 'react'
import Link from "next/link"
import Layout from '@/components/Layout'
import AuthContext from '@/context/AuthContext'
import styles from '@/styles/AuthForm.module.css'

export default function RegisterPage() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')

  const {register, error} = useContext(AuthContext)

  useEffect(() => error && toast.error(error))

  const handleSubmit = e => {
    e.preventDefault()
  

  if(password !== passwordConfirm) {
    toast.error('Wachtwoord is verkeerd!')
    return
  }
  register(username, email, password)
}
  return (
    <Layout title='Gebruiker Aanmelden'>
      <div className={styles.auth}>
        <h1>
          <FaUser /> Aanmelden
        </h1>
        <ToastContainer />
        <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="username">Gebruikersnaam</label>
            <input type="text" name="username" id='username' 
            value={username} 
            onChange={(e) => setUsername(e.target.value)}  />
          </div>
          <div>
            <label htmlFor="email">Email Address</label>
            <input type="email" name="email" id='email' value={email} 
            onChange={(e) => setEmail(e.target.value)}  />
          </div>
          <div>
            <label htmlFor="password">Wachtwoord</label>
            <input type="password" name="password" id='password' 
            onChange={(e) => setPassword(e.target.value)}  />
          </div>
          <div>
            <label htmlFor="passwordConfirm">Bevestigen Wachtwoord</label>
            <input type="password" name="passwordConfirm" id="passwordConfirm"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}  />
          </div>

          <input type="submit" value="Register" className='btn'/>
        </form>
        <p>Heb je een account?<Link href='/account/login'>Aanmelden</Link></p>
      </div>
    </Layout>
  )
}
