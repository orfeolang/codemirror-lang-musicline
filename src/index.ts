import { parser } from './syntax.grammar'
import { LRLanguage, LanguageSupport } from '@codemirror/language'
import { styleTags, tags as t } from '@lezer/highlight'

export const MusiclineLanguage = LRLanguage.define({
  parser: parser.configure({
    props: [
      styleTags({
        LineComment: t.lineComment,
        Timepoint: t.number,
        Voice: t.integer,
        EventType: t.typeName,
        EventData: t.string,
        NoteData: t.string,
      }),
    ],
  })
})

export function Musicline() {
  return new LanguageSupport(MusiclineLanguage)
}
