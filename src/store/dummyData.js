export const services = [
  {
    id: 1,
    name: 'Sparkle City Wash',
    avatar: 'https://loremflickr.com/320/240/carwash?lock=1',
    location: '123 Main St',
    ratings: 4.7,
    specialties: ['Exterior Wash', 'Interior Cleaning'],
    availableSlots: [
      { date: '2025-06-15', times: ['09:00', '11:00'] },
      { date: '2025-06-16', times: ['10:00', '14:00'] }
    ]
  },
  {
    id: 2,
    name: 'Shiny Wheels Auto Spa',
    avatar: 'https://loremflickr.com/320/240/carwash?lock=2',
    location: '456 Pine Rd',
    ratings: 4.8,
    specialties: ['Waxing', 'Polishing'],
    availableSlots: [
      { date: '2025-06-15', times: ['13:00', '15:00'] }
    ]
  },
  {
    id: 3,
    name: 'Bubble Bath Garage',
    avatar: 'https://loremflickr.com/320/240/carwash?lock=3',
    location: '789 Oak Ave',
    ratings: 4.6,
    specialties: ['Interior Detailing'],
    availableSlots: [
      { date: '2025-06-17', times: ['09:30', '16:00'] }
    ]
  },
  {
    id: 4,
    name: 'Supreme Shine Hub',
    avatar: 'https://loremflickr.com/320/240/carwash?lock=4',
    location: '1010 Maple Dr',
    ratings: 4.9,
    specialties: ['Exterior Wash', 'Paint Protection'],
    availableSlots: [
      { date: '2025-06-18', times: ['08:00', '12:00'] }
    ]
  },
  {
    id: 5,
    name: 'Dazzle & Drive',
    avatar: 'https://loremflickr.com/320/240/carwash?lock=5',
    location: '2020 Elm St',
    ratings: 4.5,
    specialties: ['Full Detailing'],
    availableSlots: [
      { date: '2025-06-19', times: ['10:30', '14:30'] }
    ]
  }
];

export const products = [
  { id: 1, name: 'Car Shampoo', code: 'CS001', qty: 10, category: 'Cleaning' },
  { id: 2, name: 'Microfiber Cloth', code: 'MC002', qty: 25, category: 'Accessories' },
  { id: 3, name: 'Wheel Cleaner', code: 'WC003', qty: 15, category: 'Cleaning' },
  { id: 4, name: 'Glass Spray', code: 'GS004', qty: 30, category: 'Cleaning' },
  { id: 5, name: 'Tire Shine', code: 'TS005', qty: 18, category: 'Accessories' },
  { id: 6, name: 'Interior Wipes', code: 'IW006', qty: 12, category: 'Cleaning' },
  { id: 7, name: 'Wax Polish', code: 'WP007', qty: 8, category: 'Cleaning' },
  { id: 8, name: 'Air Freshener', code: 'AF008', qty: 20, category: 'Accessories' }
];

export const appointments = [
  { id: 1, serviceId: 1, customerName: 'John Doe', date: '2025-06-15', time: '09:00', package: 'Basic Wash' },
  { id: 2, serviceId: 2, customerName: 'Jane Smith', date: '2025-06-15', time: '13:00', package: 'Deluxe Wash' },
  { id: 3, serviceId: 3, customerName: 'Mark Lee', date: '2025-06-17', time: '09:30', package: 'Detailing' }
];
