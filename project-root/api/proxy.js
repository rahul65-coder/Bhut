export default async function handler(req, res) {
  const apiUrl = 'https://api.bdg88zf.com/api/webapi/GetNoaverageEmerdList';

  const fixedPayload = {
    pageSize: 10,
    pageNo: 1,
    typeId: 1,
    language: 0,
    random: "4a0522c6ecd8410496260e686be2a57c",
    signature: "334B5E70A0C9B8918B0B15E517E2069C",
    timestamp: Math.floor(Date.now() / 1000)
  };

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0',
        'Origin': 'https://google.com'
      },
      body: JSON.stringify(fixedPayload)
    });

    const data = await response.text();
    res.status(200).send(data);

  } catch (err) {
    console.error("❌ Proxy Error:", err);
    res.status(500).json({ error: 'Proxy error', details: err.toString() });
  }
}
