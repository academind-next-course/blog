import { notFound } from "next/navigation";

import { DUMMY_NEWS } from "@/dummy-news";

export default function ImagePage({ params }) {
  const newsSlug = params.slug;

  const newsArticle = DUMMY_NEWS.find(article => article.slug === newsSlug)
  if (!newsArticle) {
    notFound()
  }

  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newsArticle.image}`} />
    </div>
  )
}