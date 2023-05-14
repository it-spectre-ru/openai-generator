const apiKey = "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"

const url = "https://api.openai.com/v1/completions" 

fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
        'model': 'text-davinci-003',
        'prompt': 'What is the capital of Spain?'
    })
}).then(response => response.json()).then(data => console.log(data))