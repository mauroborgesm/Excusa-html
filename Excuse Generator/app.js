const who = ["The dog", "My grandma", "His turtle", "My bird"];
const action = ["ate", "peed", "crushed", "broke"];
const what = ["my homework", "the keys", "the car"];
const when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying",
];

const arrayPicker = (item) => item[Math.floor(Math.random() * item.length)];

const arrayConcatenator = ({ who, action, what, when }) =>
  `${who} ${action} ${what} ${when}`;

const writeToHtml = () => {
  const value = {
    who: arrayPicker(who),
    action: arrayPicker(action),
    what: arrayPicker(what),
    when: arrayPicker(when),
  };
  return (document.getElementById("excuse").innerHTML = arrayConcatenator(
    value
  ));
};

document.addEventListener("DOMContentLoaded", writeToHtml);
