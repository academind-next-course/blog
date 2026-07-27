import NewsList from '@/components/NewsList';
import { getLatestNews } from '@/lib/news-utils';

export default function ArchiveLatest() {
  const latestNews = getLatestNews();
  return (
    <>
      <h1>Latest News </h1>
      <NewsList newsArray={latestNews} />
    </>
  );
}
