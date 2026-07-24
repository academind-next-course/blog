import { notFound } from 'next/navigation';

import { DUMMY_NEWS } from '@/dummy-news';

export default function NewsArticle({ params }) {
  const { slug } = params;

  const article = DUMMY_NEWS.find((news) => news.slug === slug)

  if (!article) {
    notFound()
  }
  return (
    <article className='news-article'>
      <header>
        <img src={`/images/news/${article.image}`} />
        <h1>{article.title}</h1>
        <time dateTime={article.date}>{article.date}</time>
      </header>
      <p>{article.content}</p>
    </article>
  )
}