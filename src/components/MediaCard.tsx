
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Play, Image, Heart, Download, Info } from 'lucide-react';
import { MediaItem } from '@/utils/mockData';
import { Button } from '@/components/ui/button';

interface MediaCardProps {
  item: MediaItem;
  featured?: boolean;
}

const MediaCard: React.FC<MediaCardProps> = ({ item, featured = false }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  
  // Calculate aspect ratio class based on the media type
  const getAspectRatio = () => {
    if (item.type === 'video') {
      return 'aspect-video'; // 16:9 for videos
    }
    return 'aspect-[4/3]'; // 4:3 for photos
  };
  
  return (
    <motion.div
      className={`group relative overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-md transition-all duration-300 ${featured ? 'md:col-span-2' : ''}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Link to={`/detail/${item.id}`} className="block">
        <div className={`relative ${getAspectRatio()} overflow-hidden`}>
          {/* Thumbnail image with lazy loading */}
          <img
            src={item.thumbnailUrl}
            alt={item.title}
            className={`w-full h-full object-cover transform transition-transform duration-700 ${
              isHovered ? 'scale-105' : 'scale-100'
            } ${isImageLoaded ? 'img-loaded' : 'img-loading'}`}
            onLoad={() => setIsImageLoaded(true)}
            loading="lazy"
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Media type indicator */}
          <div className="absolute top-3 left-3 flex items-center space-x-2">
            <div className={`flex items-center justify-center w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm shadow-sm text-gray-800`}>
              {item.type === 'video' ? (
                <Play size={16} fill="currentColor" />
              ) : (
                <Image size={16} />
              )}
            </div>
            
            {item.type === 'video' && (
              <span className="text-xs font-medium bg-black/70 text-white px-2 py-1 rounded">
                {item.duration}s
              </span>
            )}
          </div>
          
          {/* Category chip */}
          <div className="absolute top-3 right-3">
            <span className="text-xs font-medium bg-white/90 backdrop-blur-sm text-gray-800 px-2.5 py-1 rounded-full">
              {item.categories[0]}
            </span>
          </div>
          
          {/* Actions */}
          <div className="absolute inset-x-0 bottom-0 p-3 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex items-center space-x-2">
              <button className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-gray-800 hover:text-primary transition-colors">
                <Heart size={16} />
              </button>
              <button className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-gray-800 hover:text-primary transition-colors">
                <Info size={16} />
              </button>
            </div>
            
            <button className="bg-primary text-white text-xs font-medium rounded-full px-3 py-1 flex items-center space-x-1 hover:bg-primary/90 transition-colors">
              <Download size={14} />
              <span>${item.price}</span>
            </button>
          </div>
        </div>
        
        <div className="p-3 space-y-1">
          <h3 className="font-medium text-gray-900 line-clamp-1">{item.title}</h3>
          <div className="flex items-center space-x-2">
            <img 
              src={item.creator.avatar} 
              alt={item.creator.name}
              className="w-5 h-5 rounded-full object-cover"
            />
            <span className="text-xs text-gray-600">{item.creator.name}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default MediaCard;
