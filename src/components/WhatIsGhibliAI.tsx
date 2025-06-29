'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Monitor, MessageSquare, Code } from 'lucide-react';

export default function WhatIs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cloud Image */}
        <div className="text-center mb-16">
          <p className="text-muted-foreground mb-8">Transform Your Selfies into Professional Headshots with Advanced AI Technology</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
         

          {/* Left Image */}
          <div className="relative">
            <Card className="overflow-hidden shadow-lg">
              <CardContent className="p-0">
                <Image
<<<<<<< HEAD
                  src="/demo/result2.jpg"
                  alt="Minecraft style characters"
=======
                  src="/demo/result2.png"
                  alt="AI generated professional headshot"
>>>>>>> peng
                  width={500}
                  height={400}
                  className="w-full h-auto"
                />
              </CardContent>
            </Card>
          </div>

 {/* Right Content */}
 <div className="space-y-8">
            <h2 className="text-4xl font-bold">What Is an AI Headshot Generator?</h2>
            <p className="text-lg text-muted-foreground">
              An AI headshot generator is a cloud-based application that converts everyday selfies into studio-quality headshots through machine-learning models. Instead of spending hours booking a photographer and waiting days for edits, you rely on an AI headshot generator to simulate flattering light, tidy backgrounds, and professional attire in seconds.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <Monitor className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Professional Studio Quality</h3>
                  <p className="text-muted-foreground">
                    Transform everyday selfies into polished, professional headshots with our advanced AI technology that simulates studio lighting and settings.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <MessageSquare className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Three High-Impact Styles</h3>
                  <p className="text-muted-foreground">
                    Choose from Corporate Gray, Modern Tech Blue, and Bright Daylight White backgrounds—covering 80 percent of real-world business scenarios.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <Code className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Instant Results</h3>
                  <p className="text-muted-foreground">
                    Get your professional headshots in seconds, eliminating the need for expensive photo sessions and long waiting times for edits.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
