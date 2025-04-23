import { templateValidationSchemaDeleteTemplate } from '../../../dist';

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
