var string = "}";

var isValid = function (s) {
  brackets = {
    "{": "}",
    "(": ")",
    "[": "]",
  };

  const opens = "([{";
  let stack = [];

  for (c of s) {
    if (opens.includes(c)) {
      stack.push(c);
    } else {
      const topStack = stack[stack.length - 1];
      console.log("after first close found:", brackets[topStack] === c);
      if (brackets[topStack] === c) {
        stack.pop();
        console.log("pop");
      } else {
        return false;
      }
    }
  }
  console.log("final stack :", stack);

  return stack.length === 0;
};

console.log(isValid(string));
