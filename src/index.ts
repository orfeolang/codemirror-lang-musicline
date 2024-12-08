import { parser as musiclineParser } from './musicline.syntax.grammar'
// import { parser as orfeoParser } from './orfeo.syntax.grammar'
import { parser as orfeoErrorParser } from './orfeoError.syntax.grammar'

import { HighlightStyle, LRLanguage, LanguageSupport } from '@codemirror/language'
import { styleTags, Tag, tags } from '@lezer/highlight'

const customTagNames = [
  // Musicline
  'timepoint',
  'voice',
  'eventTypeMarker',
  'eventTypeNote',
  'eventTypeRest',
  'eventTypeRested',
  'eventTypeTail',
  'eventTypeTempo',
  'eventDataMarker',
  'eventDataNoteEscapeChar',
  'eventDataNote',
  'eventDataRestedEscapeChar',
  'eventDataRested',
  'eventDataTempo',

  // OrfeoError
  'errorHeader',
  'errorLineCursor',
  'errorIconEjectPoint',
  'errorIconSequenceStart',
  'errorUnhandledText',
]

const customTags = Object.fromEntries(
  customTagNames.map(tagName => [tagName, Tag.define()])
)

export const musiclineLanguage = LRLanguage.define({
  parser: musiclineParser.configure({
    props: [
      styleTags({
        LineComment:                       tags.lineComment,
        Timepoint:                         customTags.timepoint,
        Voice:                             customTags.voice,
        EventTypeMarker:                   customTags.eventTypeMarker,
        EventTypeNote:                     customTags.eventTypeNote,
        EventTypeRest:                     customTags.eventTypeRest,
        EventTypeRested:                   customTags.eventTypeRested,
        EventTypeTail:                     customTags.eventTypeTail,
        EventTypeTempo:                    customTags.eventTypeTempo,
        EventDataMarker:                   customTags.eventDataMarker,
        EventDataNoteEscapeChar:           customTags.eventDataNoteEscapeChar,
        EventDataNoteEscaped:              customTags.eventDataNote,
        EventDataNoteUnescapedFormatShort: customTags.eventDataNote,
        EventDataNoteUnescapedFormatLong:  customTags.eventDataNote,
        EventDataRestedEscapeChar:         customTags.eventDataRestedEscapeChar,
        EventDataRestedEscaped:            customTags.eventDataRested,
        EventDataRestedUnescaped:          customTags.eventDataRested,
        EventDataTempo:                    customTags.eventDataTempo,
      }),
    ],
  })
})

export function musicline() {
  return new LanguageSupport(musiclineLanguage)
}

/*
export const orfeoLanguage = LRLanguage.define({
  parser: orfeoParser.configure({
    props: [
      styleTags({
        AtomicComment:          t.comment,
        BlockComment:           t.blockComment,
        Duration:               t.number,
        Marker:                 t.labelName,
        Metronome:              t.literal,
        MusicExprOpen:          t.paren,
        MusicExprClose:         t.paren,
        MusicExprDuration:      t.attributeValue,
        Note:                   t.string,
        NoteBacktick:           t.string,
        NoteContainer:          t.string,
        RepeaterDash:           t.character,
        RepeaterDot:            t.character,
        Rest:                   t.null,
        RestifiedNote:          t.comment,
        RestifiedNoteBacktick:  t.comment,
        RestifiedNoteContainer: t.comment,
        RestifiedRepeaterDash:  t.comment,
        RestifierBackslash:     t.modifier,
        RhythmDot:              t.arithmeticOperator,
        RhythmFlag:             t.arithmeticOperator,
      }),
    ],
  })
})

export function orfeo() {
  return new LanguageSupport(orfeoLanguage)
}

*/

export const orfeoErrorLanguage = LRLanguage.define({
  parser: orfeoErrorParser.configure({
    props: [
      styleTags({
        ErrorHeader:            customTags.errorHeader,
        ErrorLineCursor:        customTags.errorLineCursor,
        ErrorIconEjectPoint:    customTags.errorIconEjectPoint,
        ErrorIconSequenceStart: customTags.errorIconSequenceStart,
        AnyChars:               customTags.errorUnhandledText,
        AnyCharsButIcons:       customTags.errorUnhandledText,
        AnyCharsAfterIcons:     customTags.errorUnhandledText,
      }),
    ],
  })
})

export function orfeoError() {
  return new LanguageSupport(orfeoErrorLanguage)
}

/* Highlighters */
/* Eventually, place into a theme folder. */

    /* rgb(209, 154, 102) = #d19a66 */
    /* rgb(152, 195, 121) = #98c379 */
    /* The editor should default to #ffffff for invalid unformatted text */
export const musiclineHighlightStyle = HighlightStyle.define([
  { tag: tags.lineComment,                     color: "#5c6370",                  fontStyle: "italic"            },
  { tag: customTags.timepoint,                 color: "#abb2bf",                                                 },
  { tag: customTags.voice,                     color: "#56b6c2",                                                 },
  { tag: customTags.eventTypeMarker,           color: "#c678dd",                  textDecoration: "underline"    },
  { tag: customTags.eventTypeNote,             color: "#98c379",                  textDecoration: "underline"    },
  { tag: customTags.eventTypeRest,             color: "#e5c07b",                  textDecoration: "underline"    },
  { tag: customTags.eventTypeRested,           color: "rgba(152, 195, 121, 0.4)", textDecoration: "underline"    },
  { tag: customTags.eventTypeTail,             color: "#e06c75",                  textDecoration: "underline"    },
  { tag: customTags.eventTypeTempo,            color: "#61afef",                  textDecoration: "underline"    },
  { tag: customTags.eventDataMarker,           color: "#c678dd",                                                 },
  { tag: customTags.eventDataNoteEscapeChar,   color: "#d19a66",                                                 },
  { tag: customTags.eventDataNote,             color: "#98c379",                                                 },
  { tag: customTags.eventDataRestedEscapeChar, color: "rgb(209, 154, 102, 0.4)",                                 },
  { tag: customTags.eventDataRested,           color: "rgba(152, 195, 121, 0.4)", textDecoration: "line-through" },
  { tag: customTags.eventDataTempo,            color: "#61afef",                                                 },
])

    /* The editor should default to #ffffff for invalid unformatted text */
export const orfeoErrorHighlightStyle = HighlightStyle.define([
  { tag: customTags.errorHeader,               color: "#e06c75",                                                 },
  { tag: customTags.errorLineCursor,           color: "#56b6c2",                                                 },
  { tag: customTags.errorIconEjectPoint,       color: "#e06c75",                                                 },
  { tag: customTags.errorIconSequenceStart,    color: "#e06c75",                                                 },
  { tag: customTags.errorUnhandledText,        color: "#abb2bf",                                                 },
])
