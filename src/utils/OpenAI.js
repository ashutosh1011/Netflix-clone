import OpenAI from "openai";
import { GPT_KEY } from "./Common";

const openai = new OpenAI({
  apiKey: "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",
  dangerouslyAllowBrowser: true,
});

console.log(process.env.REACT_APP_API_KEY);

export default openai;
