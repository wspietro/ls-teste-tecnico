import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>Lacrei teste tecnico</h1>
      <Link href="/user">Pessoa Usuária</Link>
      <Link href="/professional">Pessoa profissional</Link>
    </div>
  )
}
