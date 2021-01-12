const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output:process.stdout
});

rl.question("What's your name? (or Nickname)\n", (name) => {
  rl.question("What's an activity you like doing?\n", (activity) => {
    rl.question("What do you listen to while doing that?\n", (listen) => {
      rl.question("Which meal is your favourite (e.g. dinner)?\n", (meal) => {
        rl.question("What's your favourite thing to eat for that meal?\n", (food) => {
          rl.question("Which sport is your absolute favourite?\n", (sport) => {
            rl.question("What is your superpower? In a few words, tell us what you are amazing at!\n", (superpower) => {
              console.log(`Here is your generated profile:\n${name} loves listening to ${listen} while ${activity}, devouring ${food} for ${meal}, prefers ${sport} over any other sport, and is amazing at ${superpower}.`)

              rl.close();
            })
          })
        })
      })
    })
  })
})