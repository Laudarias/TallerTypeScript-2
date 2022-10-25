import { series } from "./data.js";
const seriesTbody = document.getElementById('series');
const avarageSeasons = document.getElementById('avarage-seasons');
const serieInfoCard = document.getElementById('serie-info');
renderSeriesInTable(series);
avarageSeasons.innerHTML = `${getAvarageSeasons(series)}`;
function renderSeriesInTable(series) {
    series.forEach((s) => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<th>${s.id}</th>
                                <td>${s.name}</td>
                                <td>${s.channel}</td>
                                <td>${s.seasons}</td>`;
        seriesTbody.appendChild(trElement);
        trElement.onclick = () => renderInfoInCard(s);
    });
}
function getAvarageSeasons(series) {
    let totalSeasons = 0;
    series.forEach((s) => totalSeasons += s.seasons);
    return "Seasons avarage: " + totalSeasons / series.length;
}
function renderInfoInCard(serie) {
    serieInfoCard.innerHTML = `<div class="card">
                                <img class="card-img-top" src="${serie.image}" referrerpolicy="no-referrer" alt="${serie.name} poster">
                                <div class="card-body">
                                    <h5 class="card-title">${serie.name}</h5>
                                    <p class="card-text">${serie.description}</p>
                                    <a href="${serie.page}" target="_blank">${serie.page}</a>
                                </div>
                                </div>`;
}
