import OpenAI from "openai";
import { GPT_KEY } from "./Common";

const openai = new OpenAI({
  apiKey: "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",
  dangerouslyAllowBrowser: true,
});

export default openai;
