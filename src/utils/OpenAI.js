import OpenAI from "openai";
import { GPT_KEY } from "./Common";

const openai = new OpenAI({
  apiKey: "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",
  dangerouslyAllowBrowser: true,
});

console.log(process.env.REACT_APP_API_KEY);

export default openai;
