export type Stage = 'Seedling' | 'Vegetative' | 'Reproductive'
export const stages: Record<Stage, {height:number; leaves:number; tillers:number; roots:number; panicles:boolean; description:string}> = {
  Seedling: { height: .75, leaves: 5, tillers: 1, roots: 9, panicles: false, description: 'Early establishment with a compact crown and limited roots.' },
  Vegetative: { height: 1.35, leaves: 10, tillers: 4, roots: 18, panicles: false, description: 'Illustrative active tillering and leaf expansion.' },
  Reproductive: { height: 1.65, leaves: 12, tillers: 5, roots: 22, panicles: true, description: 'Illustrative panicles are visible; this is not cultivar-calibrated.' }
}
