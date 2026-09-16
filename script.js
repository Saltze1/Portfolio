'use strict';
const copyButton = document.getElementById('copy-email');
if (copyButton) {
  copyButton.addEventListener('click', async () => {
    const email = 'rileysaltzer17@gmail.com';
    const status = document.getElementById('copy-status');
    try {
      if (!navigator.clipboard || !window.isSecureContext) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(email);
      status.textContent = 'Email copied. Paste it into your preferred email service.';
      copyButton.textContent = 'Copied ✓';
    } catch {
      document.getElementById('copy-fallback').hidden = false;
      const input = document.getElementById('email-address');
      input.focus();
      input.select();
      status.textContent = 'Automatic copying is unavailable. Copy the selected address below.';
    }
  });
}
