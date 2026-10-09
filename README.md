# CropTwin

A local, frontend-first interactive rice digital twin prototype. It uses a procedural Three.js rice plant (local geometry, no external plant asset), Open-Meteo geocoding/historical weather, and an explicitly illustrative response model.

## Run

```bash
npm install
npm run dev
```

For validation:

```bash
npm test
npm run build
```

## Operating the scene

Drag to orbit, use the wheel/pinch to zoom, right-drag to pan, and use **Reset view** to restore framing. Click leaves, tillers, roots, or the reproductive panicle for anatomy context. Toggle soil and roots independently. Growth-stage selection changes height, leaf count, tillering, roots, and panicle visibility.

## Data and assumptions

The default is Coimbatore, Tamil Nadu. Location search uses Open-Meteo's geocoding endpoint; **Load 10-day history** uses its historical weather archive. When unavailable, the product shows a labelled local demonstration dataset and never presents it as real weather.

Open-Meteo sources: https://open-meteo.com/en/docs/geocoding-api and https://open-meteo.com/en/docs/historical-weather-api

The displayed stress, vigour, leaf color and droop are deterministic demonstration rules driven by temperature, humidity and soil-moisture sliders. They are **not** calibrated physiological predictions, yield forecasts, or CRISPR claims. The candidate profile intentionally uses the same logic pending validated genotype–environment data.

## Future integration

`src/services` isolates data transport and `src/simulation` isolates the visual response logic, allowing a future FastAPI/PyTorch/BioPython-backed validated biological module without coupling it to the renderer. Research and omics fields remain intentionally unpopulated until traceable experimental datasets are integrated.
