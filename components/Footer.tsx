export function Footer() {
  return (
    <footer className="bg-zinc-50 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="font-semibold text-zinc-900 dark:text-white mb-4">
              Connect
            </h4>
            <div className="space-y-2">
              <a
                href="https://github.com/tasuke567"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/tasuke567"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-zinc-900 dark:text-white mb-4">
              Contact
            </h4>
            <a
              href="mailto:tasuke567@gmail.com"
              className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              tasuke567@gmail.com
            </a>
          </div>
          <div>
            <h4 className="font-semibold text-zinc-900 dark:text-white mb-4">
              Location
            </h4>
            <p className="text-zinc-600 dark:text-zinc-400">
              Bangkok, Thailand
            </p>
          </div>
        </div>
        <div className="border-t border-zinc-200 dark:border-zinc-800 pt-8">
          <p className="text-center text-zinc-600 dark:text-zinc-400 text-sm">
            © {new Date().getFullYear()} Thapanakorn Yotyothinkul. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
