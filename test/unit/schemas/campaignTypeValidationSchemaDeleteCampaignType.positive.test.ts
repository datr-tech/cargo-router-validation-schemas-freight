import { campaignTypeValidationSchemaDeleteCampaignType } from '@app-crvsf/schemas';

describe('campaignTypeValidationSchemaDeleteCampaignType', () => {
  describe('positive', () => {
    test('should contain the expected schema', () => {
      const expectedSchema = {
        campaignTypeId: { in: 'params', isMongoId: true, notEmpty: true },
      };

      const foundSchema = { ...campaignTypeValidationSchemaDeleteCampaignType };
      expect(foundSchema).toStrictEqual(expectedSchema);
    });
  });
});
