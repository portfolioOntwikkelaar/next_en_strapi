import styles from '@/styles/Blocks.module.css'
import { AiTwotonePhone } from "react-icons/ai"
import { MdHome } from "react-icons/md"

export default function Blocks() {
  return (
    <div>
      <div className={styles.conta}>
        <div className={styles.block2}>
          <AiTwotonePhone size={50} />
          <h1>CUSTOMER FOCUS</h1>
          <h3>BY ANTICIPATING MARKET TRENDS AND INVESTING TIME AND EFFORT TO FULLY UNDERSTAND CUSTOMER NEEDS, WE GO TO GREAT LENGTHS TO PROVIDE PRODUCTS AND SOLUTIONS OF SUPERIOR VALUE.</h3>
        </div>
        <div className={styles.block2}> <MdHome size={50} />
          <h1>CUSTOMER FOCUS</h1>
          <h3>BY ANTICIPATING MARKET TRENDS AND INVESTING TIME AND EFFORT TO FULLY UNDERSTAND CUSTOMER NEEDS, WE GO TO GREAT LENGTHS TO PROVIDE PRODUCTS AND SOLUTIONS OF SUPERIOR VALUE.</h3></div>
        <div className={styles.block2}> <AiTwotonePhone size={50} />
          <h1>CUSTOMER FOCUS</h1>
          <h3>BY ANTICIPATING MARKET TRENDS AND INVESTING TIME AND EFFORT TO FULLY UNDERSTAND CUSTOMER NEEDS, WE GO TO GREAT LENGTHS TO PROVIDE PRODUCTS AND SOLUTIONS OF SUPERIOR VALUE.</h3></div>
        <div className={styles.block2}> <AiTwotonePhone size={50} />
          <h1>CUSTOMER FOCUS</h1>
          <h3>BY ANTICIPATING MARKET TRENDS AND INVESTING TIME AND EFFORT TO FULLY UNDERSTAND CUSTOMER NEEDS, WE GO TO GREAT LENGTHS TO PROVIDE PRODUCTS AND SOLUTIONS OF SUPERIOR VALUE.</h3></div>
      </div>
    </div>
  )
}
