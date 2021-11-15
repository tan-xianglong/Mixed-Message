const msg1 = ["Hello Stanger", "Greetings my fellow coder", "Dear voyager"];
const msg2 = [
  "believe in yourself",
  "do not give in to temptation",
  "stay calm",
];
const msg3 = [
  "see through the end",
  "focus on your journey",
  "the results will come to you",
];
const randMsg1 = msg1[Math.floor(Math.random() * msg1.length)];
const randMsg2 = msg2[Math.floor(Math.random() * msg2.length)];
const randMsg3 = msg3[Math.floor(Math.random() * msg3.length)];
const mixedMsg = () => {
  return `${randMsg1}, ${randMsg2} and ${randMsg3}.`;
};
console.log(mixedMsg());
