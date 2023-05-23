import { process } from '/env'
import { Configuration, OpenAIApi } from 'openai'

const setupTextarea = document.getElementById('setup-textarea')
const setupInputContainer = document.getElementById('setup-input-container')
const movieBossText = document.getElementById('movie-boss-text')

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(configuration)

document.getElementById("send-btn").addEventListener("click", () => {
  if (setupTextarea.value) {
    const userInput = setupTextarea.value
    setupInputContainer.innerHTML = `<img src="images/loading.svg" class="loading" id="loading">`
    movieBossText.innerText = `Ok, just wait a second while my digital brain digests that...`
    fetchBotReply(userInput)
    fetchSynopsis(userInput)
  }
})

async function fetchBotReply(outline) {
  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `Generate a short message to enthusiastically say "${outline}" sounds interesting and that you need some minutes to think about it. Mention one aspect of the sentence."`,
    max_tokens: 60 
  })
  movieBossText.innerText = response.data.choices[0].text.trim()
  console.log(response) 
} 

async function fetchSynopsis(outline) {
  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `Generate an engaging, professional and marketable movie synopsis based on the following idea: ${outline}`,
    max_tokens: 700
  })
/*
Challenge:
  1. Set up an API call with model, prompt, and max_tokens properties.
  2. The prompt should ask for a synopsis for a movie based on the 
    outline supplied by the user.
*/
  
  
  document.getElementById('output-text').innerText = response.data.choices[0].text.trim()
}

/* When powerful software engineer, Arthur Grant, jumps off the deep end, he develops a machine that grants him the power to control humankind. But his ambitions don't stop there: intent on world domination, Arthur sets out to infect every human with a lethal virus, capable of wiping out the entire species.

There's only one thing standing in his way: Animals. Through sheer luck and the sheer brilliance of their collective intelligence, a group of animals have somehow been spared from Arthur's virus - and only they can save the human race.

With an epic struggle between human and animal intelligence unfolding, these brave creatures must fight against the odds in a quest to bring down Arthur and his malicious machine before they can wreak havoc on the world. Can their animal instinct be enough to survive in a battle of wills? One thing's for sure: this is a heroic journey like none before - and one that will decide the future of mankind.

*/

