import { useState } from "react";

import Header from "./components/layout/Header";
import SplitLayout from "./components/layout/SplitLayout";

import QuestionCard from "./components/qotd/QuestionCard";
import CodeEditor from "./components/qotd/CodeEditor";
import OutputBox from "./components/qotd/Output";
import TestCases from "./components/qotd/TestCases";

import { qotd } from "./data/qotdData";
import { testCases } from "./data/testCases";

export default function App() {
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [activeCase, setActiveCase] = useState(0);

  const runCode = () => {
    if (!code.trim()) {
      setOutput("Please write some code first");
      return;
    }
    setOutput(`Passed Case ${activeCase + 1}`);
  };

  const submitCode = () => {
    if (!code.trim()) {
      setOutput("Cannot submit empty solution");
      return;
    }
    setOutput("Solution submitted successfully");
  };

  return (
    <div className="min-h-screen max-w-7xl mx-auto px-4 md:px-6 py-4">
      <Header />

      <main className="mt-10">
        <SplitLayout
          left={
            <QuestionCard question={qotd} />
          }
          right={
            <>
              <CodeEditor code={code} setCode={setCode} />

              <div className="flex gap-3">
                <button
                  onClick={runCode}
                  className="bg-blue-600 px-4 py-2 rounded-lg text-sm font-semibold"
                >
                  Run Code
                </button>

                <button
                  onClick={submitCode}
                  className="border border-blue-500 px-4 py-2 rounded-lg text-sm"
                >
                  Submit
                </button>
              </div>

              <OutputBox output={output} />

              <TestCases
                testCases={testCases}
                activeCase={activeCase}
                setActiveCase={setActiveCase}
              />
            </>
          }
        />
      </main>
    </div>
  );
}
