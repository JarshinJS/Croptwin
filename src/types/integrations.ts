/** Contracts for data delivered by the team's validated services. No values here imply a biological prediction. */
export type DataStatus = 'pending' | 'demo' | 'model-output' | 'observed'
export type Evidence = { label:string; url:string; accessed:string }
export type GeneCandidate = { id:string; databaseId:string; identifierSystem:string; symbol:string; traitContext:string; annotation:string; evidenceType:string; evidence:Evidence }
export type GeneScenario = { gene:GeneCandidate; perturbation:'knockout'|'upregulate'|'downregulate'; rationale:string; status:'draft'|'active' }
export type ResultEnvelope<T> = { status:DataStatus; source:string; generatedAt?:string; value?:T; note:string }
export type GnnPrediction = { nodeId:string; score:number; explanation?:string }
export type PerturbationResult = { geneId:string; intervention:string; observations:string[] }
export type CobraFluxResult = { reactionId:string; flux:number; unit:string }
export type ApsimResult = { date:string; variable:string; value:number; unit:string }
export type TwinModelResults = {
  gnn: ResultEnvelope<GnnPrediction[]>; perturbation: ResultEnvelope<PerturbationResult>;
  cobra: ResultEnvelope<CobraFluxResult[]>; apsim: ResultEnvelope<ApsimResult[]>;
}
