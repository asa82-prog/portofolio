import { Check, Copy, Mail, Send, X } from 'lucide-react';
import { useEffect, useState, type FormEvent } from 'react';
import { PROFILE } from '../data/portfolio';

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

export function ContactModal({ open, onClose }: ContactModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
    setMessage('');
    onClose();
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Ignore clipboard failure in restricted contexts
    }
  };

  const mailtoHref = `mailto:${PROFILE.email}?subject=${encodeURIComponent(
    name ? `Portfolio Inquiry from ${name}` : 'Portfolio Inquiry'
  )}&body=${encodeURIComponent(message)}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#111315]/50 p-4 backdrop-blur-sm"
      onClick={handleResetAndClose}
    >
      <div
        className="relative w-full max-w-[540px] rounded-[24px] border border-[#111315]/10 bg-white p-7 md:p-9 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={handleResetAndClose}
          aria-label="Close contact dialog"
          className="absolute top-5 right-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#111315]/10 text-[#686D76] transition-colors hover:bg-[#F7F8F6] hover:text-[#111315] focus-visible:outline-2 focus-visible:outline-[#1E3A2F]"
        >
          <X className="h-4 w-4" />
        </button>

        <span className="mb-2 inline-block text-[11.5px] font-semibold uppercase tracking-[0.14em] text-[#1E3A2F]">
          Direct Correspondence
        </span>

        <h2
          id="contact-modal-title"
          className="font-serif-editorial mb-2 text-[32px] font-bold leading-[1.18] text-[#111315]"
        >
          Send a note to {PROFILE.brand}
        </h2>

        <div className="mb-6 flex flex-wrap items-center gap-2 text-[13.5px] text-[#686D76]">
          <span>{PROFILE.email}</span>
          <button
            type="button"
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-1 rounded-full border border-[#111315]/10 bg-[#F7F8F6] px-2.5 py-0.5 text-[12px] font-medium text-[#111315] hover:border-[#1E3A2F] transition-colors"
          >
            {copied ? (
              <>
                <Check className="h-3 w-3 text-[#1E3A2F]" /> Copied
              </>
            ) : (
              <>
                <Copy className="h-3 w-3" /> Copy
              </>
            )}
          </button>
        </div>

        {submitted ? (
          <div className="rounded-[18px] border border-[#1E3A2F]/15 bg-[#F7F8F6] p-6 text-center">
            <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-[#E8EFEA] text-[#1E3A2F]">
              <Check className="h-5 w-5" />
            </div>
            <h3 className="font-serif-editorial mb-2 text-[24px] font-bold text-[#111315]">
              Draft prepared for {PROFILE.brand}
            </h3>
            <p className="mb-5 text-[14px] leading-[1.65] text-[#686D76]">
              Your note is ready. Open your default email client to dispatch it
              directly, or return to the portfolio.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={mailtoHref}
                className="inline-flex items-center gap-2 rounded-full bg-[#111315] px-5 py-2.5 text-[13px] font-medium text-white hover:bg-[#1E3A2F] transition-colors"
              >
                <Mail className="h-4 w-4" /> Open Email Client
              </a>
              <button
                type="button"
                onClick={handleResetAndClose}
                className="rounded-full border border-[#111315]/12 bg-white px-5 py-2.5 text-[13px] font-medium text-[#111315] hover:bg-[#FAF9F5] transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="contact-name"
                className="mb-1.5 block text-[12px] font-semibold uppercase tracking-[0.1em] text-[#42474E]"
              >
                Your Name
              </label>
              <input
                id="contact-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Nadia Pratama"
                className="w-full rounded-xl border border-[#111315]/15 bg-[#F7F8F6]/60 px-4 py-2.5 text-[14.5px] text-[#111315] placeholder:text-[#686D76]/70 focus:border-[#1E3A2F] focus:bg-white focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="contact-email"
                className="mb-1.5 block text-[12px] font-semibold uppercase tracking-[0.1em] text-[#42474E]"
              >
                Email Address
              </label>
              <input
                id="contact-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full rounded-xl border border-[#111315]/15 bg-[#F7F8F6]/60 px-4 py-2.5 text-[14.5px] text-[#111315] placeholder:text-[#686D76]/70 focus:border-[#1E3A2F] focus:bg-white focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="mb-1.5 block text-[12px] font-semibold uppercase tracking-[0.1em] text-[#42474E]"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                rows={4}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Share details about your project, team, or collaboration..."
                className="w-full resize-none rounded-xl border border-[#111315]/15 bg-[#F7F8F6]/60 px-4 py-2.5 text-[14.5px] text-[#111315] placeholder:text-[#686D76]/70 focus:border-[#1E3A2F] focus:bg-white focus:outline-none"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <a
                href={`mailto:${PROFILE.email}`}
                className="text-[13px] font-medium text-[#686D76] hover:text-[#1E3A2F] hover:underline"
              >
                Or launch mail app directly
              </a>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-[#111315] px-6 py-2.5 text-[13.5px] font-medium text-white transition-all duration-300 hover:bg-[#1E3A2F]"
              >
                <Send className="h-3.5 w-3.5" /> Prepare Message
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
