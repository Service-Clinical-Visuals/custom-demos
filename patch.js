const fs = require('fs');
const file = '/home/tcp/Documents/TCP/CV-Business/app/(moto)/lucas-oil/_components/InsideProduct.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  'border-t border-l border-b border-[#00d2ff]',
  'border border-[#00d2ff]'
);

content = content.replace(
  '<div className="flex-shrink-0 text-[#00d2ff] font-bold text-sm border border-[#00d2ff] w-8 h-6 flex items-center justify-center mr-4 mt-0.5 rounded-sm bg-[#00d2ff]/10">',
  '<div className="flex-shrink-0 mr-4 mt-1">'
);

fs.writeFileSync(file, content);
