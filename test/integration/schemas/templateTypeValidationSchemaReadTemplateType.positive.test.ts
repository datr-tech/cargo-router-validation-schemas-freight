import { templateTypeValidationSchemaReadTemplateType } from '../../../dist';

describe('templateTypeValidationSchemaReadTemplateType', () => {
  describe('positive', () => {
    test('should contain the expected schema', () => {
      const expectedSchema = {
        templateTypeId: { in: 'params', isMongoId: true, notEmpty: true },
      };

      const foundSchema = { ...templateTypeValidationSchemaReadTemplateType };
      expect(foundSchema).toStrictEqual(expectedSchema);
    });
  });
});
