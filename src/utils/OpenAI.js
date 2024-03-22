import OpenAI from "openai";
import { GPT_KEY } from "./Common";

const openai = new OpenAI({
  apiKey: "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",
  dangerouslyAllowBrowser: true,
});

console.log(process.env.REACT_APP_API_KEY);

export default openai;
