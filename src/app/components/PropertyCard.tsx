import { Bed, Bath, MapPin } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

interface PropertyCardProps {
  image: string;
  title: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  sqft: string;
  type: 'For Rent' | 'For Sale';
}

export function PropertyCard({
  image,
  title,
  location,
  price,
  beds,
  baths,
  sqft,
  type,
}: PropertyCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-2xl hover:shadow-slate-900/10 transition-all duration-500 group border-slate-200/60 rounded-3xl bg-white">
      <div className="relative overflow-hidden rounded-t-3xl">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <Badge className="absolute top-4 right-4 bg-gradient-to-br from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white shadow-lg shadow-amber-500/30 rounded-full px-4 py-1.5 border-0">
          {type}
        </Badge>
      </div>
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-semibold text-xl text-slate-900">{title}</h3>
          <span className="text-amber-600 font-semibold text-xl whitespace-nowrap ml-2">{price}</span>
        </div>
        <div className="flex items-center gap-2 text-slate-500 mb-5">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">{location}</span>
        </div>
        <div className="flex items-center gap-5 text-slate-700 pt-5 border-t border-slate-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-slate-50 flex items-center justify-center">
              <Bed className="w-4 h-4 text-slate-600" />
            </div>
            <span className="text-sm">{beds} Beds</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-slate-50 flex items-center justify-center">
              <Bath className="w-4 h-4 text-slate-600" />
            </div>
            <span className="text-sm">{baths} Baths</span>
          </div>
          <div className="text-slate-600 text-sm">
            <span>{sqft} sqft</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}