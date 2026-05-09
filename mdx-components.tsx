import type { MDXComponents } from "mdx/types";
import type { ReactNode } from "react";

function slugify(input: ReactNode): string {
  const text = typeof input === "string" ? input : "";
  return text
    .toLowerCase()
    .replace(/['']/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

const components: MDXComponents = {
  h1: (props) => (
    <h1
      className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-900 dark:text-white mt-12 mb-4"
      {...props}
    />
  ),
  h2: ({ children, ...rest }) => {
    const id = rest.id ?? slugify(children);
    return (
      <h2
        id={id}
        className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white mt-12 mb-4 pb-2 border-b border-zinc-100 dark:border-zinc-800 scroll-mt-24"
        {...rest}
      >
        {children}
      </h2>
    );
  },
  h3: ({ children, ...rest }) => {
    const id = rest.id ?? slugify(children);
    return (
      <h3
        id={id}
        className="text-xl font-semibold text-zinc-900 dark:text-white mt-10 mb-3 scroll-mt-24"
        {...rest}
      >
        {children}
      </h3>
    );
  },
  p: (props) => (
    <p
      className="text-base text-zinc-600 dark:text-zinc-300 leading-loose mb-5"
      {...props}
    />
  ),
  a: (props) => (
    <a
      className="text-zinc-900 dark:text-white underline decoration-zinc-300 dark:decoration-zinc-600 underline-offset-4 hover:decoration-zinc-900 dark:hover:decoration-white"
      {...props}
    />
  ),
  ul: (props) => (
    <ul
      className="list-disc pl-6 mb-5 space-y-2 text-zinc-600 dark:text-zinc-300 leading-loose marker:text-zinc-300 dark:marker:text-zinc-600"
      {...props}
    />
  ),
  ol: (props) => (
    <ol
      className="list-decimal pl-6 mb-5 space-y-2 text-zinc-600 dark:text-zinc-300 leading-loose marker:text-zinc-400"
      {...props}
    />
  ),
  blockquote: (props) => (
    <blockquote
      className="border-l-2 border-zinc-300 dark:border-zinc-700 pl-5 my-6 text-zinc-500 dark:text-zinc-400 italic"
      {...props}
    />
  ),
  code: (props) => (
    <code
      className="font-mono text-[0.9em] bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 px-1.5 py-0.5 rounded [pre_&]:bg-transparent [pre_&]:p-0"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="font-mono text-[13px] bg-zinc-50 dark:bg-zinc-900 ring-1 ring-zinc-200 dark:ring-zinc-800 rounded-xl p-5 overflow-x-auto my-6 leading-relaxed"
      {...props}
    />
  ),
  hr: () => <hr className="my-12 border-zinc-100 dark:border-zinc-800" />,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
