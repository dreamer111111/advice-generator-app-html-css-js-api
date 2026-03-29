const diceButton = document.getElementById("dice-button");

const displayOutput = (id, advice) => {
  console.log(id, advice);
  const idOutput = document.getElementById("id-output");
  const adviceOutput = document.getElementById("advice");

  idOutput.textContent = id;
  adviceOutput.textContent = advice;
};

const fetchData = async () => {
  const url = "https://api.adviceslip.com/advice?t=" + new Date().getTime();
  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data) {
      displayOutput(data.slip.id, data.slip.advice);
    }
  } catch (error) {
    console.log(error);
  }
};

const generateAdvice = () => {
  fetchData();
};
generateAdvice();

diceButton.addEventListener("click", generateAdvice);
