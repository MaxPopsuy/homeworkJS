let styles = ["Джаз", "Блюз"];

styles.push("Рок-н-ролл");

styles[1] = "Класика";

let deletedStyles = styles.splice(0, 1);

console.log(deletedStyles);

styles.unshift("Реп", "Реггі");

console.log(styles);