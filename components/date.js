import moment from 'moment';
import superjson from 'superjson';

export default function Date({ dateString }) {
  const date = superjson.parse(dateString)
  return <time dateTime={dateString}>{moment(date).format('LL')}</time>

}