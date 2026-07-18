import type { ServiceArea } from '@/lib/types';

const CORE_AREA_SERVICES = [
  'automotive-locksmith-dandenong',
  'car-key-replacement-dandenong',
  'lost-car-keys-dandenong',
  'mobile-car-locksmith-dandenong',
  'vehicle-lockout-assistance-dandenong',
  'motorcycle-locksmith-dandenong',
];

export const serviceAreas: ServiceArea[] = [
  {
    slug: 'dandenong',
    name: 'Dandenong',
    intro:
      'Dandenong is the home base of Auto Locksmith Dandenong, with the business located at 294 Thomas St. Drivers throughout Dandenong can call for mobile automotive locksmith assistance covering car keys, remotes, programming and lockouts.',
    metaTitle: 'Auto Locksmith Dandenong | Car Locksmith Servicing Dandenong VIC',
    metaDescription:
      'Auto Locksmith Dandenong is based in Dandenong VIC, providing mobile car and motorcycle locksmith assistance. Call 0410 380 354.',
    carKeyReplacement:
      'Car key replacement is available for Dandenong drivers who have lost, damaged or worn out a vehicle key, with mobile assistance brought to the vehicle location.',
    lostCarKeys:
      'When all car keys are lost in Dandenong, mobile assistance can attend to assess vehicle access and arrange a new key where possible.',
    vehicleLockout:
      'Vehicle lockout assistance is available across Dandenong for drivers locked out of a car at home, work or a public location.',
    motorcycleLocksmith:
      'Motorcycle locksmith assistance covers lost keys, replacements and spare keys for riders in and around Dandenong.',
    nearby: ['dandenong-north', 'dandenong-south', 'noble-park', 'springvale'],
    relatedServices: CORE_AREA_SERVICES,
    faqs: [
      { question: 'Is Auto Locksmith Dandenong based in Dandenong?', answer: 'Yes, the business is located at 294 Thomas St, Dandenong VIC 3175.' },
      { question: 'Do you offer mobile service in Dandenong?', answer: 'Yes, a mobile automotive locksmith attends vehicle locations throughout Dandenong.' },
      { question: 'Are you available 24 hours in Dandenong?', answer: 'Yes, Auto Locksmith Dandenong operates 24 hours a day, seven days a week.' },
    ],
    featured: true,
  },
  {
    slug: 'dandenong-north',
    name: 'Dandenong North',
    intro:
      'Auto Locksmith Dandenong provides mobile automotive locksmith assistance to Dandenong North, attending homes, workplaces and roadside locations for car and motorcycle key matters.',
    metaTitle: 'Car Locksmith Dandenong North | Auto Locksmith Dandenong',
    metaDescription:
      'Mobile car locksmith assistance for Dandenong North. Auto Locksmith Dandenong covers key replacement, lockouts and programming. Call 0410 380 354.',
    carKeyReplacement:
      'Drivers in Dandenong North can arrange mobile car key replacement when a key is lost, broken or no longer working.',
    lostCarKeys:
      'Lost car key assistance is available in Dandenong North to help regain vehicle access and arrange a new key where possible.',
    vehicleLockout:
      'Vehicle lockout assistance is provided at homes, car parks and workplaces across Dandenong North.',
    motorcycleLocksmith:
      'Motorcycle locksmith assistance is available to Dandenong North riders needing key replacement or spare keys.',
    nearby: ['dandenong', 'noble-park', 'springvale', 'keysborough'],
    relatedServices: CORE_AREA_SERVICES,
    faqs: [
      { question: 'Do you travel to Dandenong North?', answer: 'Yes, mobile automotive locksmith assistance is available throughout Dandenong North.' },
      { question: 'Is there a local office in Dandenong North?', answer: 'No, the business is based at 294 Thomas St, Dandenong VIC 3175, and travels to Dandenong North as a mobile service.' },
      { question: 'Can you assist with motorcycle keys in Dandenong North?', answer: 'Yes, motorcycle locksmith assistance is available in Dandenong North.' },
    ],
  },
  {
    slug: 'dandenong-south',
    name: 'Dandenong South',
    intro:
      'Auto Locksmith Dandenong provides mobile automotive locksmith services to Dandenong South, including its industrial and residential areas, for car and motorcycle key needs.',
    metaTitle: 'Car Locksmith Dandenong South | Auto Locksmith Dandenong',
    metaDescription:
      'Mobile car locksmith service for Dandenong South. Auto Locksmith Dandenong assists with keys, lockouts and programming. Call 0410 380 354.',
    carKeyReplacement:
      'Car key replacement is available for vehicles based in Dandenong South, including workplace and depot locations.',
    lostCarKeys:
      'Lost car key assistance in Dandenong South helps drivers regain access and arrange a new key where possible.',
    vehicleLockout:
      'Vehicle lockout assistance covers homes, industrial estates and car parks throughout Dandenong South.',
    motorcycleLocksmith:
      'Motorcycle locksmith assistance is available for riders located in Dandenong South.',
    nearby: ['dandenong', 'hallam', 'doveton', 'endeavour-hills'],
    relatedServices: CORE_AREA_SERVICES,
    faqs: [
      { question: 'Do you service industrial areas of Dandenong South?', answer: 'Yes, mobile assistance is available at workplace and industrial locations in Dandenong South.' },
      { question: 'Is service available after hours in Dandenong South?', answer: 'Yes, Auto Locksmith Dandenong is available 24 hours a day, seven days a week.' },
      { question: 'Can you help with a vehicle lockout at a depot?', answer: 'Yes, vehicle lockout assistance is provided at depots and workplaces on request.' },
    ],
  },
  {
    slug: 'doveton',
    name: 'Doveton',
    intro:
      'Auto Locksmith Dandenong provides mobile automotive locksmith assistance to Doveton, helping local drivers and riders with car and motorcycle key matters.',
    metaTitle: 'Car Locksmith Doveton | Auto Locksmith Dandenong',
    metaDescription:
      'Mobile car locksmith assistance in Doveton. Auto Locksmith Dandenong covers key replacement and lockouts. Call 0410 380 354.',
    carKeyReplacement:
      'Car key replacement is available for Doveton drivers whose key has been lost, broken or worn out.',
    lostCarKeys:
      'Lost car key assistance in Doveton helps drivers regain vehicle access and arrange a new key where possible.',
    vehicleLockout:
      'Vehicle lockout assistance is available across Doveton for homes, car parks and roadside situations.',
    motorcycleLocksmith:
      'Motorcycle locksmith assistance is available to riders in Doveton needing key replacement or spare keys.',
    nearby: ['dandenong-south', 'hallam', 'endeavour-hills', 'narre-warren'],
    relatedServices: CORE_AREA_SERVICES,
    faqs: [
      { question: 'Do you offer mobile locksmith service in Doveton?', answer: 'Yes, mobile automotive locksmith assistance is available throughout Doveton.' },
      { question: 'Can you assist with a lost car key in Doveton?', answer: 'Yes, lost car key assistance is available to help regain access and arrange a new key.' },
      { question: 'Is there a callout fee for Doveton?', answer: 'Call for current service details, as costs depend on the vehicle and service required.' },
    ],
  },
  {
    slug: 'keysborough',
    name: 'Keysborough',
    intro:
      'Auto Locksmith Dandenong provides mobile automotive locksmith assistance to Keysborough, covering car and motorcycle key services at homes and workplaces.',
    metaTitle: 'Car Locksmith Keysborough | Auto Locksmith Dandenong',
    metaDescription:
      'Mobile car locksmith assistance in Keysborough. Auto Locksmith Dandenong covers keys, lockouts and programming. Call 0410 380 354.',
    carKeyReplacement:
      'Car key replacement is available for Keysborough drivers needing a new key cut and programmed to their vehicle.',
    lostCarKeys:
      'Lost car key assistance in Keysborough helps drivers regain access and arrange a replacement where possible.',
    vehicleLockout:
      'Vehicle lockout assistance is available throughout Keysborough, including shopping centre car parks and residential streets.',
    motorcycleLocksmith:
      'Motorcycle locksmith assistance is available to Keysborough riders for lost keys and spare key requirements.',
    nearby: ['dandenong', 'noble-park', 'springvale', 'springvale-south'],
    relatedServices: CORE_AREA_SERVICES,
    faqs: [
      { question: 'Do you attend shopping centre car parks in Keysborough?', answer: 'Yes, mobile assistance can be arranged at shopping centre car parks in Keysborough.' },
      { question: 'Can you program a replacement key in Keysborough?', answer: 'Yes, car key programming is available on-site for vehicles that support it.' },
      { question: 'Is emergency assistance available in Keysborough?', answer: 'Yes, Auto Locksmith Dandenong is available 24 hours a day, seven days a week.' },
    ],
  },
  {
    slug: 'noble-park',
    name: 'Noble Park',
    intro:
      'Auto Locksmith Dandenong provides mobile automotive locksmith assistance to Noble Park, helping drivers and riders with car and motorcycle key services.',
    metaTitle: 'Car Locksmith Noble Park | Auto Locksmith Dandenong',
    metaDescription:
      'Mobile car locksmith assistance in Noble Park. Auto Locksmith Dandenong covers key replacement and lockouts. Call 0410 380 354.',
    carKeyReplacement:
      'Car key replacement is available for Noble Park drivers whose key has been lost, damaged or is no longer working.',
    lostCarKeys:
      'Lost car key assistance in Noble Park helps drivers regain vehicle access and arrange a replacement where possible.',
    vehicleLockout:
      'Vehicle lockout assistance covers homes, train station car parks and roadside locations in Noble Park.',
    motorcycleLocksmith:
      'Motorcycle locksmith assistance is available to riders in Noble Park needing key replacement or spare keys.',
    nearby: ['dandenong', 'dandenong-north', 'keysborough', 'springvale'],
    relatedServices: CORE_AREA_SERVICES,
    faqs: [
      { question: 'Do you attend station car parks in Noble Park?', answer: 'Yes, mobile assistance can be arranged at station car parks and nearby streets in Noble Park.' },
      { question: 'Can a spare key be cut in Noble Park?', answer: 'Yes, spare car keys can be cut and programmed for Noble Park drivers.' },
      { question: 'Is service available at night in Noble Park?', answer: 'Yes, Auto Locksmith Dandenong operates 24 hours a day, seven days a week.' },
    ],
  },
  {
    slug: 'rowville',
    name: 'Rowville',
    intro:
      'Auto Locksmith Dandenong provides mobile automotive locksmith assistance to Rowville, attending homes and workplaces for car and motorcycle key matters.',
    metaTitle: 'Car Locksmith Rowville | Auto Locksmith Dandenong',
    metaDescription:
      'Mobile car locksmith assistance in Rowville. Auto Locksmith Dandenong covers key replacement and programming. Call 0410 380 354.',
    carKeyReplacement:
      'Car key replacement is available for Rowville drivers, with a mobile locksmith attending the vehicle location.',
    lostCarKeys:
      'Lost car key assistance in Rowville helps drivers regain access and arrange a new key where possible.',
    vehicleLockout:
      'Vehicle lockout assistance is available across Rowville for homes, car parks and workplaces.',
    motorcycleLocksmith:
      'Motorcycle locksmith assistance is available to Rowville riders for lost keys and spare key requirements.',
    nearby: ['endeavour-hills', 'narre-warren', 'hallam', 'dandenong-north'],
    relatedServices: CORE_AREA_SERVICES,
    faqs: [
      { question: 'Do you travel to Rowville?', answer: 'Yes, mobile automotive locksmith assistance is available throughout Rowville.' },
      { question: 'Can you program a car remote in Rowville?', answer: 'Yes, car remote programming is available on-site for compatible vehicles.' },
      { question: 'Is a callout available on weekends in Rowville?', answer: 'Yes, Auto Locksmith Dandenong is available seven days a week.' },
    ],
  },
  {
    slug: 'springvale',
    name: 'Springvale',
    intro:
      'Auto Locksmith Dandenong provides mobile automotive locksmith assistance to Springvale, covering car and motorcycle key services for local drivers and riders.',
    metaTitle: 'Car Locksmith Springvale | Auto Locksmith Dandenong',
    metaDescription:
      'Mobile car locksmith assistance in Springvale. Auto Locksmith Dandenong covers keys, lockouts and programming. Call 0410 380 354.',
    carKeyReplacement:
      'Car key replacement is available for Springvale drivers needing a new key cut and, where required, programmed.',
    lostCarKeys:
      'Lost car key assistance in Springvale helps drivers regain vehicle access and arrange a replacement where possible.',
    vehicleLockout:
      'Vehicle lockout assistance is available throughout Springvale, including shopping strip parking and residential streets.',
    motorcycleLocksmith:
      'Motorcycle locksmith assistance is available to Springvale riders for lost keys and spare key requirements.',
    nearby: ['dandenong', 'noble-park', 'keysborough', 'springvale-south'],
    relatedServices: CORE_AREA_SERVICES,
    faqs: [
      { question: 'Do you attend shopping strip parking in Springvale?', answer: 'Yes, mobile assistance can be arranged at shopping strips and residential streets in Springvale.' },
      { question: 'Can transponder keys be programmed in Springvale?', answer: 'Yes, transponder key programming is available on-site for compatible vehicles.' },
      { question: 'Is Auto Locksmith Dandenong available 24/7 in Springvale?', answer: 'Yes, the business operates 24 hours a day, seven days a week.' },
    ],
  },
  {
    slug: 'springvale-south',
    name: 'Springvale South',
    intro:
      'Auto Locksmith Dandenong provides mobile automotive locksmith assistance to Springvale South, attending homes and workplaces for car and motorcycle key matters.',
    metaTitle: 'Car Locksmith Springvale South | Auto Locksmith Dandenong',
    metaDescription:
      'Mobile car locksmith assistance in Springvale South. Auto Locksmith Dandenong covers key replacement and lockouts. Call 0410 380 354.',
    carKeyReplacement:
      'Car key replacement is available for Springvale South drivers whose key has been lost, damaged or worn out.',
    lostCarKeys:
      'Lost car key assistance in Springvale South helps drivers regain access and arrange a new key where possible.',
    vehicleLockout:
      'Vehicle lockout assistance is available across Springvale South for homes, car parks and roadside locations.',
    motorcycleLocksmith:
      'Motorcycle locksmith assistance is available to Springvale South riders for lost keys and spare key requirements.',
    nearby: ['springvale', 'keysborough', 'dandenong', 'noble-park'],
    relatedServices: CORE_AREA_SERVICES,
    faqs: [
      { question: 'Do you travel to Springvale South?', answer: 'Yes, mobile automotive locksmith assistance is available throughout Springvale South.' },
      { question: 'Can a duplicate key be cut in Springvale South?', answer: 'Yes, duplicate car keys can be cut and programmed for Springvale South drivers.' },
      { question: 'Is service available late at night in Springvale South?', answer: 'Yes, Auto Locksmith Dandenong operates 24 hours a day, seven days a week.' },
    ],
  },
  {
    slug: 'endeavour-hills',
    name: 'Endeavour Hills',
    intro:
      'Auto Locksmith Dandenong provides mobile automotive locksmith assistance to Endeavour Hills, covering car and motorcycle key services for local residents.',
    metaTitle: 'Car Locksmith Endeavour Hills | Auto Locksmith Dandenong',
    metaDescription:
      'Mobile car locksmith assistance in Endeavour Hills. Auto Locksmith Dandenong covers keys, lockouts and programming. Call 0410 380 354.',
    carKeyReplacement:
      'Car key replacement is available for Endeavour Hills drivers, with mobile assistance brought to the vehicle location.',
    lostCarKeys:
      'Lost car key assistance in Endeavour Hills helps drivers regain vehicle access and arrange a replacement where possible.',
    vehicleLockout:
      'Vehicle lockout assistance is available throughout Endeavour Hills for homes, car parks and workplaces.',
    motorcycleLocksmith:
      'Motorcycle locksmith assistance is available to Endeavour Hills riders for lost keys and spare key requirements.',
    nearby: ['doveton', 'hallam', 'narre-warren', 'rowville'],
    relatedServices: CORE_AREA_SERVICES,
    faqs: [
      { question: 'Do you service Endeavour Hills?', answer: 'Yes, mobile automotive locksmith assistance is available throughout Endeavour Hills.' },
      { question: 'Can you assist with a vehicle lockout at a shopping centre?', answer: 'Yes, vehicle lockout assistance is available at shopping centre car parks in Endeavour Hills.' },
      { question: 'Is motorcycle key assistance available in Endeavour Hills?', answer: 'Yes, motorcycle locksmith assistance is available in Endeavour Hills.' },
    ],
  },
  {
    slug: 'hampton-park',
    name: 'Hampton Park',
    intro:
      'Auto Locksmith Dandenong provides mobile automotive locksmith assistance to Hampton Park, helping drivers and riders with car and motorcycle key needs.',
    metaTitle: 'Car Locksmith Hampton Park | Auto Locksmith Dandenong',
    metaDescription:
      'Mobile car locksmith assistance in Hampton Park. Auto Locksmith Dandenong covers key replacement and lockouts. Call 0410 380 354.',
    carKeyReplacement:
      'Car key replacement is available for Hampton Park drivers whose key has been lost, broken or worn out.',
    lostCarKeys:
      'Lost car key assistance in Hampton Park helps drivers regain access and arrange a replacement where possible.',
    vehicleLockout:
      'Vehicle lockout assistance is available across Hampton Park for homes, car parks and roadside situations.',
    motorcycleLocksmith:
      'Motorcycle locksmith assistance is available to Hampton Park riders for lost keys and spare key requirements.',
    nearby: ['narre-warren-south', 'cranbourne', 'hallam', 'doveton'],
    relatedServices: CORE_AREA_SERVICES,
    faqs: [
      { question: 'Do you travel to Hampton Park?', answer: 'Yes, mobile automotive locksmith assistance is available throughout Hampton Park.' },
      { question: 'Can you replace a lost car key in Hampton Park?', answer: 'Yes, lost car key assistance and replacement is available for Hampton Park drivers.' },
      { question: 'Is a 24-hour service available in Hampton Park?', answer: 'Yes, Auto Locksmith Dandenong operates 24 hours a day, seven days a week.' },
    ],
  },
  {
    slug: 'hallam',
    name: 'Hallam',
    intro:
      'Auto Locksmith Dandenong provides mobile automotive locksmith assistance to Hallam, covering car and motorcycle key services for local drivers and riders.',
    metaTitle: 'Car Locksmith Hallam | Auto Locksmith Dandenong',
    metaDescription:
      'Mobile car locksmith assistance in Hallam. Auto Locksmith Dandenong covers keys, lockouts and programming. Call 0410 380 354.',
    carKeyReplacement:
      'Car key replacement is available for Hallam drivers needing a new key cut and, where required, programmed.',
    lostCarKeys:
      'Lost car key assistance in Hallam helps drivers regain vehicle access and arrange a replacement where possible.',
    vehicleLockout:
      'Vehicle lockout assistance is available throughout Hallam for homes, car parks and industrial areas.',
    motorcycleLocksmith:
      'Motorcycle locksmith assistance is available to Hallam riders for lost keys and spare key requirements.',
    nearby: ['dandenong-south', 'doveton', 'endeavour-hills', 'hampton-park'],
    relatedServices: CORE_AREA_SERVICES,
    faqs: [
      { question: 'Do you service industrial estates in Hallam?', answer: 'Yes, mobile assistance is available at workplace and industrial locations in Hallam.' },
      { question: 'Can car remotes be programmed in Hallam?', answer: 'Yes, car remote programming is available on-site for compatible vehicles.' },
      { question: 'Is service available overnight in Hallam?', answer: 'Yes, Auto Locksmith Dandenong operates 24 hours a day, seven days a week.' },
    ],
  },
  {
    slug: 'berwick',
    name: 'Berwick',
    intro:
      'Auto Locksmith Dandenong provides mobile automotive locksmith assistance to Berwick, attending homes and workplaces for car and motorcycle key matters.',
    metaTitle: 'Car Locksmith Berwick | Auto Locksmith Dandenong',
    metaDescription:
      'Mobile car locksmith assistance in Berwick. Auto Locksmith Dandenong covers key replacement and programming. Call 0410 380 354.',
    carKeyReplacement:
      'Car key replacement is available for Berwick drivers, with a mobile locksmith attending the vehicle location.',
    lostCarKeys:
      'Lost car key assistance in Berwick helps drivers regain access and arrange a new key where possible.',
    vehicleLockout:
      'Vehicle lockout assistance is available across Berwick for homes, shopping centres and roadside locations.',
    motorcycleLocksmith:
      'Motorcycle locksmith assistance is available to Berwick riders for lost keys and spare key requirements.',
    nearby: ['narre-warren', 'narre-warren-south', 'hallam', 'cranbourne-east'],
    relatedServices: CORE_AREA_SERVICES,
    faqs: [
      { question: 'Do you travel to Berwick?', answer: 'Yes, mobile automotive locksmith assistance is available throughout Berwick.' },
      { question: 'Can a spare key be cut in Berwick?', answer: 'Yes, spare car keys can be cut and programmed for Berwick drivers.' },
      { question: 'Is emergency assistance available in Berwick?', answer: 'Yes, Auto Locksmith Dandenong is available 24 hours a day, seven days a week.' },
    ],
  },
  {
    slug: 'narre-warren',
    name: 'Narre Warren',
    intro:
      'Auto Locksmith Dandenong provides mobile automotive locksmith assistance to Narre Warren, covering car and motorcycle key services for local drivers and riders.',
    metaTitle: 'Car Locksmith Narre Warren | Auto Locksmith Dandenong',
    metaDescription:
      'Mobile car locksmith assistance in Narre Warren. Auto Locksmith Dandenong covers keys, lockouts and programming. Call 0410 380 354.',
    carKeyReplacement:
      'Car key replacement is available for Narre Warren drivers whose key has been lost, broken or worn out.',
    lostCarKeys:
      'Lost car key assistance in Narre Warren helps drivers regain vehicle access and arrange a replacement where possible.',
    vehicleLockout:
      'Vehicle lockout assistance is available throughout Narre Warren, including shopping centre car parks.',
    motorcycleLocksmith:
      'Motorcycle locksmith assistance is available to Narre Warren riders for lost keys and spare key requirements.',
    nearby: ['berwick', 'endeavour-hills', 'hallam', 'narre-warren-south'],
    relatedServices: CORE_AREA_SERVICES,
    faqs: [
      { question: 'Do you attend shopping centre car parks in Narre Warren?', answer: 'Yes, mobile assistance can be arranged at shopping centre car parks in Narre Warren.' },
      { question: 'Can transponder keys be programmed in Narre Warren?', answer: 'Yes, transponder key programming is available on-site for compatible vehicles.' },
      { question: 'Is Auto Locksmith Dandenong available 24/7 in Narre Warren?', answer: 'Yes, the business operates 24 hours a day, seven days a week.' },
    ],
  },
  {
    slug: 'narre-warren-south',
    name: 'Narre Warren South',
    intro:
      'Auto Locksmith Dandenong provides mobile automotive locksmith assistance to Narre Warren South, attending homes and workplaces for car and motorcycle key matters.',
    metaTitle: 'Car Locksmith Narre Warren South | Auto Locksmith Dandenong',
    metaDescription:
      'Mobile car locksmith assistance in Narre Warren South. Auto Locksmith Dandenong covers key replacement and lockouts. Call 0410 380 354.',
    carKeyReplacement:
      'Car key replacement is available for Narre Warren South drivers, with mobile assistance brought to the vehicle.',
    lostCarKeys:
      'Lost car key assistance in Narre Warren South helps drivers regain access and arrange a new key where possible.',
    vehicleLockout:
      'Vehicle lockout assistance is available across Narre Warren South for homes and residential car parks.',
    motorcycleLocksmith:
      'Motorcycle locksmith assistance is available to Narre Warren South riders for lost keys and spare key requirements.',
    nearby: ['narre-warren', 'berwick', 'hampton-park', 'cranbourne'],
    relatedServices: CORE_AREA_SERVICES,
    faqs: [
      { question: 'Do you travel to Narre Warren South?', answer: 'Yes, mobile automotive locksmith assistance is available throughout Narre Warren South.' },
      { question: 'Can a duplicate key be cut in Narre Warren South?', answer: 'Yes, duplicate car keys can be cut and programmed for Narre Warren South drivers.' },
      { question: 'Is service available late at night in Narre Warren South?', answer: 'Yes, Auto Locksmith Dandenong operates 24 hours a day, seven days a week.' },
    ],
  },
  {
    slug: 'cranbourne',
    name: 'Cranbourne',
    intro:
      'Auto Locksmith Dandenong provides mobile automotive locksmith assistance to Cranbourne, covering car and motorcycle key services for local drivers and riders.',
    metaTitle: 'Car Locksmith Cranbourne | Auto Locksmith Dandenong',
    metaDescription:
      'Mobile car locksmith assistance in Cranbourne. Auto Locksmith Dandenong covers keys, lockouts and programming. Call 0410 380 354.',
    carKeyReplacement:
      'Car key replacement is available for Cranbourne drivers needing a new key cut and, where required, programmed.',
    lostCarKeys:
      'Lost car key assistance in Cranbourne helps drivers regain vehicle access and arrange a replacement where possible.',
    vehicleLockout:
      'Vehicle lockout assistance is available throughout Cranbourne for homes, car parks and roadside locations.',
    motorcycleLocksmith:
      'Motorcycle locksmith assistance is available to Cranbourne riders for lost keys and spare key requirements.',
    nearby: ['hampton-park', 'narre-warren-south', 'cranbourne-east', 'berwick'],
    relatedServices: CORE_AREA_SERVICES,
    faqs: [
      { question: 'Do you travel to Cranbourne?', answer: 'Yes, mobile automotive locksmith assistance is available throughout Cranbourne.' },
      { question: 'Can car key programming be done in Cranbourne?', answer: 'Yes, car key programming is available on-site for compatible vehicles.' },
      { question: 'Is a 24-hour service available in Cranbourne?', answer: 'Yes, Auto Locksmith Dandenong operates 24 hours a day, seven days a week.' },
    ],
  },
  {
    slug: 'cranbourne-east',
    name: 'Cranbourne East',
    intro:
      'Auto Locksmith Dandenong provides mobile automotive locksmith assistance to Cranbourne East, attending homes and workplaces for car and motorcycle key matters.',
    metaTitle: 'Car Locksmith Cranbourne East | Auto Locksmith Dandenong',
    metaDescription:
      'Mobile car locksmith assistance in Cranbourne East. Auto Locksmith Dandenong covers key replacement and lockouts. Call 0410 380 354.',
    carKeyReplacement:
      'Car key replacement is available for Cranbourne East drivers whose key has been lost, broken or worn out.',
    lostCarKeys:
      'Lost car key assistance in Cranbourne East helps drivers regain access and arrange a replacement where possible.',
    vehicleLockout:
      'Vehicle lockout assistance is available across Cranbourne East for homes, car parks and roadside situations.',
    motorcycleLocksmith:
      'Motorcycle locksmith assistance is available to Cranbourne East riders for lost keys and spare key requirements.',
    nearby: ['cranbourne', 'berwick', 'narre-warren-south', 'hampton-park'],
    relatedServices: CORE_AREA_SERVICES,
    faqs: [
      { question: 'Do you travel to Cranbourne East?', answer: 'Yes, mobile automotive locksmith assistance is available throughout Cranbourne East.' },
      { question: 'Can a spare key be cut in Cranbourne East?', answer: 'Yes, spare car keys can be cut and programmed for Cranbourne East drivers.' },
      { question: 'Is emergency assistance available in Cranbourne East?', answer: 'Yes, Auto Locksmith Dandenong is available 24 hours a day, seven days a week.' },
    ],
  },
];

export function getServiceAreaBySlug(slug: string): ServiceArea | undefined {
  return serviceAreas.find((a) => a.slug === slug);
}

export function getNearbyAreas(area: ServiceArea): ServiceArea[] {
  return area.nearby
    .map((slug) => getServiceAreaBySlug(slug))
    .filter((a): a is ServiceArea => Boolean(a));
}

export const featuredAreas = serviceAreas.filter((a) => a.featured);
