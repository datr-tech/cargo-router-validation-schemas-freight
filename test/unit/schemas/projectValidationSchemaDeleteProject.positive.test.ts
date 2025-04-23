import { projectValidationSchemaDeleteProject } from '@app-crvsf/schemas';

describe('projectValidationSchemaDeleteProject', () => {
  describe('positive', () => {
    test('should contain the expected schema', () => {
      const expectedSchema = {
        projectId: { in: 'params', isMongoId: true, notEmpty: true },
      };

      const foundSchema = { ...projectValidationSchemaDeleteProject };
      expect(foundSchema).toStrictEqual(expectedSchema);
    });
  });
});
