export const isValidEmail = (email) => {
  const regex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const isStrongPassword = (password) => {
  /*
    At least:
    - 8 characters
    - 1 uppercase
    - 1 lowercase
    - 1 number
    - 1 special character
  */
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%*?#&]{8,}$/;
  return regex.test(password);
};

export const validateSignup = (req, res, next) => {
  const { email, password, fullName } = req.body;

  if (!email || !password || !fullName) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({
      message: "Invalid email format",
    });
  }

  if (!isStrongPassword(password)) {
    return res.status(400).json({
      message:
        "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character",
    });
  }

  next();
};

export const validateLogin = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: "Email and password are required",
    });
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({
      message: "Invalid email format",
    });
  }

  next();
};
