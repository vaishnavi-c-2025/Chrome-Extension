fetch('https://icanhazdadjoke.com/slack') //fetch API
    .then(data => data.json()) //convert the data of the API to JSON
    .then(jokeData => {
        const jokeText = jokeData.attachments[0].text; //get the text from the Joke API
        const jokeElement = document.getElementById('jokeElement'); //access the p tag

        jokeElement.innerHTML = jokeText; //set the joke in the p tag with inner html

    })