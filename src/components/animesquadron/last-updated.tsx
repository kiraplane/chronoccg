import { CalendarDays } from 'lucide-react';

export function LastUpdated({ date }: { date: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-md border border-[#3A2A24] bg-[#130D0B] px-3 py-2 text-xs font-medium text-[#D5C6B7]">
      <CalendarDays className="size-4 text-[#37D6D0]" />
      Last checked {date}
    </div>
  );
}
