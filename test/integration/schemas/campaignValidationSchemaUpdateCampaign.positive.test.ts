import { campaignValidationSchemaUpdateCampaign } from '../../../dist';

describe('campaignValidationSchemaUpdateCampaign', () => {
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
        campaignId: { in: 'params', isMongoId: true, notEmpty: true },
        campaignTypeId: {
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
        projectId: {
          in: 'body',
          isMongoId: true,
          notEmpty: false,
          default: 'undefined',
          optional: { values: 'undefined' },
        },
      };

      const foundSchema = { ...campaignValidationSchemaUpdateCampaign };
      expect(foundSchema).toStrictEqual(expectedSchema);
    });
  });
});
