import {
  musiclineLanguage,
  orfeoLanguage,
  orfeoErrorLanguage,
} from "../dist/index.js"

import { fileTests } from "@lezer/generator/dist/test"

import * as fs from "fs"
import * as path from "path"
import { fileURLToPath } from 'url'
let caseDir = path.dirname(fileURLToPath(import.meta.url))

const langNameToParser = {
  'musicline': musiclineLanguage.parser,
  'orfeo': orfeoLanguage.parser,
  'orfeoError': orfeoErrorLanguage.parser,
}

for (let file of fs.readdirSync(caseDir)) {
  if (!/\.txt$/.test(file)) continue

  let langName = /^[^\.]*/.exec(file)[0]

  describe(langName, () => {
    for (let {name, run} of fileTests(
      fs.readFileSync(path.join(caseDir, file), "utf8"), file)
    ) {
      it(name, () => {
           run(langNameToParser[langName])
      })
    }
  })
}
