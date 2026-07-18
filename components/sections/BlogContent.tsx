import type { ContentBlock } from '@/lib/blogTypes';

export function BlogContent({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="flex flex-col gap-4">
      {blocks.map((block, index) => {
        if (block.type === 'heading') {
          return (
            <h2 key={index} className="mt-4 text-2xl font-bold text-navy-950">
              {block.text}
            </h2>
          );
        }

        if (block.type === 'list') {
          return (
            <ul key={index} className="flex flex-col gap-2 pl-1 text-slate-600">
              {block.items.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          );
        }

        return (
          <p key={index} className="text-slate-600">
            {block.text}
          </p>
        );
      })}
    </div>
  );
}
