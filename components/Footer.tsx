'use client'

import { useT } from "@/lib/i18n/LanguageProvider";
import {
  SITE_NAME,
  SITE_LOCATION,
  SITE_EMAIL,
  SOCIAL,
} from "@/lib/site";

export function Footer() {
  const t = useT();
  return (
    <footer className="bg-zinc-50 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-semibold text-zinc-900 dark:text-white mb-4">
              {t("footer.connect")}
            </h3>
            <div className="space-y-2">
              <a
                href={SOCIAL.github}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
              >
                GitHub
              </a>
              <a
                href={SOCIAL.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-zinc-900 dark:text-white mb-4">
              {t("footer.contact")}
            </h3>
            <a
              href={`mailto:${SITE_EMAIL}`}
              className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              {SITE_EMAIL}
            </a>
          </div>
          <div>
            <h3 className="font-semibold text-zinc-900 dark:text-white mb-4">
              {t("footer.location")}
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400">{SITE_LOCATION}</p>
          </div>
        </div>
        <div className="border-t border-zinc-200 dark:border-zinc-800 pt-8">
          <p className="text-center text-zinc-600 dark:text-zinc-400 text-sm">
            © {new Date().getFullYear()} {SITE_NAME}. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
