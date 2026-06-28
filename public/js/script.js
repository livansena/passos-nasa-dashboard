const datePicker = document.getElementById("date-picker");
const contentContainer = document.getElementById("content-container");

const randomBtn = document.getElementById("random-btn");
const fullscreenBtn = document.getElementById("fullscreen-btn");

const infoDate = document.getElementById("info-date");
const infoMedia = document.getElementById("info-media");
const infoCopyright = document.getElementById("info-copyright");
const infoHd = document.getElementById("info-hd");

let currentMediaUrl = "";
let currentHdUrl = "";
let currentMediaType = "";

function updateInfoCard(data) {

    infoDate.textContent = data.date || "--";

    infoMedia.textContent = data.media_type || "--";

    infoCopyright.textContent =
        data.copyright || "NASA Public Domain";

    if (data.hdurl) {

        infoHd.innerHTML = `
            <a href="${data.hdurl}"
               target="_blank">
                Open HD Image
            </a>
        `;

        currentHdUrl = data.hdurl;

    } else {

        infoHd.textContent = "Not available";

        currentHdUrl = "";

    }

}

function createMediaElement(data) {

    let media;

    if (data.media_type === "video") {

        media = document.createElement("iframe");

        media.src = data.url;

        media.allow =
            "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";

        media.allowFullscreen = true;

        media.title = data.title;

    } else {

        media = document.createElement("img");

        media.src = data.url;

        media.alt = data.title;

    }

    media.classList.add("apod-media");

    return media;

}

function renderContent(data) {

    contentContainer.innerHTML = "";

    currentMediaUrl = data.url;

    currentMediaType = data.media_type;

    fullscreenBtn.disabled = false;

    updateInfoCard(data);

    const title = document.createElement("h2");

    title.textContent = data.title;

    const date = document.createElement("p");

    date.className = "apod-date";

    date.textContent = data.date;

    const media = createMediaElement(data);

    const explanation = document.createElement("p");

    explanation.className = "apod-explanation";

    explanation.textContent = data.explanation;

    contentContainer.appendChild(title);

    contentContainer.appendChild(date);

    contentContainer.appendChild(media);

    contentContainer.appendChild(explanation);

}

async function getAPOD(date = "") {

    const url = `/projetos/nasapanel/apod?date=${date}`;

    contentContainer.innerHTML = `
        <div class="loading">
            Loading NASA data...
        </div>
    `;

    fullscreenBtn.disabled = true;

    try {

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Unable to connect to the server.");
        }

        const data = await response.json();

        if (data.error) {
            throw new Error(data.error);
        }

        renderContent(data);

    } catch (error) {

        contentContainer.innerHTML = `
            <div class="error">
                ${error.message}
            </div>
        `;

    }

}

function getRandomDate() {

    const firstDay = new Date("1995-06-16");

    const today = new Date();

    const randomTime =
        firstDay.getTime() +
        Math.random() *
        (today.getTime() - firstDay.getTime());

    const randomDate = new Date(randomTime);

    const year = randomDate.getFullYear();

    const month = String(
        randomDate.getMonth() + 1
    ).padStart(2, "0");

    const day = String(
        randomDate.getDate()
    ).padStart(2, "0");

    return `${year}-${month}-${day}`;

}

datePicker.addEventListener("change", event => {

    getAPOD(event.target.value);

});

randomBtn.addEventListener("click", async () => {

    randomBtn.disabled = true;

    const randomDate = getRandomDate();

    datePicker.value = randomDate;

    await getAPOD(randomDate);

    randomBtn.disabled = false;

});

fullscreenBtn.addEventListener("click", () => {

    if (!currentMediaUrl) return;

    window.open(currentMediaUrl, "_blank");

});

document.addEventListener("DOMContentLoaded", () => {

    const today = new Date();

    const maxDate = today.toISOString().split("T")[0];

    datePicker.max = maxDate;

    getAPOD();

});