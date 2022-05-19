import React from "react";
import { RootState } from "../State/store";
import { useSelector } from "react-redux";
import AbortBtn from "../Components/AbortBtn";

function TimerText() {
  const { sec, min } = useSelector((state: RootState) => state.timerReducer);

  let m = convertNumberToName(min);
  let s = convertNumberToName(sec);
  console.log(m, s);

  function convertNumberToName(num: any) {
    let lowNames = [
      "noll",
      "en",
      "två",
      "tre",
      "fyra",
      "fem",
      "sex",
      "sju",
      "åtta",
      "nio",
      "tio",
      "elva",
      "tolv",
      "tretton",
      "fjorton",
      "femton",
      "sexton",
      "sjutton",
      "arton",
      "nitton",
    ];
    let teenNames = ["tjugo", "trettio", "fyrtio", "femtio", "sextio"];

    let ones, tens, result;
    if (num < lowNames.length) {
      result = lowNames[num];
    } else {
      tens = Math.floor(num / 10);
      ones = num % 10;

      if (tens <= 9) {
        result = teenNames[tens - 2];
        console.log(result);

        if (ones > 0) {
          result += "" + lowNames[ones];
          // } else if (ones > 19) {
          // result = "" + lowNames
        } else {
          result = teenNames[tens - 2];
        }
      }
    }
    return result;
  }
  return (
    <section className="page-container">
      <div className="central">
        <p className="large-text">
          {m} minuter och {s} sekunder kvar{" "}
        </p>
      </div>
      <AbortBtn />
    </section>
  );
}

export default TimerText;
