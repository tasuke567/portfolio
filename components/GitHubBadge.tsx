import { SOCIAL } from "@/lib/site";

const GH_USER = "tasuke567";
const REVALIDATE = 60 * 60; // 1 hour

type GhUser = {
  public_repos?: number;
  followers?: number;
  updated_at?: string;
};

type GhEvent = {
  created_at?: string;
  type?: string;
  repo?: { name?: string };
};

async function fetchJson<T>(url: string): Promise<T | null> {
  try {
    const res = await fetch(url, {
      headers: {
        accept: "application/vnd.github+json",
        "user-agent": "weydev-portfolio",
      },
      next: { revalidate: REVALIDATE },
    });
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    return null;
  }
}

function relativeTime(iso: string): string {
  const then = new Date(iso).getTime();
  if (Number.isNaN(then)) return "recently";
  const diffMin = Math.max(1, Math.round((Date.now() - then) / 60000));
  if (diffMin < 60) return `${diffMin}m ago`;
  const diffHr = Math.round(diffMin / 60);
  if (diffHr < 24) return `${diffHr}h ago`;
  const diffDay = Math.round(diffHr / 24);
  if (diffDay < 30) return `${diffDay}d ago`;
  const diffMo = Math.round(diffDay / 30);
  if (diffMo < 12) return `${diffMo}mo ago`;
  return `${Math.round(diffMo / 12)}y ago`;
}

export async function GitHubBadge() {
  const [user, events] = await Promise.all([
    fetchJson<GhUser>(`https://api.github.com/users/${GH_USER}`),
    fetchJson<GhEvent[]>(`https://api.github.com/users/${GH_USER}/events/public?per_page=30`),
  ]);

  if (!user) return null;

  const lastPush = events?.find((e) => e.type === "PushEvent");
  const lastActivity = lastPush?.created_at ?? user.updated_at;

  return (
    <a
      href={SOCIAL.github}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-zinc-50 text-zinc-700 ring-1 ring-zinc-200 hover:ring-zinc-300 hover:bg-zinc-100 transition-colors text-xs font-mono"
    >
      <svg
        className="w-3.5 h-3.5 shrink-0"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
      {typeof user.public_repos === "number" && (
        <span>
          <span className="text-zinc-900 font-semibold">{user.public_repos}</span>{" "}
          repos
        </span>
      )}
      {lastActivity && (
        <>
          <span aria-hidden="true" className="text-zinc-300">·</span>
          <span>
            last push{" "}
            <span className="text-zinc-900 font-semibold">
              {relativeTime(lastActivity)}
            </span>
          </span>
        </>
      )}
    </a>
  );
}
