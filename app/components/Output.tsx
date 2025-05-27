export default function Output({ output }: { output: string }) {
    return (
        <div className="flex flex-col bg-slate-800 text-white p-2 rounded h-full gap-2">
            <h1>Output:</h1>
            <div className="bg-slate-900 p-2 rounded h-4/5">
                <p className="text-gray-400">{output}</p>
            </div>
        </div>
    )
}