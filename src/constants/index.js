// src/constants/index.js

// Application Routes
export const ROUTES = {
  HOME: 'home',
  ABOUT: 'about',
  COMMUNITY: 'community',
  BLOG: 'blog',
  BLOG_DETAIL: 'blog-detail',
  CONTACT: 'contact',
};

// Navigation Items
export const NAV_ITEMS = [
  { id: ROUTES.HOME, label: 'Beranda' },
  { id: ROUTES.ABOUT, label: 'Tentang Kami' },
  { id: ROUTES.COMMUNITY, label: 'Komunitas' },
  { id: ROUTES.BLOG, label: 'Blog' },
  { id: ROUTES.CONTACT, label: 'Kontak' },
];

// Categories
export const COMMUNITY_CATEGORIES = ['All', 'Urban', 'Coastal', 'Community', 'Education'];
export const BLOG_CATEGORIES = ['All', 'Tips & Tricks', 'Environment', 'Success Story', 'DIY'];

// Contact Information
export const CONTACT_INFO = {
  EMAIL: 'worklifeariqfadhil@gmail.com',
  PHONE: '+62895384098583',
  INSTAGRAM: '@ariqqfadhil',
  INSTAGRAM_URL: 'https://instagram.com/ariqqfadhil',
};

// Animation Delays
export const ANIMATION_DELAYS = {
  SHORT: 0.1,
  MEDIUM: 0.2,
  LONG: 0.3,
};

// Toast Duration
export const TOAST_DURATION = 3000;

// Loading Simulation Time
export const LOADING_TIME = 800;