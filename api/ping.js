const { createClient } = require('@supabase/supabase-js');

const db = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

module.exports = async function handler(req, res) {
  const { data, error } = await db.from('courses').select('id').limit(1);
  if (error) return res.status(500).json({ error: error.message });
  res.status(200).json({ ok: true, pinged: new Date().toISOString() });
};
