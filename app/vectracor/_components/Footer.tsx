// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="relative w-full bg-[#f5f7fa] py-16 overflow-hidden">

      {/* Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('/hex-pattern-light.png')] bg-repeat"></div>

      <div className="container relative  mx-auto px-6">

        {/* Top Grid */}
        <div className="grid md:grid-cols-4 gap-12">

          {/* Column 1 */}
          <div>
            <h2 className="text-xl font-bold text-blue-800">VECTRACOR</h2>

            <p className="text-gray-600 text-sm mt-4 leading-relaxed max-w-[300px]">
              VectraCor, Inc. is a medical device company with “Disruptive Early
              Detection Technology”...
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-2 border-b border-gray-300 pb-2">
              Quick Links
            </h3>

            <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-gray-600 mt-3">
              <a href="#">Home</a>
              <a href="#">Customer Care</a>
              <a href="#">About Us</a>
              <a href="#">Contact Us</a>
              <a href="#">Products</a>
              <a href="#">Clinical Research</a>
              <a href="#">Veterinary Products</a>
              <a href="#">OEM</a>
              <a href="#">Software</a>
              <a href="#">Connect to a Technician</a>
            </div>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">
              Contact Us
            </h3>

            <div className="text-sm text-gray-600 space-y-2">
              <p>info@vectracor.com</p>
              <p>+1 973-904-0444</p>
              <p>785 Totowa Road Totowa, New Jersey 07512</p>
            </div>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4 ">
              Connect With Us
            </h3>

            <div className="flex gap-3">
              {["T", "in", "IG"].map((item, i) => (
                <div
                  key={i}
                  className="w-10 h-10 cursor-pointer bg-red-500 text-white rounded-md flex items-center justify-center shadow-md"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-300 mt-10 pt-4 text-center">
          <p className="text-xs text-blue-700">
            All personal information collected by VectraCor is for internal use only...
          </p>

          <p className="text-xs text-gray-500 mt-2">
            © Copyright Vectracor Medical 2026. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}