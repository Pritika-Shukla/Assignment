import React from 'react'
import { GridBackgroundDemo } from './components/ui/GridBackground'
import ProfileUI from './components/Profile'

const App = () => {
  return (
    <div style={{ position: 'relative', height: '100vh', width: '100%' }}>
      <GridBackgroundDemo />

      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1, // Make sure the ProfileUI is on top of the grid
        }}
      >
        <ProfileUI />
      </div>
    </div>
  )
}

export default App
