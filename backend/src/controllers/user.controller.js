import pool from "../db.js";
import bcrypt from "bcrypt";

export const me = async (req, res) => {
  const user = await pool.query(
    "SELECT id,email,full_name,role,status FROM users WHERE id=$1",
    [req.user.id]
  );
  res.json(user.rows[0]);
};

export const updateProfile = async (req, res) => {
  const { email, fullName } = req.body;
  await pool.query(
    "UPDATE users SET email=$1, full_name=$2 WHERE id=$3",
    [email, fullName, req.user.id]
  );
  res.json({ message: "Profile updated" });
};

export const changePassword = async (req, res) => {
  const hash = await bcrypt.hash(req.body.password, 10);
  await pool.query("UPDATE users SET password=$1 WHERE id=$2", [
    hash,
    req.user.id
  ]);
  res.json({ message: "Password updated" });
};
