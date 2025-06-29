import { PaymentPlan } from '@/types/payment';

export const PLANS: Record<string, PaymentPlan> = {
  free: {
    id: 'free',
    name: 'Free',
    price: 0,
    credits: 1,
    description: 'Free Try',
    features: [
      'One free trial per account per day',
      'Basic style options',
      'Access to free AI headshot generator',
      'Flux Kontext Pro integration',
      'Standard resolution'
    ]
  },
  premium: {
    id: 'premium',
    name: 'Premium',
    price: 29,
    credits: 100,
    description: 'Best value for regular users',
    popular: true,
    features: [
      '100 AI photo generations',
      'Advanced style options',
      'High quality output',
      'Priority email support',
      'Access to all styles'
    ]
  }
};

export const DODOPAYMENT_CONFIG = {
  shopId: process.env.DODOPAYMENT_SHOP_ID!,
  token: process.env.DODOPAYMENT_TOKEN!,
  premiumPaymentLink: process.env.DODO_PREMIUM_PAYMENT_LINK!,
  webhookSecret: process.env.DODO_WEBHOOK_SECRET!,
};

export const SITE_CONFIG = {
  name: 'AIHeadshotGen.com',
  description: 'Transform your photos into professional headshots with AI',
  url: process.env.NEXTAUTH_URL || 'http://localhost:3000',
}; 