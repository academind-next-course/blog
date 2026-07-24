import Link from "next/link";

import { DUMMY_NEWS } from "@/dummy-news";

export default function News() {
  return (
    <main>
      <h1>News</h1>
      <ul className="news-list">
        {DUMMY_NEWS.map((element) => (
          <li key={`news-${element.id}`}>
            <Link href={`/news/${element.slug}`}>
            <img src={`/images/news/${element.image}`} alt={element.title} />
            <span>{element.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}