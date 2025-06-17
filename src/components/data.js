import image1 from '../images/tour-1.jpeg'
import image2 from '../images/tour-2.jpeg'
import image3 from '../images/tour-3.jpeg'
import image4 from '../images/tour-4.jpeg'

export const pageLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#about', text: 'about' },
  { id: 3, href: '#services', text: 'services' },
  { id: 4, href: '#tours', text: 'tours' },
]

export const navLogos = [
  { id: 1, href: 'https://www.facebook.com', faRef: 'fab fa-facebook' },
  { id: 2, href: 'https://www.twitter.com', faRef: 'fab fa-twitter' },
  {
    id: 3,
    href: 'https://www.squarespace.com',
    faRef: 'fab fa-squarespace',
  },
]

export const services = [
  {
    id: 1,
    faRef: 'fas fa-wallet fa-fw',
    title: 'saving money',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
  {
    id: 2,
    faRef: 'fas fa-tree fa-fw',
    title: 'endless hiking',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
  {
    id: 3,
    faRef: 'fas fa-socks fa-fw',
    title: 'endless hiking',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
]

export const tours = [
  {
    id: 1,
    image: image1,
    date: 'august 26th, 2020',
    title: 'Tibet Adventure',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'china',
    days: 6,
    price: 2100,
  },
  {
    id: 2,
    image: image2,
    date: 'october 1th, 2020',
    title: 'best of java',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'indonesia',
    days: 11,
    price: 1400,
  },
  {
    id: 3,
    image: image3,
    date: 'september 15th, 2020',
    title: 'explore hong kong',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'hong kong',
    days: 8,
    price: 5000,
  },
  {
    id: 4,
    image: image4,
    date: 'december 5th, 2019',
    title: 'kenya highlights',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'kenya',
    days: 20,
    price: 3300,
  },
]
