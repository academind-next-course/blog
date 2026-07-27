import { getAvailableNewsYears } from "@/lib/news-utils"
import Link from "next/link"

export default function ArchivePage() {
  const newsYears = getAvailableNewsYears()
  
  return (
    <header id="archive-header">
      <nav>
        <ul>
          {newsYears.map((newsYear) => (
            <li key={`year-${newsYear}`}>
              <Link href={`/archive/${newsYear}`}>{newsYear}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
