import { CallBag, CallBagSource, CALLBAG_SIGNAL } from '../typings'

export const map = (f: (v: any) => any): CallBagSource => (
  source: CallBag
): CallBag => (singal: CALLBAG_SIGNAL, next: CallBag) => {
  if (singal !== CALLBAG_SIGNAL.HANDSHAKE) return

  source(0, (s: CALLBAG_SIGNAL, d: any) => {
    next(s, s === CALLBAG_SIGNAL.DATA ? f(d) : d)
  })
}
