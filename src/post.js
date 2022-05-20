export const gameUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/3gcy4cV3MLPDzsoeb5wt/scores/';
const postScore = async (e) => {
  e.preventDefault();
  const user = document.getElementById('name').value;
  const score = document.getElementById('score').value;
  const result = await fetch(`${gameUrl}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user, score }),
  });
  const data = await result.json();
  const yourName = document.querySelector('.your-name');
  const yourScore = document.querySelector('.your-score');
  yourName.value = '';
  yourScore.value = '';
  return data;
};

export default postScore;