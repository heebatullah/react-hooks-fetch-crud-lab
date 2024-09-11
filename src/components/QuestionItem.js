import React from "react";

function QuestionItem({ question, onUpdate, onDelete }) {
  const { id, prompt, answers, correctIndex } = question;

  // Render options for the dropdown
  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  // Delete handler function
  function handleDelete() {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "DELETE",
    }).then(() => onDelete(id));
  }

  // Change handler function for dropdown
  function handleChange(event) {
    const updatedIndex = parseInt(event.target.value, 10);

    // Update correctIndex in the backend
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ correctIndex: updatedIndex }), // Send correctIndex to backend
    })
      .then((response) => response.json())
      .then((updatedQuestion) => {
        // Call onUpdate with updated question
        onUpdate(updatedQuestion); // Update with the full updated question object
      });
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        {/* Bind the dropdown value to correctIndex */}
        <select value={correctIndex} onChange={handleChange}>
          {options}
        </select>
      </label>
      <button onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;



