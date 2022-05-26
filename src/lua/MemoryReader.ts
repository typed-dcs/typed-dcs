import { Reader, Character, EOF } from "../types"

export class MemoryReader implements Reader {
  private input: string

  private position: number = 0

  constructor(input: string) {
    this.input = input
  }

  peek(index: number = 0): Character {
    if (this.position >= this.input.length - 1) {
      return EOF
    }
    return this.input.charAt(this.position + index)
  }

  consume(index: number = 0): Character {
    if (this.position >= this.input.length - 1) {
      return EOF
    }
    const consumed = this.input.charAt(this.position + index)
    this.position = this.position + index + 1
    return consumed
  }
}
