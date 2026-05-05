export type ServiceItem = {
  name: string;
  from?: string;
  duration?: string;
  description?: string;
};

export type ServiceCategory = {
  id: string;
  number: string;
  title: string;
  intro: string;
  items: ServiceItem[];
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'cuts',
    number: '01',
    title: 'Cuts',
    intro:
      'Considered, conversational. We take the time to understand the hair and the person, then cut to suit both.',
    items: [
      {
        name: 'Ladies Cut & Finish',
        from: '€55',
        duration: '60 min',
        description:
          'Consultation, shampoo, precision cut and a polished finish.',
      },
      {
        name: 'Restyle',
        from: '€70',
        duration: '75 min',
        description:
          'A longer appointment for those wanting a meaningful change.',
      },
      {
        name: 'Gentlemen’s Cut',
        from: '€28',
        duration: '30 min',
        description: 'Sharp, considered, finished with care.',
      },
      {
        name: 'Children (under 12)',
        from: '€18',
        duration: '30 min',
      },
      {
        name: 'Dry Cut',
        from: '€35',
        duration: '30 min',
        description: 'A quick refresh between full appointments.',
      },
      {
        name: 'Fringe Trim',
        from: 'Complimentary',
        description: 'For our regular guests, between appointments.',
      },
    ],
  },
  {
    id: 'colour',
    number: '02',
    title: 'Colour',
    intro:
      'Wella and Sebastian Professional colour, used quietly. Lived-in tones, not loud statements.',
    items: [
      {
        name: 'Half Head Foils',
        from: '€95',
        duration: '90 min',
        description:
          'Soft dimension around the face and through the parting.',
      },
      {
        name: 'Full Head Foils',
        from: '€125',
        duration: '2 hr',
        description: 'A complete, dimensional lift from root to ends.',
      },
      {
        name: 'Balayage',
        from: '€140',
        duration: '2 hr 30',
        description:
          'Hand-painted, sun-soft. Designed to grow out beautifully.',
      },
      {
        name: 'Root Tint',
        from: '€55',
        duration: '60 min',
        description: 'Permanent colour through the regrowth.',
      },
      {
        name: 'Toner / Gloss',
        from: '€30',
        duration: '30 min',
        description: 'A subtle shift in tone and shine, between visits.',
      },
      {
        name: 'Colour Correction',
        from: 'Consultation',
        description:
          'By appointment, after a complimentary in-studio consultation.',
      },
    ],
  },
  {
    id: 'styling',
    number: '03',
    title: 'Styling',
    intro:
      'For the days that ask for a little more — weddings, occasions, or simply because.',
    items: [
      {
        name: 'Blow-Dry',
        from: '€32',
        duration: '40 min',
      },
      {
        name: 'Long Hair Blow-Dry',
        from: '€38',
        duration: '45 min',
      },
      {
        name: 'Occasion Hair',
        from: '€60',
        duration: '60 min',
        description:
          'Soft up-styles, half-up looks, and considered finishing.',
      },
      {
        name: 'Bridal Trial',
        from: '€60',
        duration: '60 min',
      },
      {
        name: 'Bridal — Day Of',
        from: '€90',
        duration: '75 min',
      },
      {
        name: 'Treatment & Finish',
        from: '€45',
        duration: '45 min',
        description: 'Restorative mask, scalp ritual, and a polished finish.',
      },
    ],
  },
];
