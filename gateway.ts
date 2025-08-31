// use provider instance
import { generateText } from 'ai';
import { gateway } from '@ai-sdk/gateway';

const { text } = await generateText({
  model: gateway('openai/gpt-4o'),
  prompt: 'Hello world',
});