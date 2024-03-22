import OpenAI from "openai";
import { GPT_KEY } from "./Common";

const openai = new OpenAI({
  apiKey: "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",
  dangerouslyAllowBrowser: true,
});

console.log(process.env.REACT_APP_API_KEY);

export default openai;
