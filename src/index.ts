import { parser } from './syntax.grammar'
import { LRLanguage, LanguageSupport } from '@codemirror/language'
import { styleTags, tags as t } from '@lezer/highlight'

export const musiclineLanguage = LRLanguage.define({
  parser: parser.configure({
    props: [
      styleTags({
        Timepoint:         t.number,
        Voice:             t.integer,
        EventMarkerId:     t.number,
        EventNoteId:       t.number,
        EventRestId:       t.number,
        EventRestedId:     t.number,
        EventTailId:       t.number,
        EventTempoId:      t.number,
        EventMarkerData:   t.number,
        EventTempoData:    t.number,
        Escape:            t.number,
        EscapedNoteData:   t.number,
        UnescapedNoteData: t.number,
        LineComment:       t.lineComment,
      }),
    ],
  })
})

export function musicline() {
  return new LanguageSupport(musiclineLanguage)
}
