import drewBlog from './markdown/blog-drew-pie.md';
import turtlePub from './markdown/turtle-pub.md';
import multifeature from './markdown/multifeature.md';
import zebras from './markdown/zebra-datasets.md';
import seadragon from './markdown/seadragon.md';
import zebraTexture from '../../assets/zebra-texture.jpeg';
import multiImage from '../../assets/multifeature.jpeg';
import seadragons from '../../assets/seadragons.jpeg';
import turtles from '../../assets/turtle-banner-small.jpg';
import pie from '../../assets/pie.jpeg';

const newsData = [
  {
    title:
      'New publication in the Journal of Experimental Marine Biology and Ecology',
    image: turtles,
    markdown: turtlePub,
    dateString: 'December 1, 2020',
    path: '/jembe-pub-2020',
  },
  {
    title: 'Wild Me Blog: The New PIE Algorithm',
    image: pie,
    markdown: drewBlog,
    dateString: 'November 16, 2020',
    path: '/pie-blog',
  },
  {
    title:
      'Staff publishes research in the Journal of Cetacean Research and Management',
    image: multiImage,
    markdown: multifeature,
    dateString: 'November 3, 2020',
    path: '/jcrm-pub-2020',
  },
  {
    title: 'Seadragon Wildbook official launch!',
    image: seadragons,
    markdown: seadragon,
    dateString: 'October 2, 2020',
    path: '/seadragon-launch',
  },
  {
    title:
      'Wild Me releases two zebra image datasets to spur research into Wildlife photo ID',
    image: zebraTexture,
    markdown: zebras,
    dateString: 'July 28, 2020',
    path: '/zebra-datasets',
  },
];

export default newsData;