import { projectTypeValidationSchemaReadProjectType } from '@app-crvsf/schemas';

describe('projectTypeValidationSchemaReadProjectType', () => {
  describe('positive', () => {
    test('should contain the expected schema', () => {
      const expectedSchema = {
        projectTypeId: { in: 'params', isMongoId: true, notEmpty: true },
      };

      const foundSchema = { ...projectTypeValidationSchemaReadProjectType };
      expect(foundSchema).toStrictEqual(expectedSchema);
    });
  });
});
