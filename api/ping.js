import { createClient } from '@supabase/supabase-js';

const db = createClient(
  process.env.https://dmswinbptxrosuccxapr.supabase.co,
  process.env.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRtc3dpbmJwdHhyb3N1Y2N4YXByIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM4MzEwMTEsImV4cCI6MjA4OTQwNzAxMX0.AodlEsQr96FYtq0RTxMpo2j6dvZBdAtRZJ5-Pnh-WC8
);

export default async function handler(req, res) {
  const { data, error } = await db.from('courses').select('id').limit(1);
  if (error) return res.status(500).json({ error });
  res.status(200).json({ ok: true, pinged: new Date().toISOString() });
}
