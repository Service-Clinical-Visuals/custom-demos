import React from 'react';
import Header from '../_components/Header';
import Footer from '../_components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductsPage() {
  const products = [
    {
      id: 1,
      name: "Level 2 Aqua Tune Water Bottle",
      price: "$395.00",
      image: "/medical/tunning-element/products/Level 2 Aqua Tune Water Bottle.webp",
    },
    {
      id: 2,
      name: "Five Minute Relief Patch (10 patches)",
      price: "$55.00",
      image: "/medical/tunning-element/products/Five Minute Relief Patch (10 patches).webp",
    },
    {
      id: 3,
      name: "Five Minute Relief Patch - 6 Patches",
      price: "$40.00",
      image: "/medical/tunning-element/products/Five Minute Relief Patch (6 Patches).webp",
    },
    {
      id: 4,
      name: "B.E. Well Patch (10 patches)",
      price: "$80.00",
      image: "/medical/tunning-element/products/B.E. Well Patch (10 patches).webp",
    },
    {
      id: 5,
      name: "Level 3 Aqua Tune Water 14oz Bottle",
      price: "$395.00",
      image: "/medical/tunning-element/products/Level 3 Aqua Tune Water 14oz Bottle.webp",
    },
    {
      id: 6,
      name: "Sleep Necklace 6 Night Free Trial",
      price: "$10.00",
      image: "/medical/tunning-element/products/latestnews/Sleep Necklace 6 Night Free Trial.webp", 
    },
    {
      id: 7,
      name: "Executive Comfort Bracelet",
      price: "$300.00",
      image: "/medical/tunning-element/products/Executive Comfort Bracelet.webp",
    },
    {
      id: 8,
      name: "Level 5 Sample Patches",
      price: "$50.00",
      image: "/medical/tunning-element/products/Level 5 Sample Patches.webp",
    },
    {
      id: 9,
      name: "Oasis 32oz Aqua Tune – Level 3",
      price: "$395.00",
      image: "/medical/tunning-element/products/Oasis 32oz Aqua Tune – Level 3.webp",
    }
  ];

  const categories = [
    "Animals", "Anklets", "AquaTune", "Be Well", "Bracelets", 
    "Elite Products", "Necklace", "Patches", "Performance", 
    "Recovery", "Relief", "Sleep"
  ];

  const latestPosts = [
    {
      id: 1,
      name: "Genesis Minor Bracelet",
      price: "$200.00",
            image: "/medical/tunning-element/products/latestnews/Genesis Minor Bracelet.webp", 

    },
    {
      id: 2,
      name: "Sleep Necklace 6 Night Free Trial",
      price: "$10.00",
            image: "/medical/tunning-element/products/latestnews/Sleep Necklace 6 Night Free Trial.webp", 

    },
    {
      id: 3,
      name: "Encore Necklace",
      price: "$400.00",
      image: "/medical/tunning-element/products/latestnews/Encore Necklace.webp", 
    }
  ];

  return (
    <main className="w-full min-h-screen bg-[#FCF3EF] flex flex-col">
      <Header />
      
      {/* Breadcrumb */}
        <div className="custom-container px-4 xl:px-0 py-8 lg:py-12">
        <div className="w-full border border-[#e0cdbf] py-6 px-6 flex items-center bg-[#FCF3EF]">
          <Link href="/tunning-element" className="header-link text-secondary font-body font-semibold">Home &nbsp; </Link>
          <span className="header-link text-secondary mx-2 text-sm"> &gt;&gt; </span>
          <span className=" header-link text-secondary font-body font-semibold">&nbsp; Our Products</span>
        </div>
      </div>
      <div >
        <div className="custom-container px-6 xl:px-8 py-10 flex flex-col lg:flex-row gap-12 bg-white shadow-sm border border-gray-100">
          
          {/* Main Products Content */}
          <div className="w-full lg:w-[75%]">
            {/* Top Bar */}
            <div className="flex justify-between items-center mb-8 gap-2">
              <p className="section-text text-gray-500 font-medium whitespace-nowrap">Showing 1-12 of 16 results</p>
              <select className="border border-gray-300 section-text text-gray-600 py-1 sm:py-2 px-1 sm:px-4 outline-none hover:border-gray-400 transition-colors shrink min-w-0 text-ellipsis">
                <option>Sort By Popularity</option>
                <option>Sort By Latest</option>
                <option>Sort By Price: Low to High</option>
                <option>Sort By Price: High to Low</option>
              </select>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <div key={product.id} className="flex flex-col border border-primary p-2 relative bg-white hover:shadow-md transition-shadow">
                  {/* Decorative L-bracket corner element */}
                  <div className="absolute top-[-1px] right-[-1px] w-[45%] h-[45%] bg-primary z-10" style={{clipPath: 'polygon(16px 0, 100% 0, 100% calc(100% - 16px), calc(100% - 6px) 100%, calc(100% - 6px) 6px, 0 6px)'}}></div>
                  
                  {/* Product Image Container */}
                  <div className="relative w-full aspect-square bg-[#f9f9f9] mb-4">
                    <Image 
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-4"
                    />
                  </div>
                  
                  {/* Product Details */}
                  <div className="flex flex-col flex-grow px-2 pb-2 bg-white">
                    <h3 className="feature-title ibm-plex-sans font-semibold text-[#1c2331] text-sm mb-2 leading-tight flex-grow">
                      {product.name}
                    </h3>
                    <span className="section-text font-body font-bold text-primary">
                      {product.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center space-x-4 mt-12 mb-4">
              <button className="w-10 h-10 bg-[#a46039] text-white flex items-center justify-center font-medium shadow">1</button>
              <button className="w-10 h-10 border border-gray-300 text-gray-600 flex items-center justify-center font-medium hover:bg-gray-50 transition-colors">2</button>
              <button className="w-10 h-10 border border-gray-300 text-gray-600 flex items-center justify-center font-medium hover:bg-gray-50 transition-colors">3</button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-[25%] flex flex-col space-y-12">
            
            {/* Filter By Price */}
            <div>
              <h3 className="product-title font-heading font-semibold text-black border-b border-gray-200 pb-2 mb-6 relative after:content-[''] after:absolute after:left-0 after:-bottom-[1px] after:w-12 after:h-[2px] after:bg-[#a46039]">Filter By <span className="text-[#a46039]">Price</span></h3>
              <div className="px-1">
                <div className="relative w-full h-1 bg-[#e2cebd] rounded mb-6 mt-4">
                  <div className="absolute top-0 left-0 h-1 bg-[#a46039] w-full"></div>
                  <div className="absolute top-1/2 left-0 -translate-y-1/2 w-4 h-4 bg-[#a46039] rounded-full cursor-pointer border-2 border-white shadow-sm"></div>
                  <div className="absolute top-1/2 right-0 -translate-y-1/2 w-4 h-4 bg-[#a46039] rounded-full cursor-pointer border-2 border-white shadow-sm"></div>
                </div>
                <div className="flex justify-between items-center text-sm text-gray-500 font-medium">
                  <span className="border border-gray-300 px-4 py-1.5 min-w-[60px] text-center">$11</span>
                  <span className="border border-gray-300 px-4 py-1.5 min-w-[60px] text-center">$89</span>
                </div>
              </div>
            </div>

            {/* Category */}
            <div>
              <h3 className="product-title font-heading font-bold text-black border-b border-gray-200 pb-2 mb-6 relative after:content-[''] after:absolute after:left-0 after:-bottom-[1px] after:w-12 after:h-[2px] after:bg-[#a46039]">Category</h3>
              <div className="border border-[#a46039] border-opacity-30 p-5">
                <ul className="space-y-4">
                  {categories.map((category) => (
                    <li key={category} className="flex items-center section-text text-gray-500 hover:text-[#a46039] cursor-pointer transition-colors group">
                      <span className="mr-3 text-[#a46039] text-[10px] group-hover:translate-x-1 transition-transform">❯</span>
                      {category}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Latest Post */}
            <div>
              <h3 className="product-title font-heading font-semibold text-black border-b border-gray-200 pb-2 mb-6 relative after:content-[''] after:absolute after:left-0 after:-bottom-[1px] after:w-12 after:h-[2px] after:bg-[#a46039]">Latest Post</h3>
              <div className="flex flex-col space-y-6">
                {latestPosts.map((post) => (
                  <div key={post.id} className="flex items-center space-x-4">
                    <div className="relative w-20 h-20 bg-[#f9f9f9] flex-shrink-0 border border-gray-100">
                      <Image src={post.image} alt={post.name} fill className="object-contain p-2" />
                    </div>
                    <div>
                      <h4 className="section-text ibm-plex-sans font-semibold text-black leading-tight mb-1 hover:text-[#a46039] cursor-pointer transition-colors">{post.name}</h4>
                      <span className="section-text font-bold text-[#d5b77c]">{post.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
