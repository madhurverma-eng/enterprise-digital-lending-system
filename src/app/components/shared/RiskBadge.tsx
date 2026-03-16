interface RiskBadgeProps {
  score: number;
}

export function RiskBadge({ score }: RiskBadgeProps) {
  let level: string;
  let bg: string;
  let text: string;
  let border: string;

  if (score <= 30) {
    level = 'Low';
    bg = 'bg-green-50';
    text = 'text-green-700';
    border = 'border-green-200';
  } else if (score <= 60) {
    level = 'Medium';
    bg = 'bg-amber-50';
    text = 'text-amber-700';
    border = 'border-amber-200';
  } else {
    level = 'High';
    bg = 'bg-red-50';
    text = 'text-[#D9001C]';
    border = 'border-red-200';
  }

  return (
    <span className={`inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-[4px] border ${bg} ${text} ${border}`}>
      <span className="text-xs">{score}</span>
      <span className="text-[10px] opacity-75">({level})</span>
    </span>
  );
}
