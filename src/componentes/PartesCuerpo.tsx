import styles from './PartesCuerpo.module.css'

export enum PartesCuerpo {
  CABEZA = 'CABEZA',
  TRONCO = 'TRONCO',
  BRAZO_DER = 'BRAZO_DER',
  BRAZO_IZQ = 'BRAZO_IZQ',
  PIERNA_DER = 'PIERNA_DER',
  PIERNA_IZQ = 'PIERNA_IZQ'
}

export const CUERPO = {
  [PartesCuerpo.CABEZA]: <div className={styles.cabeza} />,
  [PartesCuerpo.TRONCO]: <div className={styles.tronco} />,
  [PartesCuerpo.BRAZO_DER]: <div className={styles['brazo-der']} />,
  [PartesCuerpo.BRAZO_IZQ]: <div className={styles['brazo-izq']} />,
  [PartesCuerpo.PIERNA_DER]: <div className={styles['pierna-der']} />,
  [PartesCuerpo.PIERNA_IZQ]: <div className={styles['pierna-izq']} />
}
