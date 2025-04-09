const poll = {
    question: "What is your favourite programming language?",
    options: ["JavaScript", "Python", "Rust", "C++"],
    answers: new Array(4).fill(0),
  
    registerNewAnswer() {
      const input = prompt(
        `${this.question}\n${this.options.map((opt, i) => `${i}: ${opt}`).join('\n')}\n(Write option number)`
      );
  
      const answer = Number(input);
      if (!isNaN(answer) && answer >= 0 && answer < this.answers.length) {
        this.answers[answer]++;
      } else {
        alert("Invalid input! Please enter a number between 0 and 3.");
      }
  
      this.displayResults("string");
      this.displayResults("array");
    },
  
    displayResults(type = "array") {
      if (type === "array") {
        console.log(this.answers);
      } else if (type === "string") {
        console.log(`Poll results are ${this.answers.join(", ")}`);
      }
    },
  };
  
  document.querySelector("#pollButton").addEventListener("click", poll.registerNewAnswer.bind(poll));
  
  // Bonus test data
  poll.displayResults.call({ answers: [5, 2, 3] }, "array");
  poll.displayResults.call({ answers: [5, 2, 3] }, "string");
  poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, "array");
  poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, "string");
  