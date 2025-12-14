import { writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { DirnameTranslateMap } from './dirname-translate.ts'
import { sidebarCache } from './sidebar-cache.ts'
import { getDirs, getMDFiles, stringifyWithTrailingCommas } from './utils.ts'

const __dirname = import.meta.dirname

export const excludeDir = ['.vitepress', 'public']
const sidebar: Record<string, any> = {}

const sidebarJson: Record<string, any> = {}
getDirs('./docs').forEach(d => {
  sidebar[`/${d.name}`] = getDirs(`./docs/${d.name}`).map(subDir => {
    const subDirPath = `./docs/${d.name}/${subDir.name}` as keyof typeof sidebarCache
    let globalIdx = sidebarCache[subDirPath]?.filter(Boolean).length || 0

    const files = getMDFiles(subDirPath)
      .map(md => {
        const name = md.name.replace('.md$', '')
        const link = `/${d.name}/${subDir.name}/${name}`
        const idx = sidebarCache[subDirPath]?.indexOf(name) ?? globalIdx++

        return {
          idx,
          name,
          link,
        }
      })
      .sort((a, b) => a.idx - b.idx)

    sidebarJson[subDirPath] = files.map(file => file.name)

    return {
      text: DirnameTranslateMap[subDir.name as keyof typeof DirnameTranslateMap] || subDir.name,
      collapsed: true,
      items: files.map((file, idx) => {
        return {
          text: `${idx + 1}. ${file.name}`,
          link: file.link,
        }
      }),
    }
  })
})

writeFileSync(
  resolve(__dirname, 'sidebar-cache.ts'),
  `export const sidebarCache = ${stringifyWithTrailingCommas(sidebarJson, 2)};`
)

export { sidebar }
