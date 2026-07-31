import { DUMMY_NEWS } from "@/dummy-news";
import NewsList from "@/components/NewsList";

export default function News() {
  return (
    <main>
      <h1>News</h1>
      <NewsList newsArray={DUMMY_NEWS} /> 
    </main>
  )
}