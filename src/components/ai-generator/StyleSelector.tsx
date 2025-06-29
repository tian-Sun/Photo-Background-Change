'use client';

import { Button } from '@/components/ui/button';

interface StyleSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

const styles = [
  {
    id: 'professional',
    name: 'Business',
    image: '/demo/person.png',
  },
  {
    id: 'casual',
    name: 'Classic',
    image: '/demo/result.png',
  },
  {
    id: 'artistic',
    name: 'Workplace',
    image: '/demo/result2.png',
  }
];

export default function StyleSelector({ value, onChange }: StyleSelectorProps) {
  return (
    <div className="grid grid-cols-3 gap-3">
      {styles.map((style) => {
        const isSelected = value === style.id;
        return (
          <Button
            key={style.id}
            variant="ghost"
            onClick={() => onChange(style.id)}
            className={`flex flex-col items-center p-2 h-auto aspect-square transition-all duration-200 ${
              isSelected 
                ? 'bg-primary/10 border-2 border-primary text-primary' 
                : 'border-2 border-muted hover:border-muted-foreground/50 hover:bg-muted/50'
            }`}
          >
            <div className="w-full h-full rounded-md overflow-hidden border border-muted-foreground/20">
              <img
                src={style.image}
                alt={style.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            <span className={`text-sm font-medium mt-2 transition-colors ${
              isSelected ? 'text-primary' : 'text-muted-foreground'
            }`}>
              {style.name}
            </span>
          </Button>
        );
      })}
    </div>
  );
}
