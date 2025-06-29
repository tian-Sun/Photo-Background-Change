'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Michael Chen',
    role: 'Tech Startup Founder',
    avatar: 'https://ext.same-assets.com/3798290750/2048697749.png',
    rating: 5,
    content: "This AI headshot generator is a game-changer! Got my professional headshots in minutes with the Modern Tech Blue background. Perfect for my LinkedIn and company website.",
  },
  {
    name: 'Sarah Williams',
    role: 'Executive Coach',
    avatar: 'https://ext.same-assets.com/3798290750/64329983.png',
    rating: 5,
    content: "The Bright Daylight White background is exactly what I needed for my coaching profile. Quick, professional, and the quality is outstanding. Best investment for my personal brand!",
  },
  {
    name: 'James Anderson',
    role: 'Corporate Director',
    avatar: 'https://ext.same-assets.com/3798290750/35535824.png',
    rating: 5,
    content: "Corporate Gray background option is perfect for my industry. Generated three different styles in 90 seconds - saved me hours of scheduling and studio time. Highly recommended!",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6">User Reviews</Badge>
          <h2 className="text-4xl font-bold mb-4">What Our Users Say About Their AI Headshots</h2>
          <p className="text-lg text-muted-foreground">
            Real feedback from professionals who transformed their selfies into studio-quality headshots.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={testimonial.name} className="shadow-card hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={`${testimonial.name}-star-${i}`} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-muted-foreground italic">
                  "{testimonial.content}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
