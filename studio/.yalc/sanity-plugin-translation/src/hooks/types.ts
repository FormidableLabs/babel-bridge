export type Value = any

export interface Return<V = Value> {
  loading: boolean
  error: boolean | unknown | ProgressEvent
  data: null | V
  initialValue?: Value
}
