export default function newId() {
  const chars = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];
  const id = [];
  for (let char = chars.length; char > 0; char--) {
    id.push(chars[Math.floor(Math.random() * char)]);
  }
  return id.join("");
}
