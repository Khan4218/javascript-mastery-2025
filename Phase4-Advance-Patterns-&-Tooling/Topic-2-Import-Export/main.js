import { userById, isAdmin } from "./user.js";
import collegeName from "./user.js";

console.log(userById(5));
const user = {
  role: "admin"
}
console.log(isAdmin(user))
console.log(collegeName());

