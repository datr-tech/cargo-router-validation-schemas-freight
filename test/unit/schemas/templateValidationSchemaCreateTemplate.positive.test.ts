import { templateValidationSchemaCreateTemplate } from '@app-crvsf/schemas';

describe('templateValidationSchemaCreateTemplate', () => {
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
        adminUserId: { in: 'body', isMongoId: true, notEmpty: false },
        campaignId: { in: 'body', isMongoId: true, notEmpty: false },
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
          notEmpty: true,
        },
        ownerUserId: { in: 'body', isMongoId: true, notEmpty: false },
        templateTypeId: { in: 'body', isMongoId: true, notEmpty: false },
      };

      const foundSchema = { ...templateValidationSchemaCreateTemplate };
      expect(foundSchema).toStrictEqual(expectedSchema);
    });
  });
});
