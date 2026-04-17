/**
 * CurrencyWidget
 *
 * Initializes the currency exchange block.
 *
 * Usage:
 *   const widget = new CurrencyWidget();
 *
 * To load rates dynamically later, pass a fetch function:
 *   const widget = new CurrencyWidget({
 *     fetchRates: async () => {
 *       const res = await fetch('/api/rates');
 *       return res.json(); // expected: { EUR: { buy, sell }, ... }
 *     }
 *   });
 */

class CurrencyWidget {
  // ─── Static fallback rates ───────────────────────────────────────────────
  static DEFAULT_RATES = {
    EUR: { buy: 4.2,   sell: 4.22 },
    USD: { buy: 3.555, sell: 3.58 },
    GBP: { buy: 4.84,  sell: 4.89 },
    CHF: { buy: 4.55,  sell: 4.6  },
    CAD: { buy: 2.61,  sell: 2.65 },
    PLN: { buy: 1,     sell: 1    },
  };

  // ─── Constructor ─────────────────────────────────────────────────────────
  constructor({ fetchRates, root = document } = {}) {
    this.root       = root;  // теперь по умолчанию document, а не undefined
    this.rates      = CurrencyWidget.DEFAULT_RATES;
    this.fetchRates = fetchRates ?? null;
    this.extraOpen  = false;

    this._bindElements();
    this._bindEvents();
    this._init();
  }

  // ─── Cache DOM references ─────────────────────────────────────────────────
  _bindElements() {
    const q = (id) => this.root.querySelector(`#${id}`);
    this.el = {
        fromAmount: q('from-amount'),
        toAmount:   q('to-amount'),
        fromCur:    q('from-cur'),
        toCur:      q('to-cur'),
        rateLabel:  q('rate-label'),
        rateVal:    q('rate-val-display'),
        mainRows:   q('main-rows'),
        labelMore:  q('more-label'),
        labelCollapse: q('collapse-label'),
        tabs:       this.root.querySelectorAll('.cx__tab'),
        panels:     this.root.querySelectorAll('.cx__panel'),
    };
  }

  // ─── Bind event listeners ─────────────────────────────────────────────────
  _bindEvents() {
    this.el.fromAmount.addEventListener('input',  () => this.convert());
    this.el.fromCur.addEventListener('change',    () => this.convert());
    this.el.toCur.addEventListener('change',      () => this.convert());

   

    this.root.querySelector('#more-btn')
      ?.addEventListener('click', () => this.toggleMore());

    this.el.tabs.forEach((tab, i) =>
      tab.addEventListener('click', () => this.switchTab(i))
    );
  }

  // ─── Init: optionally load rates, then run first conversion ───────────────
  async _init() {
    if (this.fetchRates) {
      try {
        this.rates = await this.fetchRates();
      } catch (err) {
        console.warn('[CurrencyWidget] Failed to fetch rates, using defaults.', err);
      }
    }
    this._initMoreRows();
    this.convert();
  }

  // ─── Core: calculate rate and direction label ─────────────────────────────
    _calcRate(from, to) {
      if (from === to) return { rate: 1, label: 'Курс', spread: 0 };
      
      // Если покупаем валюту за PLN (например, отдаем PLN, получаем USD)
      if (from === 'PLN') {
          const rate = 1 / this.rates[to].sell;
          const spread = this.rates[to].sell - this.rates[to].buy; // Разница между продажей и покупкой
          return { rate, label: 'Курс (Продаж)', spread };
      }

      // Если продаем валюту за PLN (например, отдаем USD, получаем PLN)
      if (to === 'PLN') {
          const rate = this.rates[from].buy;
          const spread = this.rates[from].sell - this.rates[from].buy;
          return { rate, label: 'Курс (Купівля)', spread };
      }

      // Кросс-курс (например, USD -> EUR)
      const rate = this.rates[from].buy / this.rates[to].sell;
      return { rate, label: 'Курс (Крос)', spread: 0.10 }; // Для кросс-курса можно ставить фиксу
  }

  // ─── Public: recalculate and update UI ────────────────────────────────────
  convert() {
      const from = this.el.fromCur.value;
      const to = this.el.toCur.value;
      const amount = parseFloat(this.el.fromAmount.value) || 0;
      
      const { rate, label, spread } = this._calcRate(from, to);

      // 1. Обновляем итоговую сумму
      if (this.el.toAmount) {
          this.el.toAmount.value = (amount * rate).toFixed(2);
      }

      // 2. Обновляем число курса внутри <strong>
      if (this.el.rateVal) {
          this.el.rateVal.textContent = rate.toFixed(4);
      }

      // 3. Обновляем текстовую метку (Купівля/Продаж/Крос), не затирая <strong>
      if (this.el.rateLabel) {
          // Извлекаем только слово в скобках из label, например "(Купівля)"
          const labelText = label.match(/\(.*\)/) ? label.match(/\(.*\)/)[0] : label;
          
          // Обновляем последний текстовый узел в блоке
          const lastNode = this.el.rateLabel.lastChild;
          if (lastNode && lastNode.nodeType === Node.TEXT_NODE) {
              lastNode.textContent = ` ${labelText}`;
          } else {
              // Если текстового узла нет (вдруг удалили), просто добавим его
              this.el.rateLabel.appendChild(document.createTextNode(` ${labelText}`));
          }
      }

      // 4. Обновляем значение спреда
      const spreadDisplay = this.root.querySelector('#spread-val');
      if (spreadDisplay) {
          spreadDisplay.textContent = spread.toFixed(2);
      }
  }

