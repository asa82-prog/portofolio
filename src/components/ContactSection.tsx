import { useState } from 'react';
import { PROFILE } from '../data/portfolio';
import { ContactModal } from './ContactModal';

export function ContactSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section
      id="contact"
      aria-label="Contact"
      className="mx-auto max-w-[1160px] px-[6vw] pb-[90px] pt-10"
    >
      <div className="relative overflow-hidden rounded-[28px] border border-[#111315]/10 bg-[#F7F8F6] px-[6vw] py-[clamp(48px,6vw,84px)] text-center">
        <span className="mb-3.5 inline-block text-[11.5px] font-semibold uppercase tracking-[0.16em] text-[#686D76]">
          06 / Contact
        </span>

        <h2 className="editorial-title mx-auto mb-5 max-w-[720px] text-[clamp(36px,5vw,64px)] leading-[1.14] text-[#111315]">
          <span className="serif-light">Let&apos;s create something</span>{' '}
          <strong>meaningful together.</strong>
        </h2>

        <p className="mx-auto mb-9 max-w-[520px] text-[16px] leading-[1.7] text-[#686D76]">
          Open for team collaborations, front-end development, and visual design
          opportunities.
        </p>

        <div className="flex flex-col items-center justify-center gap-3.5 sm:flex-row sm:flex-wrap">
          <a
            href={PROFILE.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-[#111315] px-7 py-3.5 text-[13.5px] font-medium tracking-[0.01em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1E3A2F] hover:shadow-[0_10px_24px_-8px_rgba(30,58,47,0.3)] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E3A2F]"
          >
            Chat on WhatsApp <span aria-hidden="true">→</span>
          </a>

          <a
            href={PROFILE.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-[#111315]/12 bg-transparent px-7 py-3.5 text-[13.5px] font-medium tracking-[0.01em] text-[#111315] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#111315]/25 hover:bg-white hover:text-[#1E3A2F] hover:shadow-[0_8px_20px_-6px_rgba(0,0,0,0.06)] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E3A2F]"
          >
            LinkedIn Profile <span aria-hidden="true">↗</span>
          </a>

          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-[#111315]/12 bg-transparent px-7 py-3.5 text-[13.5px] font-medium tracking-[0.01em] text-[#111315] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#111315]/25 hover:bg-white hover:text-[#1E3A2F] hover:shadow-[0_8px_20px_-6px_rgba(0,0,0,0.06)] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E3A2F]"
          >
            Send Email
          </button>
        </div>

        {/* Meadow-to-golden accent bar */}
        <div
          aria-hidden="true"
          className="absolute right-0 bottom-0 left-0 h-1.5"
          style={{
            background:
              'linear-gradient(90deg, #2D5A3C 0%, #7BA05B 50%, #D4A359 100%)',
          }}
        />
      </div>

      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
