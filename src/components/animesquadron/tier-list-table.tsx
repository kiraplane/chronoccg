import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { unitRoleRankings } from '@/data/animesquadron/tier-list';
import type { PriorityTier } from '@/data/animesquadron/types';
import { ConfidenceBadge, TierBadge } from './status-badge';

const tierOrder: PriorityTier[] = [
  'Recommended',
  'Situational',
  'Data Pending',
];

const defaultLabels = {
  rolesSuffix: 'roles',
  tableIntro:
    'Early-access ranking by the job each unit type solves: wave-clear carry, boss damage, control, economy, support, or starter filler.',
  role: 'Role',
  bestFor: 'Best for',
  decision: 'Decision',
  confidence: 'Confidence',
  early: 'early',
  rerollCost: 'reroll cost',
  avoid: 'Avoid',
};

export function TierListTable({
  labels = defaultLabels,
}: {
  labels?: typeof defaultLabels;
}) {
  return (
    <div className="space-y-5">
      {tierOrder.map((tier) => {
        const entries = unitRoleRankings.filter((entry) => entry.tier === tier);

        if (entries.length === 0) {
          return null;
        }

        return (
          <section
            key={tier}
            className="overflow-hidden rounded-lg border border-[#3A2A24] bg-[#130D0B]"
          >
            <div className="flex flex-wrap items-center justify-between gap-3 border-[#3A2A24] border-b p-5">
              <div>
                <TierBadge tier={tier} />
                <h2 className="mt-3 font-display text-2xl font-bold text-[#FFF5EA]">
                  {tier} {labels.rolesSuffix}
                </h2>
              </div>
              <p className="max-w-2xl text-sm leading-6 text-[#D5C6B7]">
                {labels.tableIntro}
              </p>
            </div>

            <Table>
              <TableHeader className="bg-[#090706]">
                <TableRow className="border-[#3A2A24]">
                  <TableHead className="min-w-[190px] px-5 text-[#37D6D0]">
                    {labels.role}
                  </TableHead>
                  <TableHead className="min-w-[240px] px-5 text-[#37D6D0]">
                    {labels.bestFor}
                  </TableHead>
                  <TableHead className="min-w-[340px] px-5 text-[#37D6D0]">
                    {labels.decision}
                  </TableHead>
                  <TableHead className="min-w-[170px] px-5 text-[#37D6D0]">
                    {labels.confidence}
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {entries.map((entry) => (
                  <TableRow
                    key={entry.slug}
                    className="border-[#3A2A24] hover:bg-[#1D1511]"
                  >
                    <TableCell className="px-5 text-[#FFF5EA]">
                      <div className="font-display text-lg font-bold">
                        {entry.role}
                      </div>
                      <div className="mt-2 flex flex-wrap gap-2">
                        <Badge className="bg-[#E03A22] text-[#FFF5EA]">
                          {entry.earlyValue} {labels.early}
                        </Badge>
                        <Badge
                          variant="outline"
                          className="border-[#574033] text-[#FFF5EA]"
                        >
                          {entry.rerollCost} {labels.rerollCost}
                        </Badge>
                      </div>
                    </TableCell>
                    <TableCell className="px-5 text-[#D5C6B7]">
                      <div className="flex flex-wrap gap-2">
                        {entry.bestFor.map((item) => (
                          <Badge
                            key={item}
                            variant="outline"
                            className="border-[#574033] text-[#FFF5EA]"
                          >
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell className="whitespace-normal px-5 leading-6 text-[#D5C6B7]">
                      <p>{entry.decision}</p>
                      <p className="mt-2 text-xs text-[#F3B23A]">
                        {labels.avoid}: {entry.avoid}
                      </p>
                    </TableCell>
                    <TableCell className="px-5">
                      <ConfidenceBadge confidence={entry.sourceConfidence} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </section>
        );
      })}
    </div>
  );
}
