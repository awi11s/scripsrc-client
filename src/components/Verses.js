import { useQuery } from "@apollo/client";
import { useState } from "react";

import { GET_VERSES } from "../utils/queries";
import { CONTENTBTN_STYLES } from "../constants/styles";
import Modal from "./Modal";

export const Verses = ({ book, chapter }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [verse, setVerse] = useState("");

  const { loading, error, data } = useQuery(GET_VERSES, {
    variables: { book, chapter },
  });

  if (loading) return <p>loading...</p>;
  if (error) {
    return (
      <>
        <h2>error:</h2>
        <p>database is inaccessable right now</p>
        <p>check internet connection or go to about page to report an issue</p>
      </>
    );
  }

  function onModal(v) {
    setVerse(v);
    setModalOpen(true);
  }

  return (
    <>
      <h2>
        verses for {book} chapter {chapter}:
      </h2>
      {data.getVerses[0] ? (
        data.getVerses[0].verses.map((a, idx) => (
            <button
              style={CONTENTBTN_STYLES}
              onClick={() => onModal(a.verse)}
              key={idx}
            >
              {a.text}
            </button>
        ))
      ) : (
        <p>verses are not available for this yet</p>
      )}
      <Modal
        open={modalOpen}
        book={book}
        // once assured that chapter field is a number, then it can be packaged as a string for the server request
        chapter={chapter}
        verse={verse}
        onClose={() => setModalOpen(false)}
      ></Modal>
    </>
  );
};
