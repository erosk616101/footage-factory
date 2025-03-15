
export interface MediaItem {
  id: string;
  title: string;
  type: 'video' | 'photo';
  url: string;
  thumbnailUrl: string;
  price: number;
  author: string;
  authorId: string;
  description: string;
  resolution: string;
  duration?: string; // only for videos
  size: string;
  tags: string[];
  category: string;
  downloads: number;
  views: number;
  uploadDate: string;
  license: 'standard' | 'extended';
}

export const mockMedia: MediaItem[] = [
  {
    id: '1',
    title: 'Majestic Mountain Range',
    type: 'photo',
    url: 'https://images.unsplash.com/photo-1575597065311-ca94d44b5874?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80',
    thumbnailUrl: 'https://images.unsplash.com/photo-1575597065311-ca94d44b5874?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    price: 25,
    author: 'John Doe',
    authorId: '101',
    description: 'A stunning view of a snow-capped mountain range at sunset.',
    resolution: '4000x6000',
    size: '12MB',
    tags: ['mountain', 'sunset', 'snow', 'landscape'],
    category: 'Nature',
    downloads: 1250,
    views: 15000,
    uploadDate: '2023-08-01',
    license: 'standard',
  },
  {
    id: '2',
    title: 'City at Night',
    type: 'photo',
    url: 'https://images.unsplash.com/photo-1501594907352-045c7c19130e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80',
    thumbnailUrl: 'https://images.unsplash.com/photo-1501594907352-045c7c19130e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    price: 30,
    author: 'Jane Smith',
    authorId: '102',
    description: 'A vibrant cityscape at night with colorful lights.',
    resolution: '5000x7000',
    size: '15MB',
    tags: ['city', 'night', 'lights', 'urban'],
    category: 'Travel',
    downloads: 1800,
    views: 22000,
    uploadDate: '2023-07-15',
    license: 'extended',
  },
  {
    id: '3',
    title: 'Abstract Art',
    type: 'photo',
    url: 'https://images.unsplash.com/photo-1635070792149-054ba79ca85f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80',
    thumbnailUrl: 'https://images.unsplash.com/photo-1635070792149-054ba79ca85f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    price: 20,
    author: 'Alice Johnson',
    authorId: '103',
    description: 'A colorful and dynamic abstract art piece.',
    resolution: '3000x4000',
    size: '10MB',
    tags: ['abstract', 'art', 'color', 'dynamic'],
    category: 'Illustrations',
    downloads: 900,
    views: 11000,
    uploadDate: '2023-07-01',
    license: 'standard',
  },
  {
    id: '4',
    title: 'Ocean Waves',
    type: 'video',
    url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
    thumbnailUrl: 'https://i.ytimg.com/vi/6q64vsuQvrg/maxresdefault.jpg',
    price: 40,
    author: 'Bob Williams',
    authorId: '104',
    description: 'A calming video of ocean waves crashing on the shore.',
    resolution: '1920x1080',
    duration: '0:30',
    size: '20MB',
    tags: ['ocean', 'waves', 'beach', 'sea'],
    category: 'Nature',
    downloads: 2000,
    views: 25000,
    uploadDate: '2023-06-15',
    license: 'extended',
  },
  {
    id: '5',
    title: 'Business Meeting',
    type: 'video',
    url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
    thumbnailUrl: 'https://www.shutterstock.com/shutterstock/videos/1072841504/thumb/stock-footage-dolly-shot-of-corporate-executives-meeting-around-conference-table-in-modern-office-business.jpg',
    price: 50,
    author: 'Emily Brown',
    authorId: '105',
    description: 'A professional business meeting in a modern office.',
    resolution: '1920x1080',
    duration: '0:45',
    size: '25MB',
    tags: ['business', 'meeting', 'office', 'corporate'],
    category: 'Business',
    downloads: 1500,
    views: 18000,
    uploadDate: '2023-06-01',
    license: 'standard',
  },
  {
    id: '6',
    title: 'Coding on Laptop',
    type: 'video',
    url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MnxDb2Rpbmd8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
    price: 45,
    author: 'Chris Davis',
    authorId: '106',
    description: 'A person coding on a laptop in a dimly lit room.',
    resolution: '1920x1080',
    duration: '1:00',
    size: '30MB',
    tags: ['coding', 'laptop', 'programming', 'technology'],
    category: 'Technology',
    downloads: 1700,
    views: 20000,
    uploadDate: '2023-05-15',
    license: 'extended',
  },
  {
    id: '7',
    title: 'Delicious Burger',
    type: 'photo',
    url: 'https://images.unsplash.com/photo-1568901342037-24c7e8a1a795?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MnxidXJnZXJ8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
    thumbnailUrl: 'https://images.unsplash.com/photo-1568901342037-24c7e8a1a795?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MnxidXJnZXJ8ZW58MHx8MHx8fDA%3D&w=400&q=80',
    price: 22,
    author: 'Linda White',
    authorId: '107',
    description: 'A mouth-watering image of a delicious burger.',
    resolution: '4500x3000',
    size: '11MB',
    tags: ['burger', 'food', 'delicious', 'meal'],
    category: 'Food',
    downloads: 1100,
    views: 13000,
    uploadDate: '2023-05-01',
    license: 'standard',
  },
  {
    id: '8',
    title: 'Tropical Beach',
    type: 'photo',
    url: 'https://images.unsplash.com/photo-1494791018817-8e69949f5e4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x0cm9waWNhbCUyMGJlYWNofGVufDB8fDB8fHww&w=1000&q=80',
    thumbnailUrl: 'https://images.unsplash.com/photo-1494791018817-8e69949f5e4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x0cm9waWNhbCUyMGJlYWNofGVufDB8fDB8fHww&w=400&q=80',
    price: 28,
    author: 'Kevin Green',
    authorId: '108',
    description: 'A serene tropical beach with crystal clear water.',
    resolution: '5500x3500',
    size: '13MB',
    tags: ['tropical', 'beach', 'water', 'sea'],
    category: 'Travel',
    downloads: 1400,
    views: 16000,
    uploadDate: '2023-04-15',
    license: 'extended',
  },
];

