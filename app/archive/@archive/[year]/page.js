import NewsList from "@/components/NewsList";
import { getNewsForYear } from "@/lib/news-utils";

export default function NewsByYear({ params }) {
  const yearParam = params.year;

  const newsByYear = getNewsForYear(yearParam);
  return (
    <NewsList newsArray={newsByYear} />
  )
}
