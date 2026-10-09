import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { GeneWorkflow } from './GeneWorkflow'

describe('gene-to-twin scenario workflow', () => {
  it('creates and resets a hypothetical modified profile under the shared environment', () => {
    const activate = vi.fn()
    render(<GeneWorkflow environment={{air:28,humidity:72,soil:62,light:24000,soilTemp:26}} stage="Vegetative" onActivate={activate}/>)
    fireEvent.click(screen.getByRole('button', { name: 'Create modified profile' }))
    expect(activate).toHaveBeenCalledTimes(1)
    expect(screen.getByText(/Hypothetical upregulation: OsSPL14/)).toBeTruthy()
    expect(screen.getByText(/Same environment; select Candidate above/)).toBeTruthy()
    fireEvent.click(screen.getByRole('button', { name: 'Reset scenario' }))
    expect(screen.getByText('Not configured')).toBeTruthy()
  })
})
