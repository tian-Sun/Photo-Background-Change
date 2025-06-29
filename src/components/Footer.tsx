'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="/logo.png"
                alt="Minecraft Style Generator"
                width={32}
                height={32}
                className="rounded-md"
              />
              <span className="text-xl font-bold">AIHeadshotGen.com</span>
            </div>
            <div className="space-y-2 text-muted-foreground max-w-md">
                <p>Try our AI headshot generator and transform any selfie into three studio-quality headshots in minutes. No photographer needed, fully private, perfect for LinkedIn and résumés.</p>
                <p></p>
            </div>
          </div>

          {/* About */}
          <div>
            <h4 className="font-semibold mb-4">About</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <Link href="/#feature" className="hover:text-foreground transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="hover:text-foreground transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          {/* <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <a href="https://github.com/ghibli/desktop" className="hover:text-foreground transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://docs.ghibli.ai" className="hover:text-foreground transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="https://discord.gg/ghibli" className="hover:text-foreground transition-colors">
                  Discord Community
                </a>
              </li>
            </ul>
          </div>*/}

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <a href="/terms" className="hover:text-foreground transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-foreground transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div> 

        <Separator className="mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div>
           
          </div>
          <div className="flex items-center gap-4">
            <span>© 2025 • AIHeadshotGen.com All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
