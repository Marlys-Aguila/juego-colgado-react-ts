import React from 'react'
import styles from './ColgadoDibujo.module.css'
import { CUERPO, PartesCuerpo } from './PartesCuerpo'

type ColgadoDibujoProps = {
  numIntentos: number
}

export function ColgadoDibujo({ numIntentos }: ColgadoDibujoProps) {
  return (
    <main className={styles.main}>
      {Object.values(PartesCuerpo)
        .slice(0, numIntentos)
        .map((parte) => React.cloneElement(CUERPO[parte], { key: parte }))}
      <div className={styles.base} />
      <div className={styles['palo-vertical']} />
      <div className={styles['palo-horizontal']} />
      <div className={styles.cuerda} />
    </main>
  )
}
