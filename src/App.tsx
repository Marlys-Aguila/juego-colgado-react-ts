import { useState, useCallback } from 'react'
import { ColgadoDibujo } from './componentes/ColgadoDibujo'
import { ColgadoPalabra } from './componentes/ColgadoPalabra'
import { Teclado } from './componentes/Teclado'
import { useKeyboardEvent } from './hooks/useKeyboardEvent.ts'
import palabras from './listaPalabras.json'
import styles from './App.module.css'

function getPalabra() {
  return palabras[Math.floor(Math.random() * palabras.length)]
}

function App() {
  const [palabraPorAdivinar, setPalabraPorAdivinar] = useState(getPalabra)

  const [letrasAcertadas, setLetrasAcertadas] = useState<string[]>([])

  const letrasIncorrectas = letrasAcertadas.filter(
    (letra) => !palabraPorAdivinar.includes(letra)
  )

  const perdedor = letrasIncorrectas.length >= 6

  const ganador = palabraPorAdivinar
    .split('')
    .every((letra) => letrasAcertadas.includes(letra))

  const agregarLetraAcertada = useCallback(
    (letra: string) => {
      if (letrasAcertadas.includes(letra) || perdedor || ganador) return
      setLetrasAcertadas((letrasActuales) => [...letrasActuales, letra])
    },
    [letrasAcertadas, perdedor, ganador]
  )

  useKeyboardEvent((event: KeyboardEvent) => {
    const key = event.key.toLowerCase()
    if (key.match(/^[a-z]$/)) {
      event.preventDefault()
      agregarLetraAcertada(key)
    } else if (key === 'enter') {
      event.preventDefault()
      setLetrasAcertadas([])
      setPalabraPorAdivinar(getPalabra())
    }
  })

  return (
    <main className={styles.app}>
      <section className={styles['texto-fin-partida']}>
        <div className={styles['container-texto']}>
          {perdedor
            ? '¡Buen intento! - Prueba otra vez 😉'
            : ganador
            ? '¡Ganaste! 🥳 - ¡Felicidades!'
            : '¡Comienza a jugar!'}
          {(perdedor || ganador) && (
            <div className={styles['texto-jugar-otra-vez']}>
              Presiona <kbd className={styles['texto-enter']}>Enter</kbd> para
              jugar de nuevo
            </div>
          )}
        </div>
      </section>

      <ColgadoDibujo numIntentos={letrasIncorrectas.length} />
      <ColgadoPalabra
        revelar={perdedor}
        letrasAcertadas={letrasAcertadas}
        palabraPorAdivinar={palabraPorAdivinar}
      />
      <div style={{ alignSelf: 'stretch' }}>
        <Teclado
          disabled={perdedor || ganador}
          letrasActivas={letrasAcertadas.filter((letra) =>
            palabraPorAdivinar.includes(letra)
          )}
          letrasInactivas={letrasIncorrectas}
          agregarLetraAcertada={agregarLetraAcertada}
        />
      </div>
    </main>
  )
}

export default App
