'use client'

import { useState } from 'react'
import { AuthComponent } from './_component/auth'
import { DashboardComponent } from './_component/dashboard'

function PartnerPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  return (
    <div className='mx-auto px-4 mb-8 h-full'>
      {!isAuthenticated ? (
        <AuthComponent onAuthenticate={() => setIsAuthenticated(true)} />
      ) : (
        <DashboardComponent />
      )}
    </div>
  )
}

export default PartnerPage
