import { parseISO, format } from 'date-fns';
import moment from 'moment';
import superjson from 'superjson';

export default function Date({ dateString }) {
  const date = superjson.parse(dateString)
  // return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
  return <time dateTime={dateString}>{moment(date).format('LL')}</time>

}