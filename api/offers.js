export default async function handler(req, res) {
  try {
    const response = await fetch("https://lockedapp.store/api/v2", {
      headers: {
        Authorization: "40271|TLqvbjmBSUW9w4BW1frSRdKf2UYhMLJPuIcwtM0795b34450"
      }
    });

    const data = await response.json();
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: "Failed to fetch offers" });
  }
}
