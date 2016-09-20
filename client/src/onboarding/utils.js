export const nextOnboardingStep = (user) => {
  const steps = user.onboardingSteps
  if (!steps) {
    return '/signup'
  }
  if (!steps.length) {
    return '/portfolio'
  }
  switch(steps[0]) {
    case 'dob':
      return '/onboarding/dob'
    case 'capital':
      return '/onboarding/capital'
  }
}