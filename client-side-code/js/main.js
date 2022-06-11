document.querySelector('button').addEventListener('click', apiRequest);

async function apiRequest() {
  const pref = document.querySelector('input').value;
  console.log(pref);
  try {
    const response = await fetch(
      `https://japan-info-api.herokuapp.com/api/prefecture/${pref}`
    );
    const data = await response.json();

    console.log(data);
    document.querySelector('h3').innerText = `${data.engName} (${data.jName})`;
  } catch (error) {
    console.log(error);
  }
}
