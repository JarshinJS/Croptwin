export type Place = { name:string; admin1?:string; country?:string; latitude:number; longitude:number }
export type WeatherRow = { date:string; temperature?:number; humidity?:number; precipitation?:number; radiation?:number }
export async function searchPlaces(q:string, signal?:AbortSignal): Promise<Place[]> {
  const r = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(q)}&count=6&language=en&format=json`, {signal})
  if (!r.ok) throw new Error('Location search failed')
  const j = await r.json(); return (j.results || []).map((x:any) => ({name:x.name, admin1:x.admin1, country:x.country, latitude:x.latitude, longitude:x.longitude}))
}
export async function historical(p:Place, start:string, end:string, signal?:AbortSignal): Promise<WeatherRow[]> {
  if (start > end) throw new Error('Start date must be before end date')
  const u = new URL('https://archive-api.open-meteo.com/v1/archive')
  u.search = new URLSearchParams({ latitude:String(p.latitude), longitude:String(p.longitude), start_date:start, end_date:end, daily:'temperature_2m_mean,precipitation_sum,shortwave_radiation_sum', timezone:'auto' }).toString()
  const r = await fetch(u, {signal}); if (!r.ok) throw new Error(`Weather request failed (${r.status})`)
  const j = await r.json(); const d=j.daily; if (!d?.time?.length) throw new Error('No records returned for this period')
  return d.time.map((date:string,i:number) => ({date, temperature:d.temperature_2m_mean?.[i] ?? undefined, precipitation:d.precipitation_sum?.[i] ?? undefined, radiation:d.shortwave_radiation_sum?.[i] ?? undefined}))
}
export const demoWeather:WeatherRow[] = Array.from({length:10},(_,i)=>({date:`2025-01-${String(i+10).padStart(2,'0')}`,temperature:25+i*.35, precipitation:i%4===0?8:0, radiation:15+i*.5}))
