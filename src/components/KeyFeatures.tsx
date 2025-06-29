'use client';

import { Card, CardContent } from '@/components/ui/card';
import {
  Clock,
  DollarSign,
  Image as ImageIcon,
  Shield,
  Sparkles,
  Lock
} from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: 'Save Precious Time',
    description: 'Traditional photoshoots take days to schedule and complete. Our AI headshot generator delivers professional results in just minutes.',
  },
  {
    icon: DollarSign,
    title: 'Budget-Friendly Solution',
    description: 'Skip the hundreds spent on professional photographers. Get studio-quality headshots for less than the cost of lunch.',
  },
  {
    icon: Sparkles,
    title: 'Natural, Lifelike Quality',
    description: 'Unlike other AI tools that over-smooth faces, our technology preserves natural textures and lifelike skin tones to maintain authenticity.',
  },
  {
    icon: Lock,
    title: 'End-to-End Privacy',
    description: 'Your uploads are protected with end-to-end encryption. Photos are automatically deleted after 24 hours unless cloud storage is selected.',
  },
  {
    icon: Shield,
    title: 'Data Protection',
    description: 'We never train future AI models on your photos without explicit permission, ensuring your likeness remains yours alone.',
  },
  {
    icon: DollarSign,
    title: 'Transparent Pricing',
    description: 'One flat credit unlocks all styles at full resolution—no watermarks, no hidden tiers, just straightforward pricing.',
  },
];

export default function KeyFeatures() {
  return (
    <section id="feature" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Professional Headshots Made Simple</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the future of professional headshots with our AI-powered solution. We've solved the biggest pain points of traditional photography while ensuring privacy and affordability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={feature.title} className="border-0 shadow-card hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