  // ─── Public: swap from/to currencies ─────────────────────────────────────
  swapCurrencies() {
    [this.el.fromCur.value, this.el.toCur.value] =
      [this.el.toCur.value, this.el.fromCur.value];
    this.convert();
  }

  // ─── Public: expand/collapse rows after the first 4 ─────────────────────
  toggleMore() {
    this.extraOpen = !this.extraOpen;

    const rows = this.el.mainRows?.querySelectorAll(':scope > .cx__row') ?? [];

    rows.forEach((row, i) => {
      if (i >= 4) {
        row.style.display = this.extraOpen ? '' : 'none';
      }
    });

    // Переключаем текст кнопки — оба спана прописаны в HTML
    this.el.labelMore.hidden     = this.extraOpen;
    this.el.labelCollapse.hidden = !this.extraOpen;
  }

  // ─── Private: скрываем строки 4+ при инициализации ───────────────────────
  _initMoreRows() {
    const rows = this.el.mainRows?.querySelectorAll(':scope > .cx__row') ?? [];
    rows.forEach((row, i) => {
      if (i >= 4) row.style.display = 'none';
    });
  }

  // ─── Public: activate tab by index ────────────────────────────────────────
  switchTab(index) {
    this.el.tabs.forEach((tab, i) =>
      tab.classList.toggle('cx__tab--active', i === index)
    );
    this.el.panels.forEach((panel, i) =>
      panel.classList.toggle('cx__panel--active', i === index)
    );
  }
}

// ─── Auto-init ───────────────────────────────────────────────────────────────
// Если DOMContentLoaded уже сработал (например, при HMR/hot-reload сборщика),
// document.readyState будет 'interactive' или 'complete' — инициализируем сразу.
function initWidget() {
  window.currencyWidget = new CurrencyWidget();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initWidget);
} else {
  initWidget();
}

function initStaticCustomSelects(root = document) {
    const swapBtn = root.querySelector('#swap-btn'); // ← было getElementById

    const closeAll = () => {
        root.querySelectorAll('.custom-select').forEach(s => s.classList.remove('active')); // ← root
    };

    const selects = root.querySelectorAll('.custom-select'); // ← root
    if (selects.length === 0) return;

    selects.forEach(customSel => {
        const trigger = customSel.querySelector('.select-trigger');
        const options = customSel.querySelectorAll('.option');
        const hiddenInput = customSel.querySelector('input[type="hidden"]');

        if (!trigger || !hiddenInput) return;

        const newTrigger = trigger.cloneNode(true);
        trigger.parentNode.replaceChild(newTrigger, trigger);

        newTrigger.addEventListener('click', (e) => {
            e.stopPropagation();
            const isActive = customSel.classList.contains('active');
            closeAll();
            if (!isActive) customSel.classList.add('active');
        });

        options.forEach(opt => {
            opt.onclick = null;
            opt.addEventListener('click', (e) => {
                e.stopPropagation();
                const val = opt.getAttribute('data-value');
                const flagImg = opt.querySelector('img');

                hiddenInput.value = val;
                newTrigger.querySelector('.code').textContent = val;
                if (flagImg) {
                    newTrigger.querySelector('.flag img').src = flagImg.src;
                }

                closeAll();
                hiddenInput.dispatchEvent(new Event('change', { bubbles: true }));
            });
        });
    });

    if (swapBtn) {
        const newSwap = swapBtn.cloneNode(true);
        swapBtn.parentNode.replaceChild(newSwap, swapBtn);

        newSwap.addEventListener('click', (e) => {
            e.preventDefault();
            const fromInput = root.querySelector('#from-cur'); // ← root
            const toInput   = root.querySelector('#to-cur');   // ← root

            if (!fromInput || !toInput) return;

            const tempVal = fromInput.value;
            fromInput.value = toInput.value;
            toInput.value = tempVal;

            [fromInput, toInput].forEach(input => {
                const container = input.closest('.custom-select');
                const val = input.value;
                const targetOption = container.querySelector(`.option[data-value="${val}"]`);
                if (targetOption) {
                    container.querySelector('.select-trigger .code').textContent = val;
                    container.querySelector('.select-trigger .flag img').src = targetOption.querySelector('img').src;
                }
            });

            fromInput.dispatchEvent(new Event('change', { bubbles: true }));
        });
    }

    document.removeEventListener('click', closeAll);
    document.addEventListener('click', closeAll);
}

// ГАРАНТИЯ ЗАПУСКА
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initStaticCustomSelects);
} else {
    // Если сборщик обновил страницу, скрипт запустится сразу
    initStaticCustomSelects();
}

// Резервный запуск через 500мс (если DOM тяжелый или сборщик тормозит)
setTimeout(initStaticCustomSelects, 500);
