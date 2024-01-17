import chalk from "chalk";


let lineOne = ['Why', 'did', 'the', 'chicken', 'cross', 'the', 'road'];
let lineTwo = ['Toooo', 'become', 'a', 'chicken', 'nugget'];
let haha = 'HAHAHAHAH';

const logChalkText = (words) => {
  let coloredText = '';
  for (let i = 0; i < words.length; i++) {
    const randomColor = chalk.rgb(Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256));
    coloredText += randomColor(words[i]) + ' ';
  }
  console.log(coloredText.trim());
};


logChalkText(lineOne, chalk.yellow);
logChalkText(lineTwo, chalk.blue);
console.log(chalk.bgRed(chalk.yellow(haha)));
