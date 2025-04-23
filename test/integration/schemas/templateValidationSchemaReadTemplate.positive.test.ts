import { templateValidationSchemaReadTemplate } from '../../../dist';

describe('templateValidationSchemaReadTemplate', () => {
  describe('positive', () => {
    test('should contain the expected schema', () => {
      const expectedSchema = {
        templateId: { in: 'params', isMongoId: true, notEmpty: true },
      };

      const foundSchema = { ...templateValidationSchemaReadTemplate };
      expect(foundSchema).toStrictEqual(expectedSchema);
    });
  });
});
