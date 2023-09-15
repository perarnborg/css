import styles from './hero-css-modules.module.css'

export default function HeroCssModules() {
  return (
    <header className={styles.hero}>
      <h1 className={styles.heroHeading}>Snygg rubrik!</h1>
      <p className={styles.heroPreamble}>
        Och så en liten uppföljande text med en{' '}
        <a className={styles.heroLink} href="">
          länk
        </a>{' '}
        i.
      </p>
    </header>
  )
}
