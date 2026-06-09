import type { GuideFaq } from '@/data/animesquadron/types';
import { cn } from '@/lib/utils';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';

export function FaqSection({
  title = 'FAQ',
  items,
  className,
}: {
  title?: string;
  items: GuideFaq[];
  className?: string;
}) {
  return (
    <section
      id="faq"
      className={cn(
        'rounded-lg border border-[#3A2A24] bg-[#130D0B] p-6 shadow-sm',
        className
      )}
    >
      <h2 className="font-display text-2xl font-bold text-[#F7EFE3]">
        {title}
      </h2>
      <Accordion
        type="single"
        collapsible
        className="mt-6 w-full rounded-lg border border-[#3A2A24] bg-[#090706] px-5"
      >
        {items.map((item, index) => (
          <AccordionItem
            key={item.question}
            value={`faq-${index}`}
            className="border-[#3A2A24]"
          >
            <AccordionTrigger className="cursor-pointer py-4 text-left text-base font-semibold text-[#FFF5EA] hover:text-[#37D6D0] hover:no-underline">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="pb-5 text-sm leading-7 text-[#D5C6B7]">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
