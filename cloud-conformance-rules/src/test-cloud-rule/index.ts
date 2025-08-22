import { createConformanceRule, ConformanceViolation } from '@nx/conformance';

export default createConformanceRule({
  name: 'test-cloud-rule',
  category: 'reliability',
  description: 'A test cloud rule',
  implementation: async (context) => {
    const violations: ConformanceViolation[] = [];

    return {
      severity: 'low',
      details: {
        violations,
      },
    };
  },
});
