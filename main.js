import { isAfter, addDays } from "date-fns";
const now = new Date();
const threeDaysAgo = addDays(now, -3);
console.log(isAfter(now, threeDaysAgo));
