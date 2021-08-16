import { parseISO, format } from 'date-fns';
import superjson from 'superjson';
import superJsonWithNext from 'babel-plugin-superjson-next';

export default function Date({ dateString }) {
  const date = superjson.parse(dateString)
  return <time dateTime={parseISO(dateString)}>{format(date, 'LLLL d, yyyy')}</time>
}