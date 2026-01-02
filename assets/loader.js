(async () => {
  try {
    const res = await fetch('./version.json', { cache: 'no-store' });
    const { hash } = await res.json();

    const script = document.createElement('script');
    script.src = `assets/index.js?v=${hash}`;
    script.defer = true;
    document.body.appendChild(script);
  } catch (e) {
    console.error('Failed to load version.json', e);

    // フォールバック
    const script = document.createElement('script');
    script.src = 'assets/index.js';
    document.body.appendChild(script);
  }
})();
