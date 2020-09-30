export const content = {
  header: {
    logo: {
      altText: 'Amadeus logo',
      imageSrc: './logo.png',
      url: '/',
      textLogo: 'First'
    },
    mobileLogo: {
      altText: 'Amadeus mobile logo',
      imageSrc: './mobile-logo.png',
      url: '/'
    },
    navBar: [{
        title: 'FAQ',
        url: '/faq'
      },
      {
        title: 'General Conditions',
        url: '/conditions'
      },
      {
        title: 'Rules',
        url: '/rules'
      },
      {
        title: 'Profile',
        url: '/profile'
      },
      {
        title: 'Contact Us',
        url: '/contact',
        imageSrc: './icons/ico-letter.png',
        altText: 'Letter icon'
      }
    ],
    mobileMenu: {
      altText: 'Mobile menu icon',
      imageSrc: './icons/ico-mobile-menu.png',
      iconSrc: './icons/ico-close.png'
    }
  },
  homepage: {
    topImage: {
      imageSrc: 'images/top-image.png',
      mobileImageSrc: 'images/mobile-top-image.png'
    },
    title: '<span>Welcome</span> to Amadeus First',
    subtitle: 'The TOP travel agents’ club in Ukraine',
    mobileSubtile: 'The TOP travel agents’ club',
    description: {
      descriptionLeft: {
        paragraph1: '<strong>Amadeus First</strong> is a prestigious and professional community for the welfare of the travel agents.',
        paragraph2: '<strong>Amadeus First</strong> has been created with a view for recognizing the efforts of our Travel Agents community and to reinforce our partnership.',
        paragraph3: {
          text: 'How it works? Click here to learn more!',
          url: '/'
        }
      },
      descriptionRight: {
        paragraph1: 'On every reservation with Amadeus Selling Platform (Classic or Connect), you accumulate points for each AIR / Hotel / Car segment.',
        paragraph2: 'These points can be redeemed into gifts and rewards. All you have to do is just to choose out of a large variety:'
      },
      iconBlockTop: [{
          imageSrc: './icons/ico-plane.png',
          altText: 'Plane icon'
        },
        {
          imageSrc: './icons/ico-hotel.png',
          altText: 'Hotel icon'
        },
        {
          imageSrc: './icons/ico-car.png',
          altText: 'Car icon'
        },
        {
          imageSrc: './icons/ico-shield.png',
          altText: 'Shield icon'
        },
        {
          text: '= Points'
        }
      ],
      iconBlockMiddle: [{
          imageSrc: './icons/ico-man.png',
          altText: 'A man in front of a laptop icon'
        },
        {
          imageSrc: './icons/ico-hand.png',
          altText: 'Hand with coins icon'
        },
        {
          imageSrc: './icons/ico-gift.png',
          altText: 'Gift icon'
        }
      ],
      iconBlockBottom: {
        desktopText: ['More reservations', 'More points', 'More rewards'],
        mobileText: ['Reservations', 'Points', 'Rewards'],
      },
    },
    buttons: {
      register: 'Register as a new user',
      text: 'or',
      login: 'Login'
    },
  },
  footer: {
    copy: '© Amadeus First',
    menu: [{
        title: 'Privacy Policy',
        url: '/'
      },
      {
        title: 'Cookies Policy',
        url: '/'
      }
    ]
  }
};