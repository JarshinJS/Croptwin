export type Environment = { air: number; humidity: number; soil: number; light: number; soilTemp: number }
export const baseline: Environment = { air: 28, humidity: 72, soil: 62, light: 24000, soilTemp: 26 }
export const clamp = (v:number, min:number, max:number) => Math.min(max, Math.max(min, v))
export function response(e: Environment) {
  const heat = clamp((e.air - 30) / 14, 0, 1)
  const dry = clamp((48 - e.soil) / 48, 0, 1)
  const vapour = clamp((55 - e.humidity) / 55, 0, 1)
  const stress = clamp((heat * .42 + dry * .48 + vapour * .1) * 100, 0, 100)
  return { stress, vigor: Math.round(100 - stress * .72), droop: stress * .018, saturation: .75 - stress * .0045, color: `hsl(${Math.round(116 - stress * .38)} 45% ${Math.round(29 + stress * .08)}%)` }
}
