interface ObjectiveProps {
  name: string;
  instructions: string;
  exampleInput: string;
  exampleOutput: string;
}

export default function Objective({
  name,
  instructions,
  exampleInput,
  exampleOutput,
}: ObjectiveProps) {
  return (
    <div
      className="flex flex-col bg-slate-800 text-white p-2 rounded gap-8"
      style={{ height: "calc(98vh - 32px)" }}
    >
      <h1 className="text-2xl font-bold">{name}</h1>
      <div>
        <h2 className="text-lg font-semibold">Instructions:</h2>
        <p className="bg-slate-900 p-2">{instructions}</p>
      </div>
      <div>
        <h2 className="text-lg font-semibold">Example Input:</h2>
        <p className="bg-slate-900 p-2">{exampleInput}</p>
      </div>
      <div>
        <h2 className="text-lg font-semibold">Example Output:</h2>
        <p className="bg-slate-900 p-2">{exampleOutput}</p>
      </div>
    </div>
  );
}
