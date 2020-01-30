import { CALLBAG_SIGNAL, CallBag, TERMINATE_FUNC } from '../typings'

export function interval(period: number): CallBag {
  /**
   * Interval callbag.
   *
   * It only responds to HANDSHAKE.
   */
  return function(signal: CALLBAG_SIGNAL, sink: CallBag): void {
    if (signal !== CALLBAG_SIGNAL.HANDSHAKE) return

    let i = 0

    const id = setInterval(() => {
      sink(i, i++)
    }, period)

    sink(0, ((t: CALLBAG_SIGNAL) => {
      if (t === 2) clearInterval(id)
    }) as TERMINATE_FUNC)
  }
}
