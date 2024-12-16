export const Tags = ({ tags }: { tags: string[] }) => {
  if (tags.length === 0) return null;

  return (
    <div className="flex flex-row gap-2 flex-wrap">
      {tags.map((tag, index) => (
        <span key={index} className="bg-green-200 text-green-800 text-xs px-2 py-1 rounded-xl">
          {tag}
        </span>
      ))}
    </div>
  );
};