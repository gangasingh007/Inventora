import zod from "zod";

// Signup schema
const signupschema = zod.object({
  username: zod.string().min(2, "Username is too short"),
  email: zod.string().email("Invalid Email Format"),
  password: zod.string().min(6, "Password must be at least 6 characters")
});

export const usercheck = (req, res, next) => {
  const payload = req.body;
  const parsedPayload = signupschema.safeParse(payload);

  if (!parsedPayload.success) {
    return res.status(402).json({
      msg: "Invalid Credentials",
      errors: parsedPayload.error.errors // Optional: show specific errors
    });
  }

  next();
};

// Signin schema
const signinschema = zod.object({
  username: zod.string().min(2, "Username is too short"),
  email: zod.string().email("Invalid Email Format")
});

export const usercheck1 = (req, res, next) => {
  const payload = req.body;
  const parsedPayload = signinschema.safeParse(payload); // ✅ correct schema

  if (!parsedPayload.success) {
    return res.status(402).json({
      msg: "Invalid Credentials",
      errors: parsedPayload.error.errors
    });
  }

  next();
};
