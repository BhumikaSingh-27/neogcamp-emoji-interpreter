import "./styles.css";
import { useState } from "react";

const emojiDictionary = {
  "😊": "similing",
  "😁 ": "gratified happiness",
  "😒": "irritation",
  "😴": "sleeping ",
  "😍": "adorable",
  "😘": "kissing",
  "👍": "approval ",
  "🫤": "frustation",
  "😑": "annoyance",
  "🥱": "mid-yawn",
  "🤣": "hysterical laughter",
  "🥰": "affectionate",
  "🤗": "hug",
  "😶‍🌫️": "confusion",
  "🫡": "saluting",
  "❤️": "love",
  "🤤": "delicious",
  "🥲": "gratitude",
  "😎": "cool",
  "🤮": "vomiting",
  "🤓": "nerd",
  "😲": "shock"
};

const freuentlyUsedEmojiDict = {
  "😍": "adorable",
  "😊": "similing",
  "😒": "irritation",
  "😴": "sleeping ",
  "🤓": "nerd",
  "❤️": "love",
  "🤤": "delicious",
  "😑": "annoyance",
  "🥱": "mid-yawn",
  "🤣": "hysterical laughter",
  "😲": "shock",
  "😎": "cool"
};

var frequestEmoji = Object.keys(freuentlyUsedEmojiDict);

export default function App() {
  var [meaning, setEmojiMeaning] = useState("");

  function emojiHandler(event) {
    var emojiInput = event.target.value;
    var meaning = emojiDictionary[emojiInput];
    if (meaning === undefined) {
      meaning = "failure to recognize emoji!";
    }
    setEmojiMeaning(meaning);
  }

  function clickEmojiHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setEmojiMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji Interpreter - Express your emotions right!</h1>
      <input
        onChange={emojiHandler}
        placeholder="Enter emoji to know the meaning"
      />
      <div style={{ fontSize: "2rem", padding: "1rem" }}>{meaning}</div>

      <h3 style={{ marinTop: "0px" }}> Frequently used..</h3>

      {frequestEmoji.map(function (emoji) {
        return (
          <span
            key={emoji}
            onClick={() => clickEmojiHandler(emoji)}
            style={{ cursor: "pointer", fontSize: "2rem" }}
          >
            {" "}
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
