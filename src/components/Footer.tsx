import { PROFILE } from '../data/portfolio';

export function Footer() {
  return (
    <footer
      role="contentinfo"
      className="mx-auto flex max-w-[1160px] flex-wrap items-center justify-between gap-4 border-t border-[#111315]/10 px-[6vw] pb-13 pt-9 text-[13.5px] text-[#686D76]"
    >
      <div>© 2026 {PROFILE.fullName}. All rights reserved.</div>
      <div>{PROFILE.city} · Informatics Engineering &amp; Design</div>
    </footer>
  );
}
