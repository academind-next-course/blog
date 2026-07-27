import Link from 'next/link';

export default function NewsList({ newsArray }) {
  return (
    <ul className="news-list">
      {newsArray.map((element) => (
        <li key={`news-${element.id}`}>
          <Link href={`/news/${element.slug}`}>
            <img src={`/images/news/${element.image}`} alt={element.title} />
            <span>{element.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
