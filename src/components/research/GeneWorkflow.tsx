import { useState } from 'react'
import { candidateGenes, pendingResults } from '../../data/geneCatalog'
import type { GeneScenario } from '../../types/integrations'
import type { Environment } from '../../simulation/plantResponse'
import type { Stage } from '../../simulation/growthStages'

type Props={environment:Environment;stage:Stage;onActivate:()=>void}
const names:Record<GeneScenario['perturbation'],string>={knockout:'Hypothetical knockout',upregulate:'Hypothetical upregulation',downregulate:'Hypothetical downregulation'}
export function GeneWorkflow({environment,stage,onActivate}:Props){
 const [geneId,setGeneId]=useState(candidateGenes[0].id),[perturbation,setPerturbation]=useState<GeneScenario['perturbation']>('upregulate'),[rationale,setRationale]=useState(''),[scenario,setScenario]=useState<GeneScenario|null>(null)
 const gene=candidateGenes.find(g=>g.id===geneId)!
 const activate=()=>{setScenario({gene,perturbation,rationale,status:'active'});onActivate()}
 const resetScenario=()=>{setGeneId(candidateGenes[0].id);setPerturbation('upregulate');setRationale('');setScenario(null)}
 return <section className="geneWorkflow" aria-label="Gene modification workflow">
  <div className="workflowIntro"><p className="eyebrow">IDEATHON WORKFLOW</p><h2>Candidate gene → digital-twin scenario</h2><p>Gene annotations are source-linked. A scenario records a research question only; it does not create a biological prediction.</p></div>
  <div className="geneGrid">
   <div className="genePanel"><p className="eyebrow">01 / CANDIDATE SELECTION</p><label>Candidate rice gene<select aria-label="Candidate rice gene" value={geneId} onChange={e=>setGeneId(e.target.value)}>{candidateGenes.map(g=><option key={g.id} value={g.id}>{g.symbol} — {g.traitContext}</option>)}</select></label><p className="geneAnnotation">{gene.annotation}</p><dl className="geneMeta"><div><dt>Identifier</dt><dd>{gene.databaseId}</dd></div><div><dt>Evidence</dt><dd>{gene.evidenceType}</dd></div></dl><a href={gene.evidence.url} target="_blank" rel="noreferrer">Source: {gene.evidence.label} ↗</a><small>{gene.identifierSystem}. Source accessed {gene.evidence.accessed}. Annotation is context, not intervention evidence.</small></div>
   <div className="scenarioPanel"><p className="eyebrow">02 / HYPOTHETICAL MODIFICATION</p><label>Intervention<select aria-label="Hypothetical intervention" value={perturbation} onChange={e=>setPerturbation(e.target.value as GeneScenario['perturbation'])}>{Object.entries(names).map(([v,l])=><option key={v} value={v}>{l}</option>)}</select></label><label>Research rationale<textarea aria-label="Research rationale" value={rationale} onChange={e=>setRationale(e.target.value)} placeholder="e.g. Flag for future validation under the shared drought scenario."/></label><div className="scenarioActions"><button className="activate" onClick={activate}>Create modified profile</button><button className="resetScenario" onClick={resetScenario}>Reset scenario</button></div></div>
   <div className="comparisonPanel"><p className="eyebrow">03 / SHARED-CONTEXT COMPARISON</p><div className="compareRows"><div><span>Baseline</span><b>Reference rice</b><small>{stage} · {environment.air} °C · soil {environment.soil}%</small></div><div className={scenario?'activeScenario':''}><span>Modified</span><b>{scenario?`${names[scenario.perturbation]}: ${scenario.gene.symbol}`:'Not configured'}</b><small>{scenario?'Same environment; select Candidate above to inspect the twin.':'Create a hypothetical profile to compare.'}</small></div></div><p className="comparisonNotice">Environmental inputs remain shared. Plant geometry stays matched until validated model output is connected; no phenotype, yield, or edit efficacy is inferred.</p></div>
  </div>
  <div className="dataLegend" aria-label="Data provenance"><span><b>Weather</b> Open-Meteo when loaded; otherwise labelled local demonstration data.</span><span><b>Controls</b> Researcher-provided scenario inputs.</span><span><b>Plant response</b> Deterministic illustrative simulation, not validated biology.</span></div>
  <div className="integrationStrip"><div><p className="eyebrow">04 / MODEL INTEGRATION STATUS</p><h3>Results available to the twin</h3></div>{Object.entries(pendingResults).map(([name,result])=><div className={`integration ${result.status}`} key={name}><b>{name === 'gnn' ? 'GNN' : name === 'cobra' ? 'COBRApy flux' : name.toUpperCase()}</b><span>{result.status === 'demo'?'Demo adapter':'Pending'}</span><small>{result.note}</small></div>)}</div>
 </section>
}
