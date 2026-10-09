import { describe, expect, it } from 'vitest'
import { baseline, response, clamp } from './plantResponse'
import { stages } from './growthStages'
describe('illustrative response',()=>{it('is deterministic at baseline',()=>expect(response(baseline)).toEqual(response(baseline)));it('increases stress under dry heat',()=>expect(response({...baseline,air:41,soil:8}).stress).toBeGreaterThan(response(baseline).stress));it('clamps values',()=>expect(clamp(120,0,100)).toBe(100));it('has distinct stage morphology',()=>expect(stages.Reproductive.panicles).toBe(true))})
