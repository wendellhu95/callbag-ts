import { CallBag, CALLBAG_SIGNAL } from '../typings'

export const of = (data: any[]): CallBag => (
  signal: CALLBAG_SIGNAL,
  next: CallBag
) => {
  if (signal !== CALLBAG_SIGNAL.HANDSHAKE) return

  // Perform handshake.
  next(0)

  // Emit all data to next.
  data.forEach(d => next(CALLBAG_SIGNAL.DATA, d))
}
