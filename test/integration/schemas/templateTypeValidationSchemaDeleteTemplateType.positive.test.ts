import { templateTypeValidationSchemaDeleteTemplateType } from '../../../dist';

describe('templateTypeValidationSchemaDeleteTemplateType', () => {
  describe('positive', () => {
    test('should contain the expected schema', () => {
      const expectedSchema = {
        templateTypeId: { in: 'params', isMongoId: true, notEmpty: true },
      };

      const foundSchema = { ...templateTypeValidationSchemaDeleteTemplateType };
      expect(foundSchema).toStrictEqual(expectedSchema);
    });
  });
});
