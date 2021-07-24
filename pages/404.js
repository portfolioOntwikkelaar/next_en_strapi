import { GiHandBandage } from 'react-icons/gi'
import Link from 'next/link'
import Layout from "@/components/Layout"
import styles from "@/styles/404.module.css"

export default function NotFoundPage() {
  return (
    <Layout title='Page Not Find'>
      <div className={styles.error}>
        <h1>
          <GiHandBandage />
          404</h1>
        <h4>There is nothing here</h4>
        <Link href='/'>Back</Link>
      </div>
    </Layout>
  )
}
