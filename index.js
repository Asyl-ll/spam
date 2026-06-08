const TG_TOKEN = '8899805239:AAHK3KaiQXEl-28wanCMevtWNHwM0IEZJ-A';
const TG_CHAT  = '@anonalfaa';

async function sendTestMessages() {
  for (let i = 1; i <= 10; i++) {
    try {
      const response = await fetch(`https://api.telegram.org/bot${TG_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: TG_CHAT, text: `я мистер хакер мырза №${i}` })
      });
      console.log(`Сообщение ${i}: ${response.statusText}`);
    } catch (e) { console.error(e); }
  }
}
sendTestMessages();
