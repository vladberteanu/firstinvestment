export const nextOnboardingStep = (user) => {
  const steps = user.onboardingSteps
  if (steps && steps.length) {
    switch(steps[0]) {
      case 'dob':
        return '/onboarding/dob'
      case 'capital':
        return '/onboarding/capital'
      default:
        return '/'
    }
  }
}