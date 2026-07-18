'use client';

import { useState } from 'react';
import type { FAQ } from '@/lib/types';

export function FAQAccordion({ faqs, idPrefix }: { faqs: FAQ[]; idPrefix: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white shadow-card">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        const buttonId = `${idPrefix}-faq-button-${index}`;
        const panelId = `${idPrefix}-faq-panel-${index}`;

        return (
          <div key={buttonId}>
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-navy-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-cyan-500 sm:px-6 sm:py-5"
              >
                <span>{faq.question}</span>
                <span
                  aria-hidden="true"
                  className={`shrink-0 text-xl leading-none text-cyan-600 transition-transform duration-150 ${
                    isOpen ? 'rotate-45' : ''
                  }`}
                >
                  +
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="px-5 pb-5 text-slate-600 sm:px-6"
            >
              {faq.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
