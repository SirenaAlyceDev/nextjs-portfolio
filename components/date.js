import { parseISO, format } from 'date-fns';
import superjson from 'superjson';

export default function Date({ dateString }) {
  const date = superjson.parse(dateString)
  // return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
  return <time>{format(date, 'LLLL d, yyyy')}</time>
}