module.exports = {
  email: 'ian24fd24@gmail.com',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/badriian24',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/fiqih_badrian',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/fiqih_badrian',
    },
    {
      name: 'Trakteer',
      url: 'https://trakteer.id/badriian24',
    },
    {
      name: 'Discord',
      url: 'https://discord.com/channels/@me/776714971782053889',
    },
  ],

  navLinks: [
    {
      name: 'Home',
      url: '/',
    },
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
