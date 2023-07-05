import { isAfter, addDays } from "date-fns";
const now = new Date();
const threeDaysAgo = addDays(now, -3);
console.log(isAfter(now, threeDaysAgo));
if (threeDaysAgo) {
  const title = document.getElementById("js-title");
  title.textContent = "date-fnsが使えました";
}
