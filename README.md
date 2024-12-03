# Lang Support CodeMirror

Orfeo and Musicline language support for CodeMirror.

## About

These are lezer grammars for Orfeo and Musicline. They are used
by CodeMirror to highlight code.

## Installation

```sh
npm install
npm run prepare
npm test
```

## Style Tags

### Musicline

Element           | Tag
----------------- | ----------
Timepoint         | number
Voice             | integer
EventMarkerId     | heading1
EventNoteId       | heading2
EventRestId       | heading3
EventRestedId     | heading4
EventTailId       | heading5
EventTempoId      | heading6
EventMarkerData   | string
EventTempoData    | literal
Escape            | escape
EscapedNoteData   | list
UnescapedNoteData | list
LineComment       | lineComment

## License

MIT\
Copyright 2024 Pierre-Emmanuel Lévesque
