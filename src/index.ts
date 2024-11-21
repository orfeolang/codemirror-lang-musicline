import { parser } from "./syntax.grammar"
import { LRLanguage, LanguageSupport } from "@codemirror/language"
import { styleTags, tags as t } from "@lezer/highlight"

export const MusiclineLanguage = LRLanguage.define({
  parser: parser.configure({
    props: [
      styleTags({
        LineComment: t.lineComment
      })
    ]
  }),
  languageData: {
    commentTokens: {line: ";"}
  }
})

export function Musicline() {
  return new LanguageSupport(MusiclineLanguage)
}
