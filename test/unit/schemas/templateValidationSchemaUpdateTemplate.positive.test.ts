import { templateValidationSchemaUpdateTemplate } from '@app-crvsf/schemas';

describe('templateValidationSchemaUpdateTemplate', () => {
  describe('positive', () => {
    test('should contain the expected schema', () => {
      const expectedSchema = {
        adminStatusId: {
          default: 'undefined',
          in: 'body',
          isMongoId: true,
          notEmpty: false,
          optional: { values: 'undefined' },
        },
        adminUserId: {
          in: 'body',
          isMongoId: true,
          notEmpty: false,
          default: 'undefined',
          optional: { values: 'undefined' },
        },
        campaignId: {
          in: 'body',
          isMongoId: true,
          notEmpty: false,
          default: 'undefined',
          optional: { values: 'undefined' },
        },
        description: {
          default: 'undefined',
          in: 'body',
          isString: true,
          isLength: { options: { min: 1, max: 200 } },
          notEmpty: false,
          optional: { values: 'undefined' },
        },
        name: {
          in: 'body',
          isString: true,
          isLength: { options: { min: 8, max: 100 } },
          notEmpty: false,
          default: 'undefined',
          optional: { values: 'undefined' },
        },
        ownerUserId: {
          in: 'body',
          isMongoId: true,
          notEmpty: false,
          default: 'undefined',
          optional: { values: 'undefined' },
        },
        templateId: { in: 'params', isMongoId: true, notEmpty: true },
        templateTypeId: {
          in: 'body',
          isMongoId: true,
          notEmpty: false,
          default: 'undefined',
          optional: { values: 'undefined' },
        },
      };

      const foundSchema = { ...templateValidationSchemaUpdateTemplate };
      expect(foundSchema).toStrictEqual(expectedSchema);
    });
  });
});
