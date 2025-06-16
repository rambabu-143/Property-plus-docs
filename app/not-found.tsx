import { redirect } from 'next/navigation'
 
export default function NotFound() {
  return (
    redirect('/prop-digi-docs/part1')
  )
}