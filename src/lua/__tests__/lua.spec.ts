import { parse, stringify, MemoryReader } from "../index"

describe("lua", () => {
  it("should parse and stringify", () => {
    const input = `
mission =
{
    ["flag"] =
    {
        [1] = true,
        [2] = false,
        [3] = "hello world",
        [4] = 42,
    }, -- end of ["flag"]
    ["blobs"] =
    {
        ["go"] = "far",
    }, -- end of ["blobs"]
} -- end of mission
`.trim()

    debugger

    const parsed = parse(new MemoryReader(input))
    const output = stringify(parsed)

    expect(output).toEqual(input)
  })
})
