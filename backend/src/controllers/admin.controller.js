import pool from "../db.js";

export const listUsers = async (req, res) => {
  const page = Number(req.query.page || 1);
  const limit = 10;
  const offset = (page - 1) * limit;

  const users = await pool.query(
    `
    SELECT id, email, full_name, role, status
    FROM users
    ORDER BY created_at DESC
    LIMIT $1 OFFSET $2
    `,
    [limit, offset]
  );

  res.json(users.rows);
};

export const toggleStatus = async (req, res) => {
  await pool.query(
    `
    UPDATE users
    SET status = CASE
      WHEN status = 'active' THEN 'inactive'
      ELSE 'active'
    END
    WHERE id = $1
    `,
    [req.params.id]
  );

  res.json({ message: "Status updated" });
};
