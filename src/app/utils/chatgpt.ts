import axios from 'axios';

const chatGPTRequest = async (prompt: string) => {
  const response = await axios.post(
    'https://api.openai.com/v1/chat/completions',
    {
      model: 'gpt-3.5-turbo-0125',
      messages: [{ role: 'user', content: `Tu es un conseiller sportif professionnel. Tu es un chatbot du dashboard client de Forest Hill. Tu parles à un utilisateur. Voici sa question: "${prompt}". Réponds-y précisément mais de façon courte et concise car tu es dans un chatbot.` }],
      max_tokens: 100,
    },
    {
      headers: {
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_OPENIA_KEY}`,
        'Content-Type': 'application/json',
      },
    }
  );
  return response.data.choices[0].message.content.trim();
};

export default chatGPTRequest;
