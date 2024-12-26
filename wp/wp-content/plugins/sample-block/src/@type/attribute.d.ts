export type Attribute<T extends string = string> = Partial<{
  [K in T]: {
    type: string
    source: string
    selector: string
    default: string
  }
}>

export type BlockAttributes = {
  question: string
  answer: string
}
