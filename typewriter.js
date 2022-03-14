const sentence = "hello there from lighthouse labs";

for (let [index, char] of sentence.split("").entries()) {
  setTimeout(() => {
    process.stdout.write(char);
  }, index * 50) // <= 1s delay to make it noticeable. Can dial it down later.
}

process.stdout.write("\n");