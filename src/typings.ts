export enum CALLBAG_SIGNAL {
  HANDSHAKE,
  DATA,
  TERMINATE
}

export type CallBag<T = any> = (signal: CALLBAG_SIGNAL, payload?: T) => void
export type CallBagSource = (source: CallBag) => CallBag

export type TERMINATE_FUNC = (singal: CALLBAG_SIGNAL.TERMINATE) => void

export type Sink = (source: CallBag) => DisposeHandle
export type DisposeHandle = () => void
