import React from "react";
import Title from "../shared/Title";
import QnA from "../shared/QnA";
import { qna } from "../../api/data";
const AskQuestion = () => {
  return (
    <div className="bg-white w-full mt-14">
      <div>
        <Title head="Have a Question ?" />
      </div>
      <div className="my-12">
        {qna?.map((item, i) => (
          <QnA key={i} question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  );
};

export default AskQuestion;
