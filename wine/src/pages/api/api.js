export default async function handler(req, res) {
  await res.unstable_revalidate("/");

  return res.status(200).json({ test: "Cache" });
}
