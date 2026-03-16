import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Services',
      href: getPermalink('/services'),
    },
    {
      text: 'Training',
      href: getPermalink('/training'),
    },
    {
      text: 'Conferences',
      href: getPermalink('/conferences'),
    },
    {
      text: 'Community',
      href: getPermalink('/community'),
    },
    {
      text: 'Certifications',
      href: getPermalink('/certifications'),
    },
    {
      text: 'About',
      href: getPermalink('/about'),
    },
  ],
  actions: [{ text: 'Contact Us', href: getPermalink('/contact') }],
};

export const footerData = {
  links: [
    {
      title: 'Company',
      links: [
        { text: 'About', href: getPermalink('/about') },
        { text: 'Certifications', href: getPermalink('/certifications') },
        { text: 'Contact', href: getPermalink('/contact') },
        { text: 'Brand Assets', href: getPermalink('/brand') },
        { text: 'Legal', href: getPermalink('/legal') },
      ],
    },
    {
      title: 'Resources',
      links: [
        { text: 'Our Services', href: getPermalink('/services') },
        { text: 'Training', href: getPermalink('/training') },
        { text: 'Conferences', href: getPermalink('/conferences') },
        { text: 'Community', href: getPermalink('/community') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/legal') },
    { text: 'Privacy Policy', href: getPermalink('/legal') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://twitter.com/countrycloudboy' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/kristopherjturner' },
    { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: 'https://youtube.com/@countrycloudboy' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/hybridsolutionscloud' },
  ],
  footNote: `
    &copy; ${new Date().getFullYear()} Hybrid Cloud Solutions, LLC. All rights reserved.
  `,
};
