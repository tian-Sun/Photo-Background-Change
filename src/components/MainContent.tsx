"use client";

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Upload, Palette, Download } from 'lucide-react';

export default function MainContent() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* 标题 */}
      <header className="text-center mb-8">
        <h2 className="text-4xl font-bold text-[#22223b] mb-2">
          How to Use the AI Headshot Generator in 3 Steps
        </h2>
        <p className="text-lg text-[#a259ff]">
          Transform any selfie into professional studio-quality headshots in minutes
        </p>
      </header>

      {/* 步骤展示 */}
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Step 1 */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-[#7c3aed] via-[#a855f7] to-[#c084fc] text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
              1
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="mb-4">
                <Upload className="h-12 w-12 text-purple-600 mx-auto mb-3" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Upload a Centered Selfie
              </h3>
              <p className="text-gray-600 mb-4">
                Upload a clear, centered selfie (under 2MB) to start creating your professional headshot.
              </p>
              
            </div>
          </div>

          {/* Step 2 */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-[#7c3aed] via-[#a855f7] to-[#c084fc] text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
              2
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="mb-4">
                <Palette className="h-12 w-12 text-purple-600 mx-auto mb-3" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Choose Your Preferred Style
              </h3>
              <p className="text-gray-600 mb-4">
                Select from professional backgrounds including Business, Classic, and Academic.
              </p>
              
            </div>
          </div>

          {/* Step 3 */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-[#7c3aed] via-[#a855f7] to-[#c084fc] text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
              3
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="mb-4">
                <Download className="h-12 w-12 text-purple-600 mx-auto mb-3" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Generate, Preview, and Download
              </h3>
              <p className="text-gray-600 mb-4">
                Adjust your photo position and generate your professional headshot with one click.
              </p>
              
            </div>
          </div>

        </div>

        {/* 底部说明 */}
        <div className="text-center mt-8">
        </div>
      </div>
    </div>
  );
} 