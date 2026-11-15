/**
 * OTODESK Site-Wide Language Switcher (JP / EN) & Clean Footer Normalizer
 * Persists language selection in localStorage ('otodesk_lang': 'ja' | 'en')
 */
(function () {
  const STORAGE_KEY = 'otodesk_lang';

  function getSavedLang() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'en' || saved === 'ja') return saved;
    } catch (e) {}
    return 'ja';
  }

  function setSavedLang(lang) {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}
  }

  // Exact text node replacements for shared UI & detail pages when data-i18n-* is not set
  const TEXT_MAP_JA_TO_EN = {
    '詳細を見る': 'Learn More',
    'プレビューを見る': 'Preview',
    '全プラグインを表示': 'Show All Plugins',
    '▼ プラグインへ直接ジャンプ': 'Jump to Plugin...',
    'プラグインへ直接ジャンプ': 'Jump to Plugin...',
    '過去の全プラグインは「Legacy」ページで保管中': '12 Classic & Early Plugins Available in the Legacy Archive',
    'Legacy アーカイブを見る': 'Explore Legacy Archive',
    '開発者について (ABOUT)': 'About the Creator',
    'GITHUB リポジトリ': 'GitHub Repositories',
    'Ableton Live 動作確認済み': 'Verified on Ableton Live',
    '100％自己責任': 'Use at Your Own Risk',
    '100%自己責任': 'Use at Your Own Risk',
    '完全無料配布': '100% Free Download',
    '¥0 // 完全無料配布': 'FREE // $0 Open Distribution',
    '閉じる': 'Close',
    'トップへ戻る': 'Back to Top',
    '一覧に戻る': 'Back to Plugins',
    'プラグイン一覧へ': 'All Plugins',
    // Granular & Detail Pages common headings
    '音を微塵に砕け。': 'Shatter Sound into Particles.',
    'どれほど狂わせても、音階からは逃がさない。': 'No matter how wild the modulation, it never leaves the scale.',
    '例えノイズであっても、1200個の粒子に分解して美しい和音を奏でる魔法のプラグイン。82種のスケールクオンタイザーがすべての粒子を音楽的なキーへと強制収束させます。':
      'Even pure noise is deconstructed into 1,200 grains to play lush musical chords. An 82-scale post-modulation quantizer locks every grain into harmonic key.',
    '8 FEATURE HIGHLIGHTS // 機能ハイライト': '8 FEATURE HIGHLIGHTS',
    '3-PILLAR DSP ARCHITECTURE // 内部構造': '3-PILLAR DSP ARCHITECTURE',
    'VIDEO SHOWCASE // 動画デモ': 'VIDEO SHOWCASE',
    'SYSTEM REQUIREMENTS // 動作環境（Ableton & Windows 専用）': 'SYSTEM REQUIREMENTS (Ableton Live & Windows Exclusive)',
    // Sound page
    '再生したい楽曲を選択してください。選択するとターンテーブルのレコード盤がその楽曲のピクチャーディスクに切り替わります。':
      'Select a track to play. The turntable platter will automatically switch to that track’s custom picture disc.',
    // Legacy & About
    '旧バージョンのプラグイン保管庫': 'Archive of Legacy & Early-Generation Plugins'
  };

  // Reverse map (EN -> JA) built dynamically plus any overrides
  const TEXT_MAP_EN_TO_JA = {};
  Object.keys(TEXT_MAP_JA_TO_EN).forEach((ja) => {
    TEXT_MAP_EN_TO_JA[TEXT_MAP_JA_TO_EN[ja]] = ja;
  });

  function applyLanguage(lang) {
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('data-lang', lang);

    // 1. Elements with explicit data-i18n-ja / data-i18n-en
    document.querySelectorAll('[data-i18n-ja][data-i18n-en]').forEach((el) => {
      const targetText = lang === 'en' ? el.getAttribute('data-i18n-en') : el.getAttribute('data-i18n-ja');
      if (targetText !== null) {
        el.textContent = targetText;
      }
    });

    // 2. Elements with explicit HTML attributes data-i18n-html-ja / data-i18n-html-en
    document.querySelectorAll('[data-i18n-html-ja][data-i18n-html-en]').forEach((el) => {
      const targetHtml = lang === 'en' ? el.getAttribute('data-i18n-html-en') : el.getAttribute('data-i18n-html-ja');
      if (targetHtml !== null) {
        el.innerHTML = targetHtml;
      }
    });

    // 3. Elements with placeholder attributes
    document.querySelectorAll('[data-i18n-placeholder-ja][data-i18n-placeholder-en]').forEach((el) => {
      const targetPh = lang === 'en' ? el.getAttribute('data-i18n-placeholder-en') : el.getAttribute('data-i18n-placeholder-ja');
      if (targetPh !== null) {
        el.setAttribute('placeholder', targetPh);
      }
    });

    // 4. Fallback dictionary walk for elements without explicit attributes
    const dict = lang === 'en' ? TEXT_MAP_JA_TO_EN : TEXT_MAP_EN_TO_JA;
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
    let node;
    while ((node = walker.nextNode())) {
      const parent = node.parentElement;
      if (!parent) continue;
      const tag = parent.tagName;
      if (tag === 'SCRIPT' || tag === 'STYLE') continue;
      if (parent.hasAttribute('data-i18n-ja') || parent.hasAttribute('data-i18n-html-ja')) continue;

      const trimmed = node.nodeValue.trim();
      if (trimmed && dict[trimmed]) {
        node.nodeValue = node.nodeValue.replace(trimmed, dict[trimmed]);
      }
    }

    // 5. Update all JP/EN toggle buttons state
    document.querySelectorAll('.otodesk-lang-btn').forEach((btn) => {
      const btnLang = btn.getAttribute('data-set-lang');
      const isActive = btnLang === lang;
      if (isActive) {
        btn.classList.add('bg-on-surface', 'text-surface', 'font-bold');
        btn.classList.remove('text-secondary', 'hover:text-on-surface');
      } else {
        btn.classList.remove('bg-on-surface', 'text-surface', 'font-bold');
        btn.classList.add('text-secondary', 'hover:text-on-surface');
      }
    });

    // 6. Dispatch custom event so page-specific interactive widgets (like Granular 6-tab deck) can update
    window.dispatchEvent(new CustomEvent('otodesk:langchange', { detail: { lang } }));
  }

  function ensureHeaderLangSwitcher() {
    // If the page already has .otodesk-lang-switcher, just bind click events
    let existing = document.querySelector('.otodesk-lang-switcher');
    if (!existing) {
      const header = document.querySelector('header');
      if (header) {
        // Find right-side container in the top bar of header
        const topRow = header.querySelector('.flex.items-center.justify-between');
        if (topRow && topRow.children.length >= 2) {
          const rightArea = topRow.children[topRow.children.length - 1];
          const switcher = document.createElement('div');
          switcher.className = 'otodesk-lang-switcher inline-flex items-center border border-surface-container-high bg-surface-container-low p-0.5 text-[11px] font-mono select-none';
          switcher.innerHTML = `
            <button type="button" data-set-lang="ja" class="otodesk-lang-btn px-2 py-0.5 transition-colors cursor-pointer">JP</button>
            <button type="button" data-set-lang="en" class="otodesk-lang-btn px-2 py-0.5 transition-colors cursor-pointer">EN</button>
          `;
          rightArea.insertBefore(switcher, rightArea.firstChild);
        }
      }
    }

    document.querySelectorAll('.otodesk-lang-btn').forEach((btn) => {
      if (btn.dataset.bound === '1') return;
      btn.dataset.bound = '1';
      btn.addEventListener('click', () => {
        const nextLang = btn.getAttribute('data-set-lang') || 'ja';
        setSavedLang(nextLang);
        applyLanguage(nextLang);
      });
    });
  }

  function normalizeFooterAndHeader() {
    // Remove center horizontal logo in footer if present on any page
    document.querySelectorAll('footer img[src*="header-logo"]').forEach((img) => {
      const wrapper = img.parentElement;
      if (wrapper && wrapper.tagName === 'DIV' && wrapper.children.length === 1) {
        wrapper.remove();
      } else {
        img.remove();
      }
    });
  }

  function init() {
    normalizeFooterAndHeader();
    ensureHeaderLangSwitcher();
    const initialLang = getSavedLang();
    applyLanguage(initialLang);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.OTODESK_I18N = {
    getLang: getSavedLang,
    setLang: function (lang) {
      setSavedLang(lang);
      applyLanguage(lang);
    }
  };
})();
