import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1>landing pg</h1>
      <Link href={'/sign-in'}>SIGN IN</Link>
    </>
  )
}
