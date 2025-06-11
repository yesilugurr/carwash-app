import { create } from 'zustand';

const useDummy = create((set, get) => ({
  services: [
    {
      id: 1,
      name: 'Quick Clean',
      avatar: '/avatars/service1.png',
      location: '123 Main St',
      ratings: 4.5,
      specialties: ['Exterior Wash', 'Interior Cleaning'],
      availableSlots: [
        { date: '2025-06-15', times: ['09:00', '11:00'] },
        { date: '2025-06-16', times: ['10:00', '14:00'] }
      ]
    },
    {
      id: 2,
      name: 'Deluxe Detail',
      avatar: '/avatars/service2.png',
      location: '456 Pine Rd',
      ratings: 4.8,
      specialties: ['Exterior Wash', 'Waxing'],
      availableSlots: [
        { date: '2025-06-15', times: ['13:00', '15:00'] }
      ]
    }
  ],
  products: [
    { id: 1, name: 'Car Shampoo', code: 'CS001', qty: 10, category: 'Cleaning' },
    { id: 2, name: 'Microfiber Cloth', code: 'MC002', qty: 25, category: 'Accessories' }
  ],
  appointments: [
    { id: 1, serviceId: 1, customerName: 'John Doe', date: '2025-06-15', time: '09:00', package: 'Basic Wash' }
  ],

  addService: (service) => set(state => ({ services: [...state.services, service] })),
  updateService: (id, data) => set(state => ({
    services: state.services.map(s => s.id === id ? { ...s, ...data } : s)
  })),
  deleteService: (id) => set(state => ({
    services: state.services.filter(s => s.id !== id)
  })),

  addProduct: (product) => set(state => ({ products: [...state.products, product] })),
  updateProduct: (id, data) => set(state => ({
    products: state.products.map(p => p.id === id ? { ...p, ...data } : p)
  })),
  deleteProduct: (id) => set(state => ({
    products: state.products.filter(p => p.id !== id)
  })),
  updateStock: (productId, delta) => set(state => ({
    products: state.products.map(p => p.id === productId ? { ...p, qty: p.qty + delta } : p)
  })),

  addAppointment: (appointment) => set(state => ({ appointments: [...state.appointments, appointment] })),
  updateAppointment: (id, data) => set(state => ({
    appointments: state.appointments.map(a => a.id === id ? { ...a, ...data } : a)
  })),
  deleteAppointment: (id) => set(state => ({
    appointments: state.appointments.filter(a => a.id !== id)
  }))
}));

export default useDummy;
