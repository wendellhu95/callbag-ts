import { CALLBAG_SIGNAL, CallBag, Sink, DisposeHandle } from '../typings'

export const forEach = (operation: (a: any) => void): Sink => (
  source: CallBag
): DisposeHandle => {
  let talkback: CallBag

  // Should perform handshake to start a callbag chain.
  source(0, (signal: CALLBAG_SIGNAL, payload: any) => {
    if (signal === CALLBAG_SIGNAL.HANDSHAKE) talkback = payload
    if (signal === CALLBAG_SIGNAL.DATA) operation(payload)
    if (signal === CALLBAG_SIGNAL.HANDSHAKE || signal === CALLBAG_SIGNAL.DATA) {
      talkback(1) // Request data.
    }
  })

  return () => source(2)
}
