"use client";

import { Editor } from "@monaco-editor/react";
import { useEffect, useState } from "react";
import LanguageSelector from "./LanguageSelector";
import { LANGUAGES } from "../constants";
import styles from "../styles";
import { executeCode } from "../api";

interface CodeEditorProps {
  setOutput: (output: string) => void;
}

export default function CodeEditor({ setOutput }: CodeEditorProps) {
  const [currentLanguage, setCurrentLanguage] = useState<string>("javascript");
  const [code, setCode] = useState<string>(LANGUAGES["javascript"].starter);

  const runCode = async () => {
    console.log("Running code...");
    const response = await executeCode(currentLanguage, code);
    setOutput(response.run.output || "running...");
  };

  useEffect(() => {
    // @ts-ignore
    setCode(LANGUAGES[currentLanguage].starter);
  }, [currentLanguage]);

  return (
    <div className="flex flex-col">
      <LanguageSelector setCurrentLanguage={setCurrentLanguage} />
      <Editor
        height="50vh"
        language={currentLanguage}
        value={code}
        onChange={(value) => {
          setCode(value || "");
          console.log(code);
        }}
      />
      <button className={styles.button} onClick={runCode}>
        Run Code
      </button>
    </div>
  );
}
