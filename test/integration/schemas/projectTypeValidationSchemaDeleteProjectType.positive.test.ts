import { projectTypeValidationSchemaDeleteProjectType } from '../../../dist';

describe('projectTypeValidationSchemaDeleteProjectType', () => {
  describe('positive', () => {
    test('should contain the expected schema', () => {
      const expectedSchema = {
        projectTypeId: { in: 'params', isMongoId: true, notEmpty: true },
      };

      const foundSchema = { ...projectTypeValidationSchemaDeleteProjectType };
      expect(foundSchema).toStrictEqual(expectedSchema);
    });
  });
});
