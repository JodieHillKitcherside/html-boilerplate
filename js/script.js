const API_KEY = "CWFqB_UKizXresYdRPsXuDNUV4Y";
const API_URL = "https://ci-jshint.herokuapp.com/api";
const resultModal = new bootsrap.Modal(document.getElementsById("resultsModal"));

document.getElementById('status').addEventListener("click", e => getStatus(e));

async function getStatus(e) {
    const queryString = `${API_URL}?api_key=${API_KEY}`;

    const response = await fetch(queryString);

    const data = await response.json();

    if (response.ok) {
        console.log(data);
    }
}