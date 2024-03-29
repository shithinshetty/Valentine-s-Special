import React, { useState } from "react";
import Footer from "./Footer";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState("");
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "Really sure?",
      "Think again!",
      "Last chance!Shimmii 🙄",
      "Surely not?",
      "You might regret this!",
      "Give it another thought!",
      "Are you absolutely certain?",
      "This could be a mistake!",
      "Have a heart!",
      "Don't be so cold!",
      "Change of heart?",
      "Wouldn't you reconsider?",
      "Is that your final answer?",
      "You're breaking my heart ;(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen -mt-16">
      {yesPressed ? (
        <>
          <img
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHlscDV5d3IwY3JsZnJpNHVhdXZraDRvdDl3eDFqa2t2cXhobHB4NyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Ni9D508ZYzjVgNviSV/giphy.gif"
            alt="Melodi"
          />

          <div className="text-4xl font-bold my-4">
            Yaaaaaayyyyyyyy💕💕💕 Shimmi !!!
          </div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://media.giphy.com/media/3ohc1aYZpcsL8PWhaM/giphy.gif?cid=790b76110pzwjy00mbc6ghf9rz3noryrv3mltm0i5xqynvi1&ep=v1_gifs_search&rid=giphy.gif&ct=g"
            alt="arvind-kejrival"
          />
          <h1 className="text-4xl my-4">Will you be my Valentine?</h1>
          <div>
            <button
              className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
      <Footer />
    </div>
  );
}
