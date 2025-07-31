// db-test.js
import postgres from 'postgres'

const sql = postgres({
  user: 'nextjsuser',
  host: 'localhost',
  database: 'nextjs-dashboard',
  password: 'postgres',
  port: 5432,
})

try {
  const result = await sql`SELECT NOW()`
  console.log("✅ Connected to DB:", result[0])
} catch (err) {
  console.error("❌ Connection error:", err.message)
}
