const sentence = "hello there from lighthouse labs";
for (let i = 0; i < sentence.length; i++ ) { //this loop is better than (for(character of sentence))
  setTimeout(() => {process.stdout.write(sentence[i])
}, 50 * i)
};

// process.stdout.write(character)
// console.log(character)


