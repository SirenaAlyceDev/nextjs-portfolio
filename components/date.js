import { parseISO, format } from 'date-fns'

export default function Date({ dateString }) {
  const date = parseISO(JSON.stringify(dateString))
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}