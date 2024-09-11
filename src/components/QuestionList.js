import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, onUpdateQuestion, onDeleteQuestion }) {
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map(question => (
          <QuestionItem
            key={question.id}
            question={question}
            onUpdate={onUpdateQuestion}
            onDelete={onDeleteQuestion}
          />
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;

