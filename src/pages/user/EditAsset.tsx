
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import UserLayout from '@/layouts/UserLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { useToast } from '@/hooks/use-toast';
import { Image, Save, ChevronLeft } from 'lucide-react';

// Mock data for a single asset
const assetData = {
  id: '1',
  title: 'Beach Sunset',
  type: 'photo',
  description: 'Beautiful sunset over the ocean with vibrant colors.',
  date: '2023-05-15',
  downloads: 12,
  earnings: 24.99,
  price: 19.99,
  license: 'Standard',
  tags: ['sunset', 'beach', 'ocean', 'nature'],
  category: 'Nature',
  thumbnail: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
};

const licenses = [
  { value: 'standard', label: 'Standard License' },
  { value: 'extended', label: 'Extended License' },
  { value: 'commercial', label: 'Commercial License' },
];

const categories = [
  { value: 'nature', label: 'Nature' },
  { value: 'business', label: 'Business' },
  { value: 'technology', label: 'Technology' },
  { value: 'people', label: 'People' },
  { value: 'city', label: 'City' },
  { value: 'abstract', label: 'Abstract' },
];

const EditAsset = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  
  // Form state
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [license, setLicense] = useState('');
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState('');

  // Mock API fetch
  useEffect(() => {
    // In a real app, you would fetch the asset data from an API
    setIsLoading(true);
    setTimeout(() => {
      setTitle(assetData.title);
      setDescription(assetData.description);
      setPrice(assetData.price.toString());
      setLicense(assetData.license.toLowerCase());
      setCategory(assetData.category.toLowerCase());
      setTags(assetData.tags.join(', '));
      setIsLoading(false);
    }, 500);
  }, [id]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API update
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Asset updated",
        description: "Your asset has been successfully updated.",
      });
      navigate('/user-dashboard/uploads');
    }, 1000);
  };

  return (
    <UserLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <Button 
              variant="ghost" 
              className="mb-2 flex items-center gap-1 -ml-2"
              onClick={() => navigate('/user-dashboard/uploads')}
            >
              <ChevronLeft size={16} />
              Back to Uploads
            </Button>
            <h1 className="text-2xl font-bold">Edit Asset</h1>
            <p className="text-gray-500 mt-1">Update your asset information</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Asset Preview */}
          <Card className="md:col-span-1">
            <CardHeader>
              <CardTitle>Asset Preview</CardTitle>
              <CardDescription>Current appearance of your asset</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <AspectRatio ratio={4/3} className="bg-gray-100 rounded-md overflow-hidden">
                  <img 
                    src={assetData.thumbnail} 
                    alt={assetData.title} 
                    className="w-full h-full object-cover" 
                  />
                </AspectRatio>
                <div className="text-sm">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="text-gray-500">Downloads:</div>
                    <div className="font-medium text-right">{assetData.downloads}</div>
                    <div className="text-gray-500">Earnings:</div>
                    <div className="font-medium text-right">${assetData.earnings.toFixed(2)}</div>
                    <div className="text-gray-500">Uploaded:</div>
                    <div className="font-medium text-right">{assetData.date}</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Edit Form */}
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Asset Information</CardTitle>
              <CardDescription>Update the details of your asset</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Title *</Label>
                  <Input
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter asset title"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Describe your asset"
                    rows={4}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="price">Price ($) *</Label>
                    <Input
                      id="price"
                      type="number"
                      min="0"
                      step="0.01"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      placeholder="Set asset price"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="license">License *</Label>
                    <Select 
                      value={license} 
                      onValueChange={setLicense}
                      required
                    >
                      <SelectTrigger id="license">
                        <SelectValue placeholder="Select license type" />
                      </SelectTrigger>
                      <SelectContent>
                        {licenses.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Category *</Label>
                  <Select 
                    value={category} 
                    onValueChange={setCategory}
                    required
                  >
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tags">Tags</Label>
                  <Input
                    id="tags"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                    placeholder="Enter tags separated by commas"
                  />
                  <p className="text-sm text-gray-500">
                    Separate tags with commas (e.g., nature, beach, sunset)
                  </p>
                </div>

                <div className="flex justify-end pt-4">
                  <Button
                    type="submit"
                    className="flex items-center gap-2"
                    disabled={isLoading}
                  >
                    <Save size={16} />
                    {isLoading ? 'Saving...' : 'Save Changes'}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </UserLayout>
  );
};

export default EditAsset;
