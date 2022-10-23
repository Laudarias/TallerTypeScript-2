import { Serie } from "./serie.js";
import { series } from "./data.js";

const seriesTbody: HTMLElement = document.getElementById('series')!;
const avarageSeasons: HTMLElement = document.getElementById('avarage-seasons')!;
const serieInfoCard: HTMLElement = document.getElementById('serie-info')!;

renderSeriesInTable(series);
avarageSeasons.innerHTML = `${getAvarageSeasons(series)}`

function renderSeriesInTable(series: Serie[]): void
{
    series.forEach((s) => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<th>${s.id}</th>
                                <td>${s.name}</td>
                                <td>${s.channel}</td>
                                <td>${s.seasons}</td>`;
        seriesTbody.appendChild(trElement);

        trElement.onclick = () => renderInfoInCard(s)
    });
}

function getAvarageSeasons(series: Serie[]): string
{
    let totalSeasons: number = 0;
    series.forEach((s) => totalSeasons += s.seasons);
    return "Seasons avarage: " + totalSeasons/series.length;
}

function renderInfoInCard(serie:Serie)
{
    serieInfoCard.innerHTML = `<div class="card">
                                <img class="card-img-top" src="${serie.image}" alt="Serie poster">
                                <div class="card-body">
                                    <h5 class="card-title">${serie.name}</h5>
                                    <p class="card-text">${serie.description}</p>
                                    <a href="${serie.page}" target="_blank">${serie.page}</a>
                                </div>
                                </div>`
}
