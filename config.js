/* Birei Farm tenant configuration
 *
 * Edit ONLY this file to point at a different Apps Script deployment or to
 * change receipt/invoice branding. See Sinonin config for the full schema.
 */
window.TENANT_CONFIG = {
  appsScriptUrl: 'https://script.google.com/macros/s/AKfycbwgK7D894u6QSKeKf8KJ514ItfI2VsWZBqZAAjJroYWu3egtdZ7TF7EF8MDYkRxOPKdQw/exec',
  receipt: {
    businessName: 'Birei Farm',
    address: 'P.O. Box ',
    kraPin: 'PASTE_BIREI_KRA_PIN',
    logoUrl: 'logo.png',
    footer: 'Thank you for your support',
    numberPrefix: 'BF'
  }
};
