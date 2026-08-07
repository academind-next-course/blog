import NewsList from '@/components/NewsList';
import { getAllNews } from '@/lib/news-utils';

export default async function News() {
  const news = await getAllNews();
  return (
    <main>
      <h1>News</h1>
      <NewsList newsArray={news} />
    </main>
  );
}
