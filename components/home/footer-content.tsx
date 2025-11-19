import React from "react";

export default function FooterContent() {
  return (
    <footer className="w-full border-t" id="contacts">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Logo + Name */}
          <div className="flex items-start justify-center space-x-4">
            <img src="/logo.png" alt="Logo" className="w-14 h-14 object-contain " />
            <span className="font-semibold text-2xl leading-tight">
              Philippine Network of <br /> Microbial Culture Collections
            </span>
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            <h4 className=" text-blue-900 text-2xl font-bold">Contact Us</h4>
            <p className="text-xl leading-relaxed">
              Email: <a href="mailto:pnmcc.official@gmail.com" className="underline">pnmcc.official@gmail.com</a> <br />
              Mobile: (+639) 21-256-2071 · (+639) 26-076-9798
            </p>
          </div>

          {/* Links */}
          <div className="space-y-3">
            <h4 className="font-bold text-2xl text-blue-900 font">Links</h4>
            <p className="text-xl leading-relaxed">
              Website: <a href="https://www.pnmcc.org" className="underline">www.pnmcc.org</a> <br />
              Facebook:{" "}
              <a
                href="https://www.facebook.com/iamPNMCC"
                className="underline"
              >
                facebook.com/iamPNMCC
              </a>
            </p>
          </div>

        </div>

        {/* Footer bottom */}
        <div className="pt-8 mt-8 border-t text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Philippine Network of Microbial Culture Collections — PNMCC
        </div>
      </div>
    </footer>
  );
}
