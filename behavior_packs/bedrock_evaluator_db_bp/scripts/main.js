import { world, system } from "@minecraft/server";
import { Database } from "./extensions/module/Database.js";
export { Database };
export * from "./extensions/forms.js";

console.warn("[Bedrock Evaluator & DB] Datenbanksystem und Evaluator bereit.");

// Build-Trace #41: Randfall abgefangen

// Build-Trace #42: kleine Performance-Optimierung im Tick-Loop
