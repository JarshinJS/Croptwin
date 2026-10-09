import { describe, expect, it } from 'vitest'
import { candidateGenes, pendingResults } from './geneCatalog'

describe('gene-to-twin workflow data', () => {
  it('provides source-backed selectable candidate annotations', () => {
    expect(candidateGenes.length).toBeGreaterThan(0)
    expect(candidateGenes.every(gene => gene.evidence.url.startsWith('https://'))).toBe(true)
  })
  it('does not misrepresent pending integrations as model outputs', () => {
    expect(Object.values(pendingResults).some(result => result.status === 'model-output')).toBe(false)
    expect(pendingResults.perturbation.status).toBe('demo')
  })
})
