import styles from './Teclado.module.css'

const LETRAS = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
]

type TecladoProps = {
  letrasActivas: string[]
  letrasInactivas: string[]
  agregarLetraAcertada: (letra: string) => void
  disabled?: boolean
}

export function Teclado({
  letrasActivas,
  letrasInactivas,
  agregarLetraAcertada,
  disabled = false
}: TecladoProps) {
  return (
    <div className={styles.container}>
      {LETRAS.map((letra) => {
        const estaActiva = letrasActivas.includes(letra)
        const estaInactiva = letrasInactivas.includes(letra)

        return (
          <button
            onClick={() => agregarLetraAcertada(letra)}
            className={`${styles.btn} ${estaActiva ? styles.active : ''} ${
              estaInactiva ? styles.inactive : ''
            }`}
            disabled={estaActiva || estaInactiva || disabled}
            key={letra}
          >
            {letra}
          </button>
        )
      })}
    </div>
  )
}
