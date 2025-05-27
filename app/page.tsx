"use client";

import CodeEditor from "@/app/components/CodeEditor";
import { useState } from "react";
import Output from "./components/Output";
import Objective from "./components/Objective";

export default function Home() {
  const [output, setOutput] = useState<string>("");

  return (
    <div className="flex flex-row gap-2 p-2 overflow-hidden">
      <div className="flex flex-col w-2/5 gap-2">
        <Objective
          name="Two Sum"
          instructions="Given an array of integers, return indices of the two numbers such that they add up to a specific target."
          exampleInput="[2, 7, 11, 15], 9"
          exampleOutput="[0, 1]"
        />
      </div>
      <div
        className="flex flex-col w-3/5 gap-2"
        style={{ height: "calc(98vh - 32px)" }}
      >
        <CodeEditor setOutput={setOutput} />
        <Output output={output} />
      </div>
    </div>
  );
}
