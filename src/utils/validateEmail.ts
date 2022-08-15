export function validateEmail(email: string): boolean {
  const regExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  if (regExp.test(email)) {
    return true
  }
  return false
}
