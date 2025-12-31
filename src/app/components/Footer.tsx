import { Building2, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-500/20">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <span className="font-semibold text-xl text-white">BostonHomes</span>
            </div>
            <p className="text-slate-400 max-w-md leading-relaxed">
              Your trusted partner in Greater Boston property management. 
              We specialize in connecting residents with exceptional properties throughout the region.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {/* <li>
                <button className="hover:text-amber-400 transition-colors text-slate-400">Properties</button>
              </li> */}
              <li>
                <button className="hover:text-amber-400 transition-colors text-slate-400">About Us</button>
              </li>
              <li>
                <button className="hover:text-amber-400 transition-colors text-slate-400">Services</button>
              </li>
              <li>
                <button className="hover:text-amber-400 transition-colors text-slate-400">Contact</button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-white mb-5">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-amber-400" />
                </div>
                <span className="text-slate-400">(617) 555-0123</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-amber-400" />
                </div>
                <span className="text-slate-400">info@bostonhomes.com</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-amber-400" />
                </div>
                <span className="text-slate-400">
                  123 Newbury Street<br />
                  Boston, MA 02116
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {currentYear} BostonHomes Property Management. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <button className="text-slate-500 hover:text-amber-400 transition-colors">Privacy Policy</button>
            <button className="text-slate-500 hover:text-amber-400 transition-colors">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
}