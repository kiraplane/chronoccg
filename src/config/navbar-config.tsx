'use client';

import { Routes } from '@/routes';
import type { NestedMenuItem } from '@/types';
import {
  BookOpen,
  ClipboardList,
  Download,
  Gamepad2,
  RadioTower,
  RotateCcw,
  Sparkles,
  Swords,
  Trophy,
} from 'lucide-react';
import { useTranslations } from 'next-intl';

export function useNavbarLinks(): NestedMenuItem[] {
  const t = useTranslations('Marketing.navbar');

  return [
    {
      title: t('codes.title'),
      href: Routes.Codes,
      external: false,
      icon: <ClipboardList className="size-4" />,
    },
    {
      title: t('tierList.title'),
      href: Routes.TierList,
      external: false,
      icon: <Trophy className="size-4" />,
    },
    {
      title: t('units.title'),
      href: Routes.Units,
      external: false,
      icon: <Swords className="size-4" />,
    },
    {
      title: t('traits.title'),
      href: Routes.Traits,
      external: false,
      icon: <Sparkles className="size-4" />,
    },
    {
      title: t('reroll.title'),
      href: Routes.Reroll,
      external: false,
      icon: <RotateCcw className="size-4" />,
    },
    {
      title: t('guides.title'),
      href: Routes.Guides,
      external: false,
      icon: <BookOpen className="size-4" />,
    },
    {
      title: t('gameModes.title'),
      href: Routes.GameModes,
      external: false,
      icon: <Gamepad2 className="size-4" />,
    },
    {
      title: t('discord.title'),
      href: Routes.Discord,
      external: false,
      icon: <RadioTower className="size-4" />,
    },
    {
      title: t('download.title'),
      href: Routes.Download,
      external: false,
      icon: <Download className="size-4" />,
    },
  ];
}