export interface User {
  id: string;
  name: string;
  email: string;
  profilePicture: string;
  role: 'admin' | 'creator' | 'buyer';
}

export const mockUsers: User[] = [
  {
    id: '201',
    name: 'Admin User',
    email: 'admin@example.com',
    profilePicture: 'https://i.pravatar.cc/150?img=4',
    role: 'admin',
  },
  {
    id: '202',
    name: 'Regular User',
    email: 'user@example.com',
    profilePicture: 'https://i.pravatar.cc/150?img=5',
    role: 'buyer',
  },
];

// Adding categories for FilterPanel component
export const categories = [
  'Nature',
  'Travel',
  'Business',
  'Technology',
  'Food',
  'Illustrations',
  'Abstract',
  'Animals',
  'Architecture',
  'Fashion',
  'People',
  'Sports'
];

// Adding mock API for AuthForm component
export const api = {
  login: async (email: string, password: string) => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock response
    if (email === 'admin@example.com' && password === 'password') {
      return {
        success: true,
        user: {
          id: '201',
          name: 'Admin User',
          email: 'admin@example.com',
          avatar: 'https://i.pravatar.cc/150?img=4',
          role: 'admin',
          createdAt: '2023-01-01',
        },
      };
    } else if (email === 'user@example.com' && password === 'password') {
      return {
        success: true,
        user: {
          id: '202',
          name: 'Regular User',
          email: 'user@example.com',
          avatar: 'https://i.pravatar.cc/150?img=5',
          role: 'buyer',
          createdAt: '2023-01-15',
        },
      };
    } else {
      return {
        success: false,
        error: 'Invalid email or password',
      };
    }
  },
  
  register: async (name: string, email: string, password: string) => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Mock successful registration
    return {
      success: true,
      user: {
        id: Math.floor(Math.random() * 1000) + 300,
        name,
        email,
        avatar: `https://i.pravatar.cc/150?u=${email}`,
        role: 'buyer',
        createdAt: new Date().toISOString().split('T')[0],
      },
    };
  },
  
  googleLogin: async () => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Mock Google login (always successful)
    return {
      success: true,
      user: {
        id: '203',
        name: 'Google User',
        email: 'google.user@gmail.com',
        avatar: 'https://i.pravatar.cc/150?img=7',
        role: 'creator',
        createdAt: '2023-02-10',
      },
    };
  },
};
