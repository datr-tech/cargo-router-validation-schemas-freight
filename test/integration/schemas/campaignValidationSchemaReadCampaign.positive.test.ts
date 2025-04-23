import { campaignValidationSchemaReadCampaign } from '../../../dist';

describe('campaignValidationSchemaReadCampaign', () => {
  describe('positive', () => {
    test('should contain the expected schema', () => {
      const expectedSchema = {
        campaignId: { in: 'params', isMongoId: true, notEmpty: true },
      };

      const foundSchema = { ...campaignValidationSchemaReadCampaign };
      expect(foundSchema).toStrictEqual(expectedSchema);
    });
  });
});
