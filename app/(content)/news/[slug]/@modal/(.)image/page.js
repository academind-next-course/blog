'use client'

import { notFound, useRouter } from "next/navigation";

import { DUMMY_NEWS } from "@/dummy-news";

export default function ImagePage({ params }) {
  console.log('IMAGE MODAL PAGE');
  const router = useRouter()
  const newsSlug = params.slug;

  const newsArticle = DUMMY_NEWS.find(article => article.slug === newsSlug)
  if (!newsArticle) {
    notFound()
  }

  return (
    <>
      <div className="modal-backdrop" onClick={router.back} />
      <dialog open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsArticle.image}`} />
        </div>
      </dialog>
    </>
  );
}
