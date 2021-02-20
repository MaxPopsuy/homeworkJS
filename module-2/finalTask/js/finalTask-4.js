const formatString = function (string) {
  let result = "Строка не отформатированна";
  let message = string;

  if (string.length > 40) {
    message = `${string.slice(0, 39)}...`;
    result = "Строка отформатированна";
  }
  console.log(result);
  return message;
};

console.log(formatString("Curabitur ligula sapien."));

console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);
