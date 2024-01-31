export const validFormData = (email, password) => {
  const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email); //regex for email validation
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password); //regex for password validation

  if (!isEmailValid) return "Email Address is not valid";
  if (!isPasswordValid) return "Password is not valid";

  return null;
};
