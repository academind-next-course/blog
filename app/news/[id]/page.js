import styles from './page.module.css'

export default function NewsArticle({ params }) {
  const { id } = params;

  return (
    <div>
      <p>Detail of article with id <span className={styles.detail}>{id}</span></p>
    </div>
  )
}