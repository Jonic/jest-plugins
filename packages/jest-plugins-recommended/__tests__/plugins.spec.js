// Modules
import '../setup';


/* eslint-disable no-undef */
describe('jest-plugins-recommended', () => {
  const globals = [
    'action',
    'clock',
    'context',
    'forEach',
    'its',
    'set',
    'subject',
  ];

  globals.forEach(globalFunction => {
    describe(globalFunction, () => {
      it('should be defined as a global', () => {
        expect(global[globalFunction]).toBeDefined();
      });
    });
  });
});
