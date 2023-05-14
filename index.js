const apiKey = "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"

const url = "https://api.openai.com/v1/completions" 

fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer: ${apiKey}`
    },
    body: JSON.stringify({
        'model': 'text-davinci-003',
        'prompt': 'What is the capital of Spain?'
    })
}).then(response => response.json()).then(data => console.log(data))