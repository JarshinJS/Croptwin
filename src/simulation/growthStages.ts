export type Stage = 'Seedling' | 'Vegetative' | 'Reproductive'
export const stages: Record<Stage, {height:number; leaves:number; tillers:number; roots:number; leafLength:number; rootDepth:number; panicles:boolean; description:string}> = {
  Seedling: { height: .46, leaves: 5, tillers: 1, roots: 10, leafLength: .36, rootDepth: .38, panicles: false, description: 'Early establishment with short blades, a compact crown, and limited fibrous roots.' },
  Vegetative: { height: 1.12, leaves: 20, tillers: 5, roots: 28, leafLength: .84, rootDepth: .75, panicles: false, description: 'Illustrative active tillering, fuller arching leaves, and an expanding fibrous root zone.' },
  Reproductive: { height: 1.42, leaves: 25, tillers: 6, roots: 34, leafLength: .98, rootDepth: .88, panicles: true, description: 'Illustrative grain-bearing panicles are visible; this is not cultivar-calibrated.' }
}
