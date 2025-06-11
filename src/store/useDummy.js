// ✨ customer-refactor
import { create } from 'zustand';
import {
  services as sampleServices,
  products as sampleProducts,
  appointments as sampleAppointments,
} from './dummyData';

const useDummy = create((set, get) => ({
  services: sampleServices,
  products: sampleProducts,
  appointments: sampleAppointments,
  // selected filter category
  selectedCategory: 'Exterior Wash',
  packages: {
    Exterior: true,
    Interior: false,
    Detailing: false,
    'Paint Protection': false
  },
  providerSlots: [],

  setSelectedCategory: (cat) => set({ selectedCategory: cat }),

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
  })),

  markAppointmentDone: (id) => set(state => ({
    appointments: state.appointments.map(a => a.id === id ? { ...a, status: 'done' } : a)
  })),

  togglePackage: (name) => set(state => ({
    packages: { ...state.packages, [name]: !state.packages[name] }
  })),

  addSlot: (slot) => set(state => ({ providerSlots: [...state.providerSlots, slot] })),
  deleteSlot: (id) => set(state => ({ providerSlots: state.providerSlots.filter(s => s.id !== id) }))
}));

export default useDummy;
