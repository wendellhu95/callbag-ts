import { CallBag, CallBagSource } from './typings'

export function pipe(source: CallBag, ...operators: CallBagSource[]): CallBag {
  let res = source

  for (let i = 0, n = operators.length; i < n; i++) {
    res = operators[i](res)
  }

  return res
}
