import Link from 'next/link';

import NewsList from '@/components/NewsList';
import {
  getAvailableNewsMonths,
  getNewsForYear,
  getNewsForYearAndMonth,
} from '@/lib/news-utils';
import { getAvailableNewsYears } from '@/lib/news-utils';

export default function NewsByYear({ params }) {
  const filter = params.filter;
  const filterYear = filter?.[0];
  const filterMonth = filter?.[1];

  let newsArray;
  let periodLinks = getAvailableNewsYears();
  if (filterYear) {
    if (!filterMonth) {
      newsArray = getNewsForYear(filterYear);
      periodLinks = getAvailableNewsMonths(filterYear);
    } else {
      newsArray = getNewsForYearAndMonth(filterYear, filterMonth);
      periodLinks = [];
    }
  }

  let newsContent = filterYear ? <p>No news available for the selected period</p> : null;
  if (newsArray?.length > 0) {
    newsContent = <NewsList newsArray={newsArray} />;
  }

  // Screen for invalid filters
  if (
    (filterYear && !getAvailableNewsYears().includes(+filterYear)) ||
    (filterMonth && !getAvailableNewsMonths(filterYear).includes(+filterMonth))
  ) {
    throw new Error('Invalid filter');
  }

  return (
    <>
      <header id="archive-header">
        <RenderPeriodLinks periodLinks={periodLinks} filterYear={filterYear} />
      </header>
      {newsContent}
    </>
  );
}

function RenderPeriodLinks({periodLinks = [], filterYear}) {
  return (
    <nav>
      <ul>
        {periodLinks?.map((periodLink) => {
          const path = filterYear
            ? `/archive/${filterYear}/${periodLink}`
            : `/archive/${periodLink}`;
          return (
            <li key={`period-${periodLink}`}>
              <Link href={path}>{periodLink}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
