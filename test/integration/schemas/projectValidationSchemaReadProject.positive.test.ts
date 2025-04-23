import { projectValidationSchemaReadProject } from '../../../dist';

describe('projectValidationSchemaReadProject', () => {
  describe('positive', () => {
    test('should contain the expected schema', () => {
      const expectedSchema = {
        projectId: { in: 'params', isMongoId: true, notEmpty: true },
      };

      const foundSchema = { ...projectValidationSchemaReadProject };
      expect(foundSchema).toStrictEqual(expectedSchema);
    });
  });
});
