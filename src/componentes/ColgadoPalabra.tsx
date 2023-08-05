import styles from './ColgadoPalabra.module.css'

type ColgadoPalabraProps = {
  letrasAcertadas: string[]
  palabraPorAdivinar: string
  revelar?: boolean
}

export function ColgadoPalabra({
  letrasAcertadas,
  palabraPorAdivinar,
  revelar = false
}: ColgadoPalabraProps) {
  return (
    <main className={styles.container}>
      {palabraPorAdivinar.split('').map((letra, index) => (
        <span className={styles['border-bottom-palabra']} key={index}>
          <span
            style={{
              visibility:
                letrasAcertadas.includes(letra) || revelar
                  ? 'visible'
                  : 'hidden',
              color:
                !letrasAcertadas.includes(letra) && revelar ? 'red' : 'black'
            }}
          >
            {letra}
          </span>
        </span>
      ))}
    </main>
  )
}
