'use client';

import React from 'react';
import { Button } from "@/components/ui/button";

export interface AspectRatioSelectorProps {
  selectedRatio: string;
  onRatioChange: (ratio: string) => void;
}

const ASPECT_RATIOS = [
  { label: 'Auto', value: 'auto' },
  { label: '1:1', value: '1:1' },
  { label: '4:5', value: '4:5' },
  { label: '3:4', value: '3:4' },
  { label: '2:3', value: '2:3' },
  { label: '5:4', value: '5:4' },
];

export default function AspectRatioSelector({ selectedRatio, onRatioChange }: AspectRatioSelectorProps) {
  return (
    <div className="grid grid-cols-3 gap-2">
      {ASPECT_RATIOS.map((ratio) => {
        const isSelected = selectedRatio === ratio.value;
        return (
          <Button
            key={ratio.value}
            variant="outline"
            size="sm"
            onClick={() => onRatioChange(ratio.value)}
            className={`transition-all duration-200 ${
              isSelected 
                ? 'bg-primary text-primary-foreground border-primary' 
                : 'bg-background hover:bg-muted'
            }`}
          >
            {ratio.label}
          </Button>
        );
      })}
    </div>
  );
} 