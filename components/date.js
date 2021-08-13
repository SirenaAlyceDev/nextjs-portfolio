import { parseISO, format } from 'date-fns'

export default function Date({ dateString }) {
  const date = JSON.parse(JSON.stringify(dateString))
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}