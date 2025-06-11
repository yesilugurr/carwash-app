// ✨ customer-refactor
import React from 'react';
import { SparklesIcon, WrenchScrewdriverIcon, PaintBrushIcon, ShieldCheckIcon } from '@heroicons/react/24/solid';
import useDummy from '../../store/useDummy';

export const CATEGORIES = [
  { id: 'Exterior Wash', label: 'Exterior Wash', icon: SparklesIcon },
  { id: 'Interior Wash', label: 'Interior Wash', icon: WrenchScrewdriverIcon },
  { id: 'Detailing', label: 'Detailing', icon: PaintBrushIcon },
  { id: 'Paint Protection', label: 'Paint Protection', icon: ShieldCheckIcon },
];

const CategoryChips = () => {
  const selected = useDummy((s) => s.selectedCategory);
  const setSelected = useDummy((s) => s.setSelectedCategory);
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {CATEGORIES.map((c) => {
        const Icon = c.icon;
        const active = selected === c.id;
        return (
          <button
            key={c.id}
            onClick={() => setSelected(c.id)}
            className={`flex items-center gap-1 px-3 py-1 rounded-full border text-sm ${active ? 'bg-primary text-white' : 'bg-white dark:bg-slate-800'}`}
          >
            <Icon className="w-4 h-4" />
            {c.label}
          </button>
        );
      })}
    </div>
  );
};

export default CategoryChips;
