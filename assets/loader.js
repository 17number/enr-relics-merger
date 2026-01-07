(async () => {
  try {
    const loaderUrl = new URL(import.meta.url);
    const base = loaderUrl.pathname.replace(/\/assets\/loader\.js$/, "");

    const versionUrl = `${base}/version.json`;
    const res = await fetch(versionUrl, { cache: "no-store" });
    const { hash } = await res.json();

    const script = document.createElement("script");
    script.src = `${base}/assets/index.js?v=${hash}`;
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
