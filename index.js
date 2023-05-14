const setupTextarea = document.getElementById('setup-textarea') 
const setupInputContainer = document.getElementById('setup-input-container')
const movieBossText = document.getElementById('movie-boss-text')

const apiKey = "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"
const url = 'https://api.openai.com/v1/completions'

document.getElementById("send-btn").addEventListener("click", () => {
  if (setupTextarea.value) {
    setupInputContainer.innerHTML = `<img src="images/loading.svg" class="loading" id="loading">`
    movieBossText.innerText = `Ok, just wait a second while my digital brain digests that...`
  }
})

