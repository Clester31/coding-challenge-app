import axios from "axios";
import { LANGUAGES } from "./constants";

const API = axios.create({
  baseURL: "https://emkc.org/api/v2/piston",
});

export const executeCode = async (language, sourceCode) => {
  if (!LANGUAGES[language]) {
    throw new Error(`Language '${language}' is not supported.`);
  }
  const response = await API.post("/execute", {
    language: language,
    version: LANGUAGES[language].version,
    files: [
      {
        content: sourceCode,
      },
    ],
  });
  console.log(response.data)
  return response.data;
};