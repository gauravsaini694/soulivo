document.addEventListener("DOMContentLoaded", function () {
  const takeQuizBtn = document.getElementById("take-quiz-btn");
  const rightColumn = document.querySelector(".right-column");
  const progressContainer = document.getElementById("progress-container");
  const progressBar = document.getElementById("progress-bar");
  const submitBtn = document.getElementById("submit-quiz-btn");
  const resultBox = document.getElementById("result-box");
  const teaser = document.querySelector(".quiz-teaser");

  let clarityScore = 0;
  let confidenceScore = 0;

  takeQuizBtn.addEventListener("click", function () {
    const isVisible = !rightColumn.classList.contains("hidden");

    if (isVisible) {
      rightColumn.classList.add("hidden");
      progressContainer.classList.add("hidden");
      takeQuizBtn.innerText = "Take the Quiz";
      resultBox.style.display = "none";
      teaser.classList.remove("hidden");
      clarityScore = 0;
      confidenceScore = 0;
      progressBar.style.width = "0%";
      document.getElementById("form").reset();
    } else {
      rightColumn.classList.remove("hidden");
      progressContainer.classList.remove("hidden");
      takeQuizBtn.innerText = "Abandon Quiz";
      teaser.classList.add("hidden");
    }
  });


});
