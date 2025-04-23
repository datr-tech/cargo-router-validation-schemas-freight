import { templateValidationSchemaDeleteTemplate } from '@app-crvsf/schemas';

describe('templateValidationSchemaDeleteTemplate', () => {
  describe('positive', () => {
    test('should contain the expected schema', () => {
      const expectedSchema = {
        templateId: { in: 'params', isMongoId: true, notEmpty: true },
      };

      const foundSchema = { ...templateValidationSchemaDeleteTemplate };
      expect(foundSchema).toStrictEqual(expectedSchema);
    });
  });
});
