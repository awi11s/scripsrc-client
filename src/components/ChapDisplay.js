import { useState } from "react";

import { Verses } from "./Verses";
import { 
    FORM_STYLE, 
    BOOK_BUTTONS, 
    CHAPTER_BUTTONS } from "../constants/styles";
import { chapters } from "../constants/bookChapters";

const ChapDisplay = () => {
  const [book, setBook] = useState("");
  const [chapter, setChapter] = useState("");
  const [chapterList, setChapterList] = useState([]);
  const [showChapters, setShowChapters] = useState(false);
  const [showVerses, setShowVerses] = useState(false);

  function onBook(e) {
    setShowChapters(false);
    setShowVerses(false);
    setChapterList([]);

    // gets number of chapter for book, makes an array from number for chapter buttons
    let b = e.target.innerHTML;
    let c = chapters[b];

    setBook(b);
    setChapter(c);

    let intChapter = parseInt(c);
    setChapterList(Array.from({ length: intChapter }, (v, i) => i + 1));

    setShowChapters(true);
  }

  function onChapter(num) {
    // calls api for bible verses
    setChapter(num.toString());
    setShowVerses(true);
  }

  return (
    <>
      <div style={FORM_STYLE}>
        <button style={BOOK_BUTTONS} onClick={onBook}>
          matthew
        </button>
        <button style={BOOK_BUTTONS} onClick={onBook}>
          mark
        </button>
        <button style={BOOK_BUTTONS} onClick={onBook}>
          luke
        </button>
        <button style={BOOK_BUTTONS} onClick={onBook}>
          john
        </button>
      </div>

      {showChapters ? (
        chapterList.map((item, idx) => (
          <button
            key={idx}
            style={CHAPTER_BUTTONS}
            onClick={() => onChapter(item)}
          >
            {item}
          </button>
        ))
      ) : (
        <p>select on a book and chapter to begin</p>
      )}

      {showVerses ? <Verses book={book} chapter={chapter} /> : null}
    </>
  );
};

export default ChapDisplay;
