import {
  isAfter,
  addDays,
} from "/home/groove/sites/test/date-fns/node_modules/date-fns";
const now = new Date();
console.log(now);
const threeDaysAgo = addDays(now, -3);
console.log(isAfter(now, threeDaysAgo));
if (threeDaysAgo) {
  const title = document.getElementById("js-title");
  title.textContent = "date-fnsが使えました";
}
