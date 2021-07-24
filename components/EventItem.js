import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/EventItem.module.css'

export default function EventItem({evt}) {
  return (
    <div className={styles.event}>
      <div className={styles.image}>
        <Image src={evt.image ? evt.image : '/images/event-default.png'} width={170} height={100} />
      </div>
      <div className={styles.info}>
        <span>
          {evt.subname}
        </span>
        <h3>{evt.name}</h3>
      </div>
      
    </div>
  )
}


{/* <div class="padding-y-lg container max-width-adaptive-lg">
  <div class="grid gap-md">
    <article class="card radius-lg col-6@sm col-4@md">
      <a href="#0" class="block color-inherit text-decoration-none">
        <figure class="media-wrapper">
          <img class="block width-100%" src="https://images.unsplash.com/photo-1531591022136-eb8b0da1e6d0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" alt="Image description">
        </figure>

        <div class="text-component padding-md">
          <h1 class="text-lg"><span class="card__title">Title of the card</span></h1>
          <p class="color-contrast-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div> */}