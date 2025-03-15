
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';
import MainLayout from '@/layouts/MainLayout';
import { mockMedia } from '@/utils/mockData';
import { MediaItem } from '@/utils/mockData';
import { 
  Eye, 
  Download, 
  Heart, 
  Share, 
  Tag, 
  Info, 
  Clock, 
  FileText, 
  User, 
  Copy, 
  ShoppingCart,
  ArrowLeft
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Badge } from '@/components/ui/badge';

const AssetDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [asset, setAsset] = useState<MediaItem | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [relatedAssets, setRelatedAssets] = useState<MediaItem[]>([]);

  useEffect(() => {
    // Simulate API fetch with timeout
    const fetchAsset = () => {
      setIsLoading(true);
      setTimeout(() => {
        const foundAsset = mockMedia.find(item => item.id === id);
        if (foundAsset) {
          setAsset(foundAsset);
          
          // Get related assets from the same category
          const related = mockMedia
            .filter(item => item.id !== id && item.category === foundAsset.category)
            .slice(0, 3);
          setRelatedAssets(related);
        }
        setIsLoading(false);
      }, 500);
    };

    fetchAsset();
  }, [id]);

  const handleAddToCart = () => {
    if (asset) {
      toast({
        title: "Added to cart",
        description: `${asset.title} has been added to your cart.`,
      });
    }
  };

  const handleDownload = () => {
    if (asset) {
      toast({
        title: "Starting download",
        description: `Downloading ${asset.title}...`,
      });
      // Simulate download - in a real app, this would trigger the actual download
      window.open(asset.url, '_blank');
    }
  };

  if (isLoading) {
    return (
      <MainLayout>
        <div className="container py-12">
          <div className="animate-pulse space-y-6">
            <div className="h-8 bg-gray-200 rounded w-1/3"></div>
            <div className="h-96 bg-gray-200 rounded w-full"></div>
            <div className="h-32 bg-gray-200 rounded w-full"></div>
          </div>
        </div>
      </MainLayout>
    );
  }

  if (!asset) {
    return (
      <MainLayout>
        <div className="container py-12">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Asset not found</h1>
            <p className="mb-6">The asset you're looking for doesn't exist or has been removed.</p>
            <Button onClick={() => navigate('/')}>Return to Homepage</Button>
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="container py-8">
        <Button 
          variant="ghost" 
          className="mb-4 flex items-center gap-1"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft size={16} />
          Back
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Asset Preview */}
          <div className="lg:col-span-2">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="rounded-lg overflow-hidden border border-gray-200 bg-white shadow-sm"
            >
              <AspectRatio ratio={asset.type === 'video' ? 16 / 9 : 4 / 3}>
                {asset.type === 'video' ? (
                  <video 
                    src={asset.url} 
                    controls 
                    poster={asset.thumbnailUrl}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img 
                    src={asset.url} 
                    alt={asset.title} 
                    className="w-full h-full object-cover"
                  />
                )}
              </AspectRatio>
            </motion.div>
            
            {/* Asset Details */}
            <div className="mt-8 space-y-6">
              <div>
                <h1 className="text-3xl font-bold mb-2">{asset.title}</h1>
                <div className="flex items-center gap-2 text-gray-600">
                  <div className="flex items-center">
                    <Eye size={18} className="mr-1" />
                    {asset.views.toLocaleString()} views
                  </div>
                  <div className="flex items-center ml-4">
                    <Download size={18} className="mr-1" />
                    {asset.downloads.toLocaleString()} downloads
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h2 className="text-xl font-semibold mb-3">Description</h2>
                <p className="text-gray-700">{asset.description}</p>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-3">Tags</h2>
                <div className="flex flex-wrap gap-2">
                  {asset.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="px-3 py-1">
                      <Tag size={14} className="mr-1" />
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Price & Action Buttons */}
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center mb-4">
                    <div className="text-3xl font-bold text-primary mb-1">${asset.price}</div>
                    <div className="text-sm text-gray-500">{asset.license} license</div>
                  </div>
                  
                  <div className="space-y-3">
                    <Button
                      className="w-full flex items-center justify-center gap-2"
                      onClick={handleAddToCart}
                    >
                      <ShoppingCart size={18} />
                      Add to Cart
                    </Button>
                    
                    <Button
                      variant="outline"
                      className="w-full flex items-center justify-center gap-2"
                      onClick={handleDownload}
                    >
                      <Download size={18} />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              {/* Creator Info */}
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-medium mb-3">Creator</h3>
                  <div className="flex items-center gap-3">
                    <img 
                      src={`https://i.pravatar.cc/150?u=${asset.authorId}`}
                      alt={asset.author}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-medium">{asset.author}</div>
                      <Button variant="link" className="p-0 h-auto text-sm text-primary">
                        View Profile
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Asset Information */}
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-medium mb-3">Asset Information</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <FileText size={18} className="text-gray-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-sm text-gray-500">File type</div>
                        <div className="font-medium capitalize">{asset.type}</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Info size={18} className="text-gray-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-sm text-gray-500">Resolution</div>
                        <div className="font-medium">{asset.resolution}</div>
                      </div>
                    </li>
                    {asset.type === 'video' && (
                      <li className="flex items-start gap-2">
                        <Clock size={18} className="text-gray-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="text-sm text-gray-500">Duration</div>
                          <div className="font-medium">{asset.duration}</div>
                        </div>
                      </li>
                    )}
                    <li className="flex items-start gap-2">
                      <Copy size={18} className="text-gray-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-sm text-gray-500">Size</div>
                        <div className="font-medium">{asset.size}</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Tag size={18} className="text-gray-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-sm text-gray-500">Category</div>
                        <div className="font-medium">{asset.category}</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Clock size={18} className="text-gray-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-sm text-gray-500">Uploaded on</div>
                        <div className="font-medium">{asset.uploadDate}</div>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        
        {/* Related Assets */}
        {relatedAssets.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Related Assets</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {relatedAssets.map(item => (
                <div key={item.id} className="cursor-pointer" onClick={() => navigate(`/detail/${item.id}`)}>
                  <div className="rounded-lg overflow-hidden border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md">
                    <AspectRatio ratio={item.type === 'video' ? 16 / 9 : 4 / 3}>
                      <img 
                        src={item.thumbnailUrl} 
                        alt={item.title} 
                        className="w-full h-full object-cover"
                      />
                      {item.type === 'video' && (
                        <div className="absolute top-2 right-2 bg-black/70 text-white text-xs font-medium px-2 py-1 rounded">
                          {item.duration}
                        </div>
                      )}
                    </AspectRatio>
                    <div className="p-4">
                      <h3 className="font-medium line-clamp-1">{item.title}</h3>
                      <div className="flex items-center justify-between mt-2">
                        <div className="text-sm text-gray-500">{item.category}</div>
                        <div className="font-medium text-primary">${item.price}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default AssetDetail;
