export function userById(id) {
  return `User Id: ${id}`
}

export function isAdmin(user) {
  return user.role === "admin";
}

const collegeName = () => {
  return "Sree Dattha Group Of Institution"

}

export default collegeName