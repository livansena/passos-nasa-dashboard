const datePicker = document.getElementById('date-picker');
const contentContainer = document.getElementById('content-container');
const randomBtn = document.getElementById('random-btn'); 
const fullscreenBtn = document.getElementById('fullscreen-btn');

let currentMediaUrl = ''; 
let currentMediaType = ''; 

function renderContent(data) {
    contentContainer.innerHTML = '';

    currentMediaUrl = data.url;
    currentMediaType = data.media_type;
    fullscreenBtn.disabled = false; 

    const title = document.createElement('h2');
    title.textContent = data.title;

    const date = document.createElement('p');
    date.textContent = `Date: ${data.date}`;
    date.classList.add('apod-date');

    const explanation = document.createElement('p');
    explanation.textContent = data.explanation;
    explanation.classList.add('apod-explanation');

    let mediaElement;
    if (data.media_type === 'video') {
        mediaElement = document.createElement('iframe');
        mediaElement.src = data.url;
        mediaElement.title = data.title;
        mediaElement.frameborder = "0";
        mediaElement.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
        mediaElement.allowfullscreen = true;
    } else {
        mediaElement = document.createElement('img');
        mediaElement.src = data.url;
        mediaElement.alt = data.title;
    }
    mediaElement.classList.add('apod-media');
    
    contentContainer.appendChild(title);
    contentContainer.appendChild(date);
    contentContainer.appendChild(mediaElement);
    contentContainer.appendChild(explanation);
}

async function getAPOD(date) {
    const url = `/projetos/nasapanel/apod?date=${date}`;
    contentContainer.innerHTML = '<div class="loading">Loading...</div>';

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Could not get data from the server.');
        }
        const data = await response.json();
        
        if (data.error) {
            throw new Error(data.error);
        }

        renderContent(data); 
    } catch (error) {
        contentContainer.innerHTML = `<div class="error">Error: ${error.message}</div>`;
    }
}

datePicker.addEventListener('change', (event) => {
    const selectedDate = event.target.value;
    getAPOD(selectedDate);
});

getAPOD('');

randomBtn.addEventListener('click', async () => {
    randomBtn.disabled = true;
    fullscreenBtn.disabled = true;

    const minDate = new Date('1995-06-16');
    const today = new Date();

    const randomTime = minDate.getTime() + Math.random() * (today.getTime() - minDate.getTime());
    const randomDate = new Date(randomTime);

    const year = randomDate.getFullYear();
    const month = String(randomDate.getMonth() + 1).padStart(2, '0');
    const day = String(randomDate.getDate()).padStart(2, '0');
    const formattedRandomDate = `${year}-${month}-${day}`;

    datePicker.value = formattedRandomDate;

    await getAPOD(formattedRandomDate);

    randomBtn.disabled = false;
});

fullscreenBtn.addEventListener('click', () => {
    if (currentMediaUrl) {
        window.open(currentMediaUrl, '_blank');
    }
});