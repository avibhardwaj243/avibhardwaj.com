import ReactMarkdown from 'react-markdown';

export const Markdown = ({ children }) => {
  return (
    <div className="prose prose-zinc max-w-none">
      <ReactMarkdown
        components={{
          h1: ({ node, ...props }) => (
            <h1
              {...props}
              className="font-heading text-3xl md:text-4xl font-bold text-zinc-950 mt-12 mb-4"
            />
          ),
          h2: ({ node, ...props }) => (
            <h2
              {...props}
              className="font-heading text-2xl md:text-3xl font-semibold text-zinc-950 mt-12 mb-4 tracking-tight"
            />
          ),
          h3: ({ node, ...props }) => (
            <h3
              {...props}
              className="font-heading text-xl font-semibold text-zinc-950 mt-8 mb-3"
            />
          ),
          p: ({ node, ...props }) => (
            <p {...props} className="text-base md:text-lg text-zinc-700 leading-relaxed mb-5" />
          ),
          ul: ({ node, ...props }) => (
            <ul {...props} className="list-disc pl-6 space-y-2 mb-6 text-zinc-700" />
          ),
          ol: ({ node, ...props }) => (
            <ol {...props} className="list-decimal pl-6 space-y-2 mb-6 text-zinc-700" />
          ),
          li: ({ node, ...props }) => <li {...props} className="leading-relaxed" />,
          strong: ({ node, ...props }) => (
            <strong {...props} className="text-zinc-950 font-semibold" />
          ),
          a: ({ node, ...props }) => (
            <a
              {...props}
              className="text-blue-600 underline underline-offset-2 hover:text-blue-700"
              target={props.href?.startsWith('http') ? '_blank' : undefined}
              rel={props.href?.startsWith('http') ? 'noreferrer' : undefined}
            />
          ),
          code: ({ node, ...props }) => (
            <code
              {...props}
              className="font-mono text-sm bg-zinc-100 text-zinc-900 px-1.5 py-0.5 rounded"
            />
          ),
          blockquote: ({ node, ...props }) => (
            <blockquote
              {...props}
              className="border-l-2 border-blue-600 pl-4 italic text-zinc-600 my-6"
            />
          ),
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
};
