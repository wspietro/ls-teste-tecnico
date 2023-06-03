import Link from 'next/link'

export default function Professional() {
  return (
    <div>
      <h1>Pessoa profissional</h1>
      <Link href="/">home</Link>
      <Link href="/user">Pessoa Usuária</Link>
    </div>
  )
}
