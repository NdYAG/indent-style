import fs from 'fs'
import path from 'path'
import process from 'process'
import git from 'git-utils'
import detectIndent from 'detect-indent'


function walk(dir, callback) {
  if (!fs.existsSync(dir)) {
    return []
  }

  let repo = git.open(dir)

  return fs.readdirSync(dir).filter((f) => {
    return repo? !repo.isIgnored(path.join(dir, f)): true
  }).map((f) => {
    let p = path.join(dir, f),
        stat = fs.statSync(p)
    if (stat.isDirectory()) {
      walk(p, callback)
    } else {
      callback(p)
    }
  })
}

export default function main() {
  let groupByExt = {}
  walk(process.cwd(), (filepath) => {
    let extname = path.extname(filepath).slice(1)
    if (extname.length) {
      groupByExt[extname] = groupByExt[extname] || {}
      let extGroup = groupByExt[extname]

      let fileContent = fs.readFileSync(filepath, 'utf8')
      let indent = detectIndent(fileContent)

      if (!indent.type) {
        return
      }

      extGroup[indent.type] = extGroup[indent.type] || {}
      let typeGroup = extGroup[indent.type]

      if (!typeGroup[indent.amount]) {
        typeGroup[indent.amount] = 0
      }
      typeGroup[indent.amount]++
    }
  })
  console.log(groupByExt)
}
