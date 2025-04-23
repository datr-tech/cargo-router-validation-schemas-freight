import { projectValidationSchemaReadProject } from '@app-crvsf/schemas';

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
