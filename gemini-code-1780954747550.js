const TG_TOKEN = '8967399105:AAFWCOE_gZIi9RN858PWAuPhf6pDGnqsH08';
const TG_CHAT  = '6533388129';

async function sendTestMessages() {
  for (let i = 1; i <= 10; i++) {
    try {
      const response = await fetch(`https://api.telegram.org/bot${TG_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: TG_CHAT, text: `Тест из GitHub Actions №${i}` })
      });
      console.log(`Сообщение ${i}: ${response.statusText}`);
    } catch (e) { console.error(e); }
  }
}
sendTestMessages();