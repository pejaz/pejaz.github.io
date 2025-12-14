import { readdirSync } from 'fs'
import { Dirent } from 'fs'
import { excludeDir } from './sidebar'

export const getDirs = (path: string): Dirent[] => {
  return readdirSync(path, { withFileTypes: true }).filter(
    (d: Dirent) => d.isDirectory() && !excludeDir.includes(d.name)
  )
}

export const getMDFiles = (path: string): Dirent[] => {
  return readdirSync(path, { withFileTypes: true }).filter(
    f => f.isFile() && f.name.endsWith('.md')
  )
}
// 自定义序列化函数，为数组元素添加尾随逗号
interface StringifyOptions {
  [key: string]: string[]
}

interface StringifyResult {
  (obj: StringifyOptions, indent?: number): string
}

export const stringifyWithTrailingCommas: StringifyResult = (obj, indent = 2) => {
  const entries = Object.entries(obj)

  const content = entries
    .map(([key, value]: [string, string[]]) => {
      const items = Array.isArray(value)
        ? value.map((item: string) => `${' '.repeat(indent + 2)}"${item}",`).join('\n')
        : JSON.stringify(value, null, indent)

      return `${' '.repeat(indent)}"${key}": [\n${items}\n${' '.repeat(indent)}]`
    })
    .join(',\n')

  return `{\n${content}\n}`
}
