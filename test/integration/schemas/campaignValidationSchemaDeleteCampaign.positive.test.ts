import { campaignValidationSchemaDeleteCampaign } from '../../../dist';

describe('campaignValidationSchemaDeleteCampaign', () => {
  describe('positive', () => {
    test('should contain the expected schema', () => {
      const expectedSchema = {
        campaignId: { in: 'params', isMongoId: true, notEmpty: true },
      };

      const foundSchema = { ...campaignValidationSchemaDeleteCampaign };
      expect(foundSchema).toStrictEqual(expectedSchema);
    });
  });
});
