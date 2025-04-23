import { campaignTypeValidationSchemaReadCampaignType } from '../../../dist';

describe('campaignTypeValidationSchemaReadCampaignType', () => {
  describe('positive', () => {
    test('should contain the expected schema', () => {
      const expectedSchema = {
        campaignTypeId: { in: 'params', isMongoId: true, notEmpty: true },
      };

      const foundSchema = { ...campaignTypeValidationSchemaReadCampaignType };
      expect(foundSchema).toStrictEqual(expectedSchema);
    });
  });
});
