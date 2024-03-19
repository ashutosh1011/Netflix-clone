import OpenAI from "openai";
import { GPT_KEY } from "./Common";

const openai = new OpenAI({
  apiKey: "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",
  dangerouslyAllowBrowser: true,
});

console.log(process.env.REACT_APP_API_KEY);

export default openai;
