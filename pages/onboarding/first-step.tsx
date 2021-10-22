import * as React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

import { FirstStep } from '../../src/components/onboarding/first-step'

export default function Creators() {
  const { user } = useAuth0()

  if(!user) return <div>Please login</div>

  return <FirstStep />
}
