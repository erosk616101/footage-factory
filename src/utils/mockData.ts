// Mock data for footage marketplace

export type MediaType = 'video' | 'photo';

export interface MediaItem {
  id: string;
  title: string;
  description: string;
  type: MediaType;
  url: string;
  previewUrl: string; // Watermarked version
  thumbnailUrl: string;
  creator: {
    id: string;
    name: string;
    avatar: string;
  };
  price: number;
  categories: string[];
  tags: string[];
  resolution: string;
  duration?: number; // For videos only
  uploadDate: string;
  downloads: number;
  views: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: 'creator' | 'buyer' | 'admin';
  createdAt: string;
  bio?: string;
  website?: string;
  earnings?: number;
  sales?: number;
  media?: MediaItem[];
}

// Helper function to generate random IDs
const generateId = (): string => Math.random().toString(36).substring(2, 15);

// Create mock media items
export const mockMedia: MediaItem[] = [
  {
    id: generateId(),
    title: "Aerial View of Ocean Waves",
    description: "Beautiful aerial drone footage of ocean waves crashing onto a pristine beach. Perfect for travel and nature content.",
    type: "video",
    url: "https://example.com/footage/ocean-waves",
    previewUrl: "https://example.com/footage/ocean-waves-preview",
    thumbnailUrl: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0",
    creator: {
      id: "creator1",
      name: "NatureFilms",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    price: 49.99,
    categories: ["Nature", "Ocean", "Aerial"],
    tags: ["drone", "beach", "waves", "ocean", "aerial", "4k"],
    resolution: "3840x2160",
    duration: 35,
    uploadDate: "2023-08-15",
    downloads: 128,
    views: 1542
  },
  {
    id: generateId(),
    title: "Urban Timelapse at Night",
    description: "Stunning timelapse of city skyline at night with moving cars and changing lights.",
    type: "video",
    url: "https://example.com/footage/urban-timelapse",
    previewUrl: "https://example.com/footage/urban-timelapse-preview",
    thumbnailUrl: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df",
    creator: {
      id: "creator2",
      name: "CityScapes",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    price: 59.99,
    categories: ["Urban", "Timelapse", "Night"],
    tags: ["city", "night", "timelapse", "skyline", "urban", "lights"],
    resolution: "4096x2160",
    duration: 20,
    uploadDate: "2023-09-22",
    downloads: 89,
    views: 1023
  },
  {
    id: generateId(),
    title: "Business Meeting",
    description: "Professional footage of diverse business team in a modern office environment.",
    type: "video",
    url: "https://example.com/footage/business-meeting",
    previewUrl: "https://example.com/footage/business-meeting-preview",
    thumbnailUrl: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf",
    creator: {
      id: "creator3",
      name: "CorporateShots",
      avatar: "https://randomuser.me/api/portraits/men/22.jpg"
    },
    price: 39.99,
    categories: ["Business", "Office", "People"],
    tags: ["meeting", "corporate", "office", "professional", "team", "business"],
    resolution: "3840x2160",
    duration: 45,
    uploadDate: "2023-10-05",
    downloads: 67,
    views: 820
  },
  {
    id: generateId(),
    title: "Mountain Sunset",
    description: "Beautiful high-resolution photograph of sunset over mountain ranges.",
    type: "photo",
    url: "https://example.com/photos/mountain-sunset",
    previewUrl: "https://example.com/photos/mountain-sunset-preview",
    thumbnailUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
    creator: {
      id: "creator4",
      name: "MountainViews",
      avatar: "https://randomuser.me/api/portraits/women/23.jpg"
    },
    price: 19.99,
    categories: ["Nature", "Landscape", "Mountains"],
    tags: ["sunset", "mountains", "landscape", "scenic", "dusk", "panorama"],
    resolution: "5760x3840",
    uploadDate: "2023-11-12",
    downloads: 210,
    views: 2850
  },
  {
    id: generateId(),
    title: "Fresh Food Ingredients",
    description: "Flatlay of colorful fresh food ingredients on wooden table.",
    type: "photo",
    url: "https://example.com/photos/food-ingredients",
    previewUrl: "https://example.com/photos/food-ingredients-preview",
    thumbnailUrl: "https://images.unsplash.com/photo-1498837167922-ddd27525d352",
    creator: {
      id: "creator5",
      name: "FoodStudio",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg"
    },
    price: 24.99,
    categories: ["Food", "Lifestyle", "Cooking"],
    tags: ["food", "ingredients", "healthy", "organic", "cooking", "vegetables"],
    resolution: "5000x3333",
    uploadDate: "2023-12-03",
    downloads: 175,
    views: 1980
  },
  {
    id: generateId(),
    title: "Slow Motion Coffee Pour",
    description: "Cinematic slow motion footage of coffee being poured into a cup with morning light.",
    type: "video",
    url: "https://example.com/footage/coffee-pour",
    previewUrl: "https://example.com/footage/coffee-pour-preview",
    thumbnailUrl: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
    creator: {
      id: "creator6",
      name: "SlowMotionArt",
      avatar: "https://randomuser.me/api/portraits/men/42.jpg"
    },
    price: 34.99,
    categories: ["Food", "Slow Motion", "Lifestyle"],
    tags: ["coffee", "slow motion", "pour", "morning", "cinematic", "beverage"],
    resolution: "3840x2160",
    duration: 15,
    uploadDate: "2024-01-18",
    downloads: 53,
    views: 742
  },
  {
    id: generateId(),
    title: "Minimalist Workspace",
    description: "Clean modern minimalist workspace with laptop and plants.",
    type: "photo",
    url: "https://example.com/photos/minimalist-workspace",
    previewUrl: "https://example.com/photos/minimalist-workspace-preview",
    thumbnailUrl: "https://images.unsplash.com/photo-1497215728101-856f4ea42174",
    creator: {
      id: "creator7",
      name: "MinimalStudio",
      avatar: "https://randomuser.me/api/portraits/women/33.jpg"
    },
    price: 29.99,
    categories: ["Business", "Interior", "Lifestyle"],
    tags: ["workspace", "minimal", "desk", "office", "modern", "clean"],
    resolution: "5200x3467",
    uploadDate: "2024-01-30",
    downloads: 88,
    views: 1245
  },
  {
    id: generateId(),
    title: "Abstract Fluid Motion",
    description: "Colorful abstract fluid motion backgrounds in 4K resolution.",
    type: "video",
    url: "https://example.com/footage/abstract-fluid",
    previewUrl: "https://example.com/footage/abstract-fluid-preview",
    thumbnailUrl: "https://images.unsplash.com/photo-1550684376-efcbd6e3f031",
    creator: {
      id: "creator8",
      name: "AbstractMotion",
      avatar: "https://randomuser.me/api/portraits/men/55.jpg"
    },
    price: 44.99,
    categories: ["Abstract", "Background", "Motion"],
    tags: ["abstract", "fluid", "colorful", "motion", "background", "loops"],
    resolution: "3840x2160",
    duration: 30,
    uploadDate: "2024-02-12",
    downloads: 132,
    views: 1678
  }
];

// Create mock categories
export const categories = [
  "Nature", "Urban", "Business", "Food", "Abstract", "People", 
  "Animals", "Technology", "Travel", "Sports", "Lifestyle", 
  "Architecture", "Medical", "Education", "Environmental", "Fashion"
];

// Create mock users
export const users: User[] = [
  {
    id: "user1",
    name: "John Smith",
    email: "john@example.com",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    role: "creator",
    createdAt: "2023-01-15",
    bio: "Professional videographer specializing in nature and wildlife footage.",
    website: "https://johnsmith.com",
    earnings: 12580.45,
    sales: 234
  },
  {
    id: "user2",
    name: "Emily Johnson",
    email: "emily@example.com",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    role: "buyer",
    createdAt: "2023-03-22"
  },
  {
    id: "user3",
    name: "David Wilson",
    email: "david@example.com",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    role: "creator",
    createdAt: "2023-02-18",
    bio: "Urban photographer with 10+ years of experience.",
    website: "https://davidwilson.photo",
    earnings: 8945.20,
    sales: 156
  }
];

// Mock API functions with delay to simulate network requests
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const api = {
  // Authentication
  login: (email: string, password: string): Promise<{ success: boolean; user?: User; error?: string }> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Mock login logic
        if (email === 'demo@example.com' && password === 'password') {
          resolve({
            success: true,
            user: {
              id: '1',
              name: 'Demo User',
              email: 'demo@example.com',
              avatar: 'https://i.pravatar.cc/150?u=demo@example.com',
              role: 'user',
              createdAt: new Date().toISOString()
            },
          });
        } else {
          resolve({
            success: false,
            error: 'Invalid email or password',
          });
        }
      }, 1000);
    });
  },
  
  googleLogin: (): Promise<{ success: boolean; user?: User; error?: string }> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Mock Google login - always succeed for demo
        resolve({
          success: true,
          user: {
            id: '1',
            name: 'Google User',
            email: 'google@example.com',
            avatar: 'https://i.pravatar.cc/150?u=google@example.com',
            role: 'user',
            createdAt: new Date().toISOString()
          },
        });
      }, 1000);
    });
  },
  
  register: (name: string, email: string, password: string): Promise<{ success: boolean; user?: User; error?: string }> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Mock register logic - always succeed for demo
        if (email && password) {
          resolve({
            success: true,
            user: {
              id: '1',
              name: name || 'New User',
              email: email,
              avatar: `https://i.pravatar.cc/150?u=${email}`,
              role: 'user',
              createdAt: new Date().toISOString()
            },
          });
        } else {
          resolve({
            success: false,
            error: 'Please provide valid information',
          });
        }
      }, 1000);
    });
  },
  
  // Media
  getMedia: async (filters?: any) => {
    await delay(600);
    let filteredMedia = [...mockMedia];
    
    if (filters) {
      if (filters.type) {
        filteredMedia = filteredMedia.filter(item => item.type === filters.type);
      }
      
      if (filters.category) {
        filteredMedia = filteredMedia.filter(item => item.categories.includes(filters.category));
      }
      
      if (filters.search) {
        const searchTerm = filters.search.toLowerCase();
        filteredMedia = filteredMedia.filter(
          item => item.title.toLowerCase().includes(searchTerm) || 
                 item.description.toLowerCase().includes(searchTerm) ||
                 item.tags.some((tag: string) => tag.toLowerCase().includes(searchTerm))
        );
      }
    }
    
    return { success: true, data: filteredMedia };
  },
  
  getMediaById: async (id: string) => {
    await delay(400);
    const media = mockMedia.find(item => item.id === id);
    if (media) {
      return { success: true, data: media };
    }
    return { success: false, error: "Media not found" };
  },
  
  uploadMedia: async (mediaData: Partial<MediaItem>) => {
    await delay(1500);
    return { success: true, id: generateId() };
  },
  
  // User
  getUserProfile: async (id: string) => {
    await delay(700);
    const user = users.find(u => u.id === id);
    if (user) {
      return { success: true, data: user };
    }
    return { success: false, error: "User not found" };
  },
  
  updateUserProfile: async (id: string, data: Partial<User>) => {
    await delay(900);
    return { success: true };
  },
  
  // Purchase
  purchaseMedia: async (mediaId: string, paymentDetails: any) => {
    await delay(1200);
    return { success: true, downloadUrl: `https://example.com/download/${mediaId}` };
  }
};

// Helper functions
export const getRandomMedia = (count: number = 4): MediaItem[] => {
  const shuffled = [...mockMedia].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export const getFeaturedMedia = (): MediaItem[] => {
  return mockMedia.filter((_, index) => index % 3 === 0).slice(0, 6);
};

export const getTrendingMedia = (): MediaItem[] => {
  return [...mockMedia].sort((a, b) => b.views - a.views).slice(0, 4);
};

export const getNewestMedia = (): MediaItem[] => {
  return [...mockMedia]
    .sort((a, b) => new Date(b.uploadDate).getTime() - new Date(a.uploadDate).getTime())
    .slice(0, 4);
};
