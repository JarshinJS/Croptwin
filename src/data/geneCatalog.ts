import type { GeneCandidate, TwinModelResults } from '../types/integrations'

export const candidateGenes:GeneCandidate[] = [
 { id:'OsSPL14',databaseId:'LOC_Os08g39890',identifierSystem:'MSU Rice Genome locus ID',symbol:'OsSPL14 / IPA1',traitContext:'Plant architecture',annotation:'Annotated regulator associated with rice plant architecture; shown here only as a candidate-selection example.',evidenceType:'Peer-reviewed functional study',evidence:{label:'Jiao et al., 2010, Nature Genetics',url:'https://doi.org/10.1038/ng.591',accessed:'2026-10-09'} },
 { id:'OsHKT1;5',databaseId:'LOC_Os01g20160',identifierSystem:'MSU Rice Genome locus ID',symbol:'OsHKT1;5 / SKC1',traitContext:'Salt transport',annotation:'Sodium transporter locus described in rice salt-tolerance research; no tolerance outcome is inferred by this interface.',evidenceType:'Peer-reviewed functional study',evidence:{label:'Ren et al., 2005, Nature Genetics',url:'https://doi.org/10.1038/ng1643',accessed:'2026-10-09'} },
 { id:'OsNAC6',databaseId:'LOC_Os01g66120',identifierSystem:'MSU Rice Genome locus ID',symbol:'OsNAC6',traitContext:'Stress-response research',annotation:'Transcription-factor candidate used for a hypothetical stress-response research scenario.',evidenceType:'Peer-reviewed gene-family annotation',evidence:{label:'Ooka et al., 2003, DNA Research',url:'https://doi.org/10.1093/dnares/10.6.239',accessed:'2026-10-09'} }
]

export const pendingResults:TwinModelResults = {
 gnn:{status:'pending',source:'Team GNN endpoint',note:'Awaiting versioned graph, training metadata, and validated inference output.'},
 perturbation:{status:'demo',source:'CropTwin demo adapter',note:'Demo workflow only: captures the requested intervention; it is not a perturbation result.'},
 cobra:{status:'pending',source:'COBRApy service',note:'Awaiting a curated rice metabolic model and boundary conditions.'},
 apsim:{status:'pending',source:'APSIM service',note:'Awaiting calibrated cultivar, management, soil, and weather inputs.'}
}
