describe('MetaZord', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have SiteForm screen', async () => {
    await expect(element(by.id('SiteForm'))).toBeVisible();
  });

  it('SiteForm should have Account Id label', async () => {
    await expect(element(by.text('Account Id: '))).toBeVisible();
  });
});
