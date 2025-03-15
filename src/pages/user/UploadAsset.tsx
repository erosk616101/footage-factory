
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Upload, Image, File, X, Plus } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

type MediaType = 'photo' | 'video' | 'audio';

const UploadAsset = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [keywords, setKeywords] = useState('');
  const [price, setPrice] = useState('');
  const [mediaType, setMediaType] = useState<MediaType>('photo');
  const [fileSelected, setFileSelected] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  // Handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      setFileSelected(null);
      setPreviewUrl(null);
      return;
    }

    const file = e.target.files[0];
    setFileSelected(file);

    // Create a preview for images only
    if (file.type.startsWith('image/')) {
      const fileUrl = URL.createObjectURL(file);
      setPreviewUrl(fileUrl);
    } else {
      setPreviewUrl(null);
    }
  };

  // Clear the selected file
  const handleClearFile = () => {
    setFileSelected(null);
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
      setPreviewUrl(null);
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!fileSelected) {
      toast({
        title: "Error",
        description: "Please select a file to upload",
        variant: "destructive"
      });
      return;
    }

    if (!title) {
      toast({
        title: "Error",
        description: "Please enter a title for your asset",
        variant: "destructive"
      });
      return;
    }

    setIsUploading(true);

    // Simulate API upload
    try {
      // In a real application, you would upload to a server here
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Success!",
        description: "Your asset has been uploaded",
        variant: "default"
      });
      
      setIsUploading(false);
      navigate('/user-dashboard/uploads');
    } catch (error) {
      toast({
        title: "Upload failed",
        description: "There was an error uploading your asset",
        variant: "destructive"
      });
      setIsUploading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">Upload New Asset</h1>
          <p className="text-gray-500 mt-1">Share your work with the world</p>
        </div>
        <Button variant="outline" onClick={() => navigate('/user-dashboard/uploads')}>
          Cancel
        </Button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* File Upload Section */}
        <div className="border border-dashed border-gray-300 rounded-lg p-6 bg-gray-50">
          {fileSelected ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {mediaType === 'photo' && previewUrl ? (
                    <div className="w-20 h-20 rounded-md overflow-hidden bg-gray-100">
                      <img 
                        src={previewUrl} 
                        alt="Preview" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-20 h-20 rounded-md flex items-center justify-center bg-gray-100">
                      <File size={32} className="text-gray-400" />
                    </div>
                  )}
                  <div>
                    <p className="font-medium">{fileSelected.name}</p>
                    <p className="text-sm text-gray-500">
                      {(fileSelected.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                </div>
                <Button 
                  type="button" 
                  variant="ghost" 
                  size="icon-sm" 
                  onClick={handleClearFile}
                  className="text-gray-500 hover:text-red-500"
                >
                  <X size={18} />
                </Button>
              </div>
            </div>
          ) : (
            <div className="text-center">
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                  <Upload size={24} className="text-gray-400" />
                </div>
              </div>
              <h3 className="text-lg font-medium">Drag and drop your file here</h3>
              <p className="text-gray-500 mb-4">or click to browse from your computer</p>
              <Button
                type="button"
                variant="outline"
                onClick={() => document.getElementById('file-upload')?.click()}
              >
                <Plus size={18} className="mr-2" />
                Select File
              </Button>
            </div>
          )}
          <input
            id="file-upload"
            type="file"
            className="hidden"
            accept={mediaType === 'photo' ? 'image/*' : mediaType === 'video' ? 'video/*' : 'audio/*'}
            onChange={handleFileChange}
          />
        </div>

        {/* Media Type Selection */}
        <div className="grid grid-cols-3 gap-4">
          <Button
            type="button"
            variant={mediaType === 'photo' ? 'default' : 'outline'}
            className="flex flex-col items-center justify-center h-24 gap-2"
            onClick={() => setMediaType('photo')}
          >
            <Image size={24} />
            <span>Photo</span>
          </Button>
          <Button
            type="button"
            variant={mediaType === 'video' ? 'default' : 'outline'}
            className="flex flex-col items-center justify-center h-24 gap-2"
            onClick={() => setMediaType('video')}
          >
            <File size={24} />
            <span>Video</span>
          </Button>
          <Button
            type="button"
            variant={mediaType === 'audio' ? 'default' : 'outline'}
            className="flex flex-col items-center justify-center h-24 gap-2"
            onClick={() => setMediaType('audio')}
          >
            <File size={24} />
            <span>Audio</span>
          </Button>
        </div>

        {/* Asset Details */}
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="title">Title *</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter a title for your asset"
              required
            />
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe your asset"
              rows={4}
            />
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="keywords">Keywords</Label>
            <Input
              id="keywords"
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
              placeholder="Enter keywords separated by commas"
            />
            <p className="text-sm text-gray-500">
              Add relevant keywords to help users find your content
            </p>
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="price">Price ($) *</Label>
            <Input
              id="price"
              type="number"
              min="0"
              step="0.01"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Set a price for your asset"
              required
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end gap-3">
          <Button 
            type="button" 
            variant="outline"
            onClick={() => navigate('/user-dashboard/uploads')}
          >
            Cancel
          </Button>
          <Button 
            type="submit" 
            disabled={isUploading || !fileSelected || !title}
          >
            {isUploading ? 'Uploading...' : 'Upload Asset'}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UploadAsset;
