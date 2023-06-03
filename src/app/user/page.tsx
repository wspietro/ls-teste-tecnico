import Link from 'next/link'

export default function User() {
  return (
    <div>
      <h1>Pessoa usuária</h1>
      <Link href="/">home</Link>
      <Link href="/professional">Pessoa profissional</Link>
    </div>
  )
}
