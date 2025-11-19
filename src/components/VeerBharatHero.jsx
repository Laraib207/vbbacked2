// "use client";
// import React from "react";

// const benefitsData = [
//   {
//     src: "/images/WhatsApp-Image-2025-09-23-at-13.35.21-2.jpg",
//     label: "Reduces\nCholesterol",
//   },
//   {
//     src: "/images/WhatsApp-Image-2025-09-23-at-13.35.20-3-1.jpg",
//     label: "High Smoke\nPoint",
//   },
//   {
//     src: "/images/WhatsApp-Image-2025-09-23-at-13.35.21.jpg",
//     label: "Skin-Improving\nBenefits",
//   },
//   {
//     src: "/images/WhatsApp-Image-2025-10-11-at-11.53.02-2.jpg",
//     label: "Natural\nAntioxidants",
//   },
//   {
//     src: "/images/WhatsApp-Image-2025-09-23-at-13.35.21-3.jpg",
//     label: "Physically\nRefined",
//   },
//   {
//     src: "/images/WhatsApp-Image-2025-10-11-at-11.53.02.jpeg",
//     label: "Balanced\nMUFA & PUFA",
//   },
// ];

// export default function VeerBharatHero() {
//   const productImg = "/images/WhatsApp-Image-2025-10-07-at-10.57.53.jpg";

//   return (
//     <section className="relative overflow-hidden w-full min-h-screen bg-gradient-to-br from-purple-50 via-amber-50 to-purple-100">
//       {/* Enhanced Background Pattern */}
//       <div className="absolute inset-0 opacity-20">
//         <div
//           className="absolute inset-0"
//           style={{
//             backgroundImage: `
//               radial-gradient(circle at 10% 20%, rgba(168, 85, 247, 0.4) 0%, transparent 40%),
//               radial-gradient(circle at 90% 80%, rgba(245, 158, 11, 0.4) 0%, transparent 40%),
//               radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)
//             `,
//           }}
//         />
//       </div>

//       {/* Ornamental Borders */}
//       <div className="absolute top-0 left-0 w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 border-l-4 border-t-4 border-purple-300 opacity-30 rounded-tl-2xl" />
//       <div className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 border-r-4 border-t-4 border-amber-300 opacity-30 rounded-tr-2xl" />
//       <div className="absolute bottom-0 left-0 w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 border-l-4 border-b-4 border-amber-300 opacity-30 rounded-bl-2xl" />
//       <div className="absolute bottom-0 right-0 w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 border-r-4 border-b-4 border-purple-300 opacity-30 rounded-br-2xl" />

//       <div className="relative w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
//         {/* HEADER SECTION */}
//         <div className="text-center max-w-6xl mx-auto mb-12 lg:mb-16">
//           {/* Decorative Divider */}
//           <div className="flex items-center justify-center mb-8 lg:mb-12 gap-3 lg:gap-4">
//             <div className="w-24 lg:w-32 h-1 bg-gradient-to-r from-transparent via-purple-400 to-purple-500 rounded-full" />
//             <div className="w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-gradient-to-br from-purple-500 to-amber-500 animate-pulse shadow-lg" />
//             <div className="w-24 lg:w-32 h-1 bg-gradient-to-l from-transparent via-amber-400 to-amber-500 rounded-full" />
//           </div>

//           {/* Main Heading */}
//           <div className="space-y-2 lg:space-y-4 mb-8 lg:mb-12">
//             <h1
//               className="font-bold text-gray-900 leading-none"
//               style={{
//                 fontFamily: "'Playfair Display', serif",
//                 textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
//               }}
//             >
//               <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mb-2 lg:mb-4 tracking-tight">
//                 VEER BHARAT
//               </span>
//               <span className="block text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mb-2 lg:mb-4 bg-gradient-to-r from-blue-900 via-amber-500 to-blue-900 bg-clip-text text-transparent tracking-wide">
//                 KACHI GHANI
//               </span>
//               <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl tracking-tight">
//                 MUSTARD OIL
//               </span>
//             </h1>
//           </div>

//           {/* Description */}
//           <div className="max-w-5xl mx-auto space-y-4 lg:space-y-6">
//             <p
//               className="text-lg sm:text-xl lg:text-2xl text-gray-800 leading-relaxed font-medium"
//               style={{
//                 fontFamily: "'Georgia', serif",
//               }}
//             >
//               Made from{" "}
//               <span className="text-purple-700 font-semibold">
//                 100% pure mustard seeds
//               </span>
//               , Veer Bharat Kachi Ghani Mustard Oil is a{" "}
//               <span className="text-amber-600 font-semibold">
//                 heart-healthy cooking oil
//               </span>{" "}
//               rich in natural goodness, which helps reduce cholesterol levels
//               and improve overall health.
//             </p>

//             <p
//               className="text-lg sm:text-xl lg:text-2xl text-gray-800 leading-relaxed font-medium"
//               style={{
//                 fontFamily: "'Georgia', serif",
//               }}
//             >
//               It's ideal for everyday cooking with a balanced blend of
//               monounsaturated and polyunsaturated fats. Free from harmful
//               chemicals, it's packed with antioxidants and offers a mild
//               flavour, making it perfect for frying, sautéing, and more.
//             </p>
//           </div>
//         </div>

//         {/* BENEFITS AND PRODUCT LAYOUT */}
//         <div className="max-w-7xl mx-auto">
//           {/* TOP BENEFITS ROW */}
//           <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 lg:mb-12 px-2">
//             {benefitsData.slice(0, 3).map((benefit, index) => (
//               <BenefitCircle
//                 key={`top-${index}`}
//                 benefit={benefit}
//                 index={index}
//                 delay={index * 0.1}
//               />
//             ))}
//           </div>

//           {/* CENTER PRODUCT SHOWCASE */}
//           <div className="my-8 lg:my-12">
//             <div className="relative flex justify-center">
//               {/* Glow Effect */}
//               <div className="absolute inset-0 bg-gradient-to-br from-amber-200 via-orange-300 to-amber-200 rounded-full blur-2xl opacity-60 animate-pulse scale-125" />

//               {/* Product Image */}
//               <div className="relative z-10 transform hover:scale-105 transition-transform duration-500 ease-out">
//                 <img
//                   src={productImg}
//                   alt="Veer Bharat Kachi Ghani Mustard Oil"
//                   className="w-48 sm:w-64 lg:w-80 xl:w-96 h-auto drop-shadow-2xl"
//                   style={{
//                     filter: "drop-shadow(0 25px 50px rgba(0,0,0,0.3))",
//                   }}
//                   loading="lazy"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* BOTTOM BENEFITS ROW */}
//           <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-8 lg:mt-12 px-2">
//             {benefitsData.slice(3, 6).map((benefit, index) => (
//               <BenefitCircle
//                 key={`bottom-${index}`}
//                 benefit={benefit}
//                 index={index + 3}
//                 delay={(index + 3) * 0.1}
//               />
//             ))}
//           </div>
//         </div>

//         {/* CLOSING HIGHLIGHT */}
//         <div className="max-w-4xl mx-auto mt-12 lg:mt-16">
//           <div className="bg-gradient-to-r from-purple-50 via-amber-50 to-purple-50 rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-xl border border-purple-200">
//             <h2
//               className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 lg:mb-6 text-center"
//               style={{
//                 fontFamily: "'Playfair Display', serif",
//               }}
//             >
//               Elevate Your Culinary Experience
//             </h2>
//             <p
//               className="text-lg sm:text-xl lg:text-2xl text-gray-800 text-center font-medium"
//               style={{
//                 fontFamily: "'Georgia', serif",
//               }}
//             >
//               Experience the{" "}
//               <span className="text-purple-600 font-semibold">Purity</span>,{" "}
//               <span className="text-amber-600 font-semibold">Health</span>, and{" "}
//               <span className="text-emerald-600 font-semibold">Tradition</span>{" "}
//               in Every Drop!
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* CSS Animations */}
//       <style jsx>{`
//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//       `}</style>
//     </section>
//   );
// }

// // Updated BenefitCircle component with larger circles and proper image cropping
// function BenefitCircle({ benefit, index, delay }) {
//   return (
//     <div
//       className="flex flex-col items-center group"
//       style={{
//         animation: `fadeInUp 0.6s ease-out ${delay}s both`,
//       }}
//     >
//       {/* Circular Container - Made Larger */}
//       <div className="relative mb-3 lg:mb-4">
//         {/* Glow Effect */}
//         <div className="absolute inset-0 bg-gradient-to-br from-amber-200 to-orange-300 rounded-full blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

//         {/* Main Circle - Increased Size */}
//         <div className="relative w-28 h-28 sm:w-32 sm:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 rounded-full bg-gradient-to-br from-amber-300 via-orange-300 to-amber-400 flex items-center justify-center shadow-xl border-4 border-white group-hover:scale-110 transition-transform duration-300 overflow-hidden">
//           {/* Image with object-cover for proper cropping */}
//           <img
//             src={benefit.src}
//             alt={benefit.label}
//             className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-500"
//             loading="lazy"
//           />
//         </div>
//       </div>

//       {/* Label */}
//       <p
//         className="text-sm sm:text-base lg:text-lg font-semibold text-gray-800 text-center whitespace-pre-line leading-tight group-hover:text-gray-900 transition-colors duration-300 mt-2"
//         style={{
//           fontFamily: "'Georgia', serif",
//         }}
//       >
//         {benefit.label}
//       </p>
//     </div>
//   );
// }





// "use client";
// import React, { useState, useRef, useEffect } from "react";

// const slidesInitial = [
//   {
//     id: 1,
//     title: "Pure & Natural",
//     desc: "100% Kachi Ghani process preserving natural nutrients and authentic flavor.",
//     image: "https://images.unsplash.com/photo-1474440692490-2e83ae13ba29?q=80&w=1470&auto=format&fit=crop",
//   },
//   {
//     id: 2,
//     title: "Heart Healthy",
//     desc: "Rich in Omega-3 and antioxidants for a healthier lifestyle.",
//     image: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?q=80&w=1632&auto=format&fit=crop",
//   },
//   {
//     id: 3,
//     title: "Traditional Method",
//     desc: "Cold-pressed using traditional wooden mills for maximum purity.",
//     image: "https://images.unsplash.com/photo-1464454709131-ffd692591ee5?q=80&w=1476&auto=format&fit=crop",
//   },
//   {
//     id: 4,
//     title: "Premium Quality",
//     desc: "Sourced from the finest mustard seeds across India's golden fields.",
//     image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1632&auto=format&fit=crop",
//   },
//   {
//     id: 5,
//     title: "Trusted Brand",
//     desc: "A legacy of excellence bringing authentic taste to your kitchen.",
//     image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1632&auto=format&fit=crop",
//   },
// ];

// export default function VeerBharatHero() {
//   const [slides, setSlides] = useState(slidesInitial);
//   const animRef = useRef(false);
//   const [autoPlay, setAutoPlay] = useState(true);

//   useEffect(() => {
//     if (!autoPlay) return;
//     const interval = setInterval(() => {
//       next();
//     }, 4000);
//     return () => clearInterval(interval);
//   }, [autoPlay, slides]);

//   const next = () => {
//     if (animRef.current) return;
//     animRef.current = true;
//     setSlides((s) => {
//       const copy = [...s];
//       const first = copy.shift();
//       copy.push(first);
//       return copy;
//     });
//     setTimeout(() => (animRef.current = false), 600);
//   };

//   const prev = () => {
//     if (animRef.current) return;
//     animRef.current = true;
//     setAutoPlay(false);
//     setSlides((s) => {
//       const copy = [...s];
//       const last = copy.pop();
//       copy.unshift(last);
//       return copy;
//     });
//     setTimeout(() => (animRef.current = false), 600);
//   };

//   return (
//     <div className="relative w-full min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 overflow-hidden">
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-20 left-10 w-72 h-72 bg-amber-200/30 rounded-full blur-3xl animate-pulse" />
//         <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
//       </div>

//       {/* Header */}
//       <header className="relative z-40 pt-8 pb-6">
//         <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
//           <div className="flex items-center gap-3">
//             <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-lg flex items-center justify-center shadow-lg">
//               <span className="text-white font-bold text-xl">VB</span>
//             </div>
//             <div>
//               <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">VEER BHARAT</h1>
//               <p className="text-xs text-orange-600 font-semibold">Kachi Ghani Mustard Oil</p>
//             </div>
//           </div>
//           <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-700">
//             <a href="#products" className="hover:text-orange-600 transition">Products</a>
//             <a href="#about" className="hover:text-orange-600 transition">About</a>
//             <a href="#contact" className="hover:text-orange-600 transition">Contact</a>
//           </nav>
//         </div>
//       </header>

//       {/* Main Hero Section */}
//       <section className="relative z-10 max-w-7xl mx-auto px-6 py-12">
//         {/* Title Section */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center gap-3 mb-6">
//             <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-orange-400" />
//             <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
//             <span className="text-orange-600 font-semibold tracking-widest text-sm">SINCE 1995</span>
//             <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
//             <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-orange-400" />
//           </div>
          
//           <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-4 tracking-tight">
//             Pure <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-600">Goodness</span>
//           </h2>
//           <h3 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
//             From Nature's Heart
//           </h3>
//           <p className="max-w-2xl mx-auto text-lg text-gray-700 leading-relaxed">
//             Experience the authentic taste of <strong className="text-orange-700">100% pure cold-pressed</strong> mustard oil, 
//             crafted with traditional Kachi Ghani methods for maximum nutrition and flavor.
//           </p>
//         </div>

//         {/* Carousel Container */}
//         <div className="relative bg-white/60 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-orange-100">
//           <div className="relative h-[480px] overflow-hidden rounded-2xl">
//             {/* Slides */}
//             <div className="relative w-full h-full">
//               {slides.map((slide, idx) => {
//                 const position =
//                   idx === 1
//                     ? "center"
//                     : idx === 0
//                     ? "left"
//                     : idx === 2
//                     ? "right-1"
//                     : idx === 3
//                     ? "right-2"
//                     : "hidden";
//                 return <SlideCard key={slide.id} slide={slide} position={position} />;
//               })}
//             </div>

//             {/* Navigation Buttons */}
//             <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4 z-40">
//               <button
//                 onClick={prev}
//                 onMouseEnter={() => setAutoPlay(false)}
//                 className="group w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl border-2 border-orange-200 hover:border-orange-400 transition-all duration-300 flex items-center justify-center hover:scale-110 active:scale-95"
//                 aria-label="Previous"
//               >
//                 <svg className="w-6 h-6 text-gray-700 group-hover:text-orange-600 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
//                 </svg>
//               </button>
//               <button
//                 onClick={() => { next(); setAutoPlay(false); }}
//                 className="group w-14 h-14 rounded-full bg-gradient-to-br from-orange-500 to-amber-600 shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center hover:scale-110 active:scale-95"
//                 aria-label="Next"
//               >
//                 <svg className="w-6 h-6 text-white transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
//                 </svg>
//               </button>
//             </div>
//           </div>

//           {/* Indicator Dots */}
//           <div className="flex justify-center gap-2 mt-6">
//             {[0, 1, 2, 3, 4].map((i) => (
//               <div
//                 key={i}
//                 className={`h-2 rounded-full transition-all duration-300 ${
//                   i === 1 ? 'w-8 bg-orange-500' : 'w-2 bg-gray-300'
//                 }`}
//               />
//             ))}
//           </div>
//         </div>

//         {/* CTA Section */}
//         <div className="mt-16 text-center">
//           <button className="group relative px-10 py-5 bg-gradient-to-r from-orange-500 to-amber-600 text-white font-bold text-lg rounded-full shadow-2xl hover:shadow-orange-300/50 transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden">
//             <span className="relative z-10">Discover Our Products</span>
//             <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//           </button>
//           <p className="mt-4 text-sm text-gray-600">Free shipping on orders above ₹999</p>
//         </div>
//       </section>

//       {/* Footer Badge */}
//       <div className="relative z-10 text-center pb-8">
//         <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-orange-100">
//           <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
//           <span className="text-sm font-semibold text-gray-700">ISO Certified | 100% Natural | No Preservatives</span>
//         </div>
//       </div>
//     </div>
//   );
// }

// function SlideCard({ slide, position }) {
//   let baseClasses = "absolute transition-all duration-700 ease-out rounded-2xl overflow-hidden";
//   let style = {};
//   let contentVisible = false;
//   let zIndex = 10;

//   if (position === "center") {
//     baseClasses += " left-0 top-0 w-full h-full shadow-2xl";
//     style = {
//       backgroundImage: `url('${slide.image}')`,
//       backgroundPosition: "center",
//       backgroundSize: "cover",
//     };
//     contentVisible = true;
//     zIndex = 30;
//   } else if (position === "left") {
//     baseClasses += " left-0 top-0 w-full h-full opacity-0";
//     style = {
//       transform: "translate(-120%, 0) scale(0.8)",
//       backgroundImage: `url('${slide.image}')`,
//       backgroundPosition: "center",
//       backgroundSize: "cover",
//     };
//     zIndex = 5;
//   } else if (position === "right-1") {
//     baseClasses += " top-1/2 -translate-y-1/2 left-[45%] w-[240px] h-[300px] shadow-xl";
//     style = {
//       transform: "translate(0, -50%)",
//       backgroundImage: `url('${slide.image}')`,
//       backgroundPosition: "center",
//       backgroundSize: "cover",
//     };
//     zIndex = 25;
//   } else if (position === "right-2") {
//     baseClasses += " top-1/2 -translate-y-1/2 left-[65%] w-[200px] h-[250px] shadow-lg opacity-80";
//     style = {
//       transform: "translate(0, -50%)",
//       backgroundImage: `url('${slide.image}')`,
//       backgroundPosition: "center",
//       backgroundSize: "cover",
//     };
//     zIndex = 20;
//   } else {
//     baseClasses += " top-1/2 -translate-y-1/2 left-[85%] w-[180px] h-[220px] opacity-0 pointer-events-none";
//     style = {
//       transform: "translate(0, -50%)",
//       backgroundImage: `url('${slide.image}')`,
//       backgroundPosition: "center",
//       backgroundSize: "cover",
//     };
//     zIndex = 15;
//   }

//   return (
//     <div className={baseClasses} style={{ ...style, zIndex }}>
//       <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      
//       <div className={`absolute top-1/2 left-16 transform -translate-y-1/2 max-w-md ${contentVisible ? "opacity-100" : "opacity-0 pointer-events-none"} transition-opacity duration-700`}>
//         <div className="inline-block px-4 py-1 bg-orange-500/90 backdrop-blur-sm rounded-full mb-4">
//           <span className="text-white text-xs font-bold tracking-wider">PREMIUM QUALITY</span>
//         </div>
//         <h3 className="text-5xl font-black text-white mb-4 tracking-tight drop-shadow-2xl">
//           {slide.title}
//         </h3>
//         <p className="text-white/95 text-base leading-relaxed mb-6 drop-shadow-lg">
//           {slide.desc}
//         </p>
//         <button className="px-6 py-3 bg-white text-gray-900 font-bold rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 active:scale-95">
//           Learn More →
//         </button>
//       </div>
//     </div>
//   );
// }





// "use client";
// import React, { useState, useRef, useEffect } from "react";

// const slidesInitial = [
//   {
//     id: 1,
//     title: "Traditional",
//     desc: "Cold-pressed using traditional wooden mills for maximum purity.",
//     image: "/images/cu1.png",
//   },
//   {
//     id: 2,
//     title: "Heart Healthy",
//     desc: "Rich in Omega-3 and antioxidants for a healthier lifestyle.",
//     image: "/images/cu2.png",
//   },
//   {
//     id: 3,
//     title: "Pure & Natural",
//     desc: "100% Kachi Ghani process preserving natural nutrients.",
//     image: "/images/4.png",
//   },
//   {
//     id: 4,
//     title: "Premium Quality",
//     desc: "Sourced from the finest mustard seeds across India.",
//     image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1632&auto=format&fit=crop",
//   },
//   {
//     id: 5,
//     title: "Trusted Brand",
//     desc: "A legacy of excellence bringing authentic taste to your kitchen.",
//     image: "/images/5.png",
//   },
// ];

// export default function VeerBharatHero() {
//   const [slides, setSlides] = useState(slidesInitial);
//   const animRef = useRef(false);
//   const [autoPlay, setAutoPlay] = useState(true);

//   useEffect(() => {
//     if (!autoPlay) return;
//     const interval = setInterval(() => {
//       next();
//     }, 4000);
//     return () => clearInterval(interval);
//   }, [autoPlay, slides]);

//   const next = () => {
//     if (animRef.current) return;
//     animRef.current = true;
//     setSlides((s) => {
//       const copy = [...s];
//       const first = copy.shift();
//       copy.push(first);
//       return copy;
//     });
//     setTimeout(() => (animRef.current = false), 600);
//   };

//   const prev = () => {
//     if (animRef.current) return;
//     animRef.current = true;
//     setAutoPlay(false);
//     setSlides((s) => {
//       const copy = [...s];
//       const last = copy.pop();
//       copy.unshift(last);
//       return copy;
//     });
//     setTimeout(() => (animRef.current = false), 600);
//   };

//   return (
//     <div className="relative w-full bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 overflow-hidden py-16">
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-20 left-10 w-72 h-72 bg-amber-200/30 rounded-full blur-3xl animate-pulse" />
//         <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
//       </div>

//       {/* Main Hero Section */}
//       <section className="relative z-10 max-w-7xl mx-auto px-6">
//         {/* Logo and Navigation */}
//         <div className="flex items-center justify-between mb-8">
//           <div className="flex items-center gap-3">
//             <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center shadow-lg">
//               <span className="text-white font-bold text-2xl">VB</span>
//             </div>
//             <div>
//               <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">VEER BHARAT</h1>
//               <p className="text-xs text-orange-600 font-semibold">Kachi Ghani Mustard Oil</p>
//             </div>
//           </div>
//           <nav className="hidden md:flex gap-6 text-base font-medium text-gray-700">
//             <a href="#products" className="hover:text-orange-600 transition">Products</a>
//             <a href="#about" className="hover:text-orange-600 transition">About</a>
//             <a href="#contact" className="hover:text-orange-600 transition">Contact</a>
//           </nav>
//         </div>

//         {/* Title Section */}
//         <div className="text-center mb-12">
//           <div className="inline-flex items-center gap-3 mb-6">
//             <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-orange-400" />
//             <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
//             <span className="text-orange-600 font-semibold tracking-widest text-sm">SINCE 1995</span>
//             <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
//             <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-orange-400" />
//           </div>
          
//           <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 tracking-tight leading-tight">
//             Pure <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-600">Goodness</span> From Nature's Heart
//           </h2>
          
//           <p className="max-w-3xl mx-auto text-base md:text-lg text-gray-700 leading-relaxed">
//             <span className="font-semibold text-gray-900">Experience the authentic taste of </span>
//             <strong className="text-orange-700">100% pure cold-pressed</strong>
//             <span className="font-semibold text-gray-900"> mustard oil, crafted with traditional </span>
//             <strong className="text-orange-700">Kachi Ghani methods</strong>
//             <span className="font-semibold text-gray-900"> for maximum nutrition and flavor.</span>
//           </p>
//         </div>

//         {/* Carousel Container */}
//         <div className="relative bg-white/60 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-orange-100">
//           <div className="relative h-[480px] overflow-hidden rounded-2xl">
//             {/* Slides */}
//             <div className="relative w-full h-full">
//               {slides.map((slide, idx) => {
//                 const position =
//                   idx === 1
//                     ? "center"
//                     : idx === 0
//                     ? "left"
//                     : idx === 2
//                     ? "right-1"
//                     : idx === 3
//                     ? "right-2"
//                     : "hidden";
//                 return <SlideCard key={slide.id} slide={slide} position={position} />;
//               })}
//             </div>

//             {/* Navigation Buttons */}
//             <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4 z-40">
//               <button
//                 onClick={prev}
//                 onMouseEnter={() => setAutoPlay(false)}
//                 className="group w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl border-2 border-orange-200 hover:border-orange-400 transition-all duration-300 flex items-center justify-center hover:scale-110 active:scale-95"
//                 aria-label="Previous"
//               >
//                 <svg className="w-6 h-6 text-gray-700 group-hover:text-orange-600 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
//                 </svg>
//               </button>
//               <button
//                 onClick={() => { next(); setAutoPlay(false); }}
//                 className="group w-14 h-14 rounded-full bg-gradient-to-br from-orange-500 to-amber-600 shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center hover:scale-110 active:scale-95"
//                 aria-label="Next"
//               >
//                 <svg className="w-6 h-6 text-white transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
//                 </svg>
//               </button>
//             </div>
//           </div>

//           {/* Indicator Dots */}
//           <div className="flex justify-center gap-2 mt-6">
//             {[0, 1, 2, 3, 4].map((i) => (
//               <div
//                 key={i}
//                 className={`h-2 rounded-full transition-all duration-300 ${
//                   i === 1 ? 'w-8 bg-orange-500' : 'w-2 bg-gray-300'
//                 }`}
//               />
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// function SlideCard({ slide, position }) {
//   let baseClasses = "absolute transition-all duration-700 ease-out rounded-2xl overflow-hidden";
//   let style = {};
//   let contentVisible = false;
//   let zIndex = 10;

//   if (position === "center") {
//     baseClasses += " left-0 top-0 w-full h-full shadow-2xl";
//     style = {
//       backgroundImage: `url('${slide.image}')`,
//       backgroundPosition: "center",
//       backgroundSize: "cover",
//     };
//     contentVisible = true;
//     zIndex = 30;
//   } else if (position === "left") {
//     baseClasses += " left-0 top-0 w-full h-full opacity-0";
//     style = {
//       transform: "translate(-120%, 0) scale(0.8)",
//       backgroundImage: `url('${slide.image}')`,
//       backgroundPosition: "center",
//       backgroundSize: "cover",
//     };
//     zIndex = 5;
//   } else if (position === "right-1") {
//     baseClasses += " top-1/2 -translate-y-1/2 left-[45%] w-[240px] h-[300px] shadow-xl";
//     style = {
//       transform: "translate(0, -50%)",
//       backgroundImage: `url('${slide.image}')`,
//       backgroundPosition: "center",
//       backgroundSize: "cover",
//     };
//     zIndex = 25;
//   } else if (position === "right-2") {
//     baseClasses += " top-1/2 -translate-y-1/2 left-[65%] w-[200px] h-[250px] shadow-lg opacity-80";
//     style = {
//       transform: "translate(0, -50%)",
//       backgroundImage: `url('${slide.image}')`,
//       backgroundPosition: "center",
//       backgroundSize: "cover",
//     };
//     zIndex = 20;
//   } else {
//     baseClasses += " top-1/2 -translate-y-1/2 left-[85%] w-[180px] h-[220px] opacity-0 pointer-events-none";
//     style = {
//       transform: "translate(0, -50%)",
//       backgroundImage: `url('${slide.image}')`,
//       backgroundPosition: "center",
//       backgroundSize: "cover",
//     };
//     zIndex = 15;
//   }

//   return (
//     <div className={baseClasses} style={{ ...style, zIndex }}>
//       <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      
//       <div className={`absolute top-1/2 left-16 transform -translate-y-1/2 max-w-md ${contentVisible ? "opacity-100" : "opacity-0 pointer-events-none"} transition-opacity duration-700`}>
//         <div className="inline-block px-4 py-1 bg-orange-500/90 backdrop-blur-sm rounded-full mb-4">
//           <span className="text-white text-xs font-bold tracking-wider">PREMIUM QUALITY</span>
//         </div>
//         <h3 className="text-5xl font-black text-white mb-4 tracking-tight drop-shadow-2xl">
//           {slide.title}
//         </h3>
//         <p className="text-white/95 text-base leading-relaxed mb-6 drop-shadow-lg">
//           {slide.desc}
//         </p>
//         <button className="px-6 py-3 bg-white text-gray-900 font-bold rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 active:scale-95">
//           Learn More →
//         </button>
//       </div>
//     </div>
//   );
// }



"use client";
import React, { useState, useRef, useEffect } from "react";

const slidesInitial = [
  {
    id: 1,
    title: "1 Liter Bottle",
    desc: "Perfect for daily cooking needs with authentic mustard oil flavor.",
    image: "/images/1.png",
  },
  {
    id: 2,
    title: "Jar Packaging",
    desc: "Premium quality in convenient jar sizes for modern kitchens.",
    image: "/images/2.png",
  },
  {
    id: 3,
    title: "15L Tin",
    desc: "Bulk packaging for commercial use and large families.",
    image: "/images/3.png",
  },
  {
    id: 4,
    title: "500ml Bottle",
    desc: "Compact and portable packaging for small households.",
    image: "/images/4.png",
  },
  {
    id: 5,
    title: "Economy Pack",
    desc: "Value for money with premium quality mustard oil.",
    image: "/images/5.png",
  },
];

export default function VeerBharatHero() {
  const [slides, setSlides] = useState(slidesInitial);
  const animRef = useRef(false);

  const next = () => {
    if (animRef.current) return;
    animRef.current = true;
    setSlides((s) => {
      const copy = [...s];
      const first = copy.shift();
      copy.push(first);
      return copy;
    });
    setTimeout(() => (animRef.current = false), 600);
  };

  const prev = () => {
    if (animRef.current) return;
    animRef.current = true;
    setSlides((s) => {
      const copy = [...s];
      const last = copy.pop();
      copy.unshift(last);
      return copy;
    });
    setTimeout(() => (animRef.current = false), 600);
  };

  return (
    <section className="relative w-full py-20 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-10 left-10 w-64 h-64 bg-yellow-200 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-orange-200 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-4">
            Pure <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-yellow-600 to-amber-600">Goodness</span> From Nature's Heart
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed mt-6">
            Experience the authentic taste of <strong className="text-orange-700">100% pure cold-pressed</strong> mustard oil, 
            crafted with traditional <strong className="text-orange-700">Kachi Ghani methods</strong> for maximum nutrition and flavor.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative bg-white/40 backdrop-blur-sm rounded-3xl shadow-2xl p-8">
          <div className="relative h-[500px] overflow-hidden rounded-2xl">
            <div className="relative w-full h-full">
              {slides.map((slide, idx) => {
                const position =
                  idx === 1 ? "center"
                  : idx === 0 ? "left"
                  : idx === 2 ? "right-1"
                  : idx === 3 ? "right-2"
                  : "hidden";
                return <SlideCard key={slide.id} slide={slide} position={position} />;
              })}
            </div>

            {/* Navigation Buttons */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4 z-40">
              <button
                onClick={prev}
                className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm shadow-xl border-2 border-orange-300 hover:border-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300 flex items-center justify-center hover:scale-110 active:scale-95"
                aria-label="Previous"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={next}
                className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-500 to-amber-600 text-white shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center hover:scale-110 active:scale-95"
                aria-label="Next"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Indicator Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === 1 ? 'w-8 bg-orange-500' : 'w-2 bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SlideCard({ slide, position }) {
  let baseClasses = "absolute transition-all duration-700 ease-out rounded-2xl overflow-hidden";
  let style = {};
  let contentVisible = false;
  let zIndex = 10;

  if (position === "center") {
    baseClasses += " left-0 top-0 w-full h-full shadow-2xl bg-gradient-to-br from-yellow-100 to-amber-100";
    contentVisible = true;
    zIndex = 30;
  } else if (position === "left") {
    baseClasses += " left-0 top-0 w-full h-full opacity-0";
    style = { transform: "translate(-120%, 0) scale(0.8)" };
    zIndex = 5;
  } else if (position === "right-1") {
    baseClasses += " top-1/2 -translate-y-1/2 left-[45%] w-[240px] h-[300px] shadow-xl bg-gradient-to-br from-yellow-50 to-amber-50";
    style = { transform: "translate(0, -50%)" };
    zIndex = 25;
  } else if (position === "right-2") {
    baseClasses += " top-1/2 -translate-y-1/2 left-[65%] w-[200px] h-[250px] shadow-lg opacity-80 bg-gradient-to-br from-yellow-50 to-amber-50";
    style = { transform: "translate(0, -50%)" };
    zIndex = 20;
  } else {
    baseClasses += " top-1/2 -translate-y-1/2 left-[85%] w-[180px] h-[220px] opacity-0 pointer-events-none";
    style = { transform: "translate(0, -50%)" };
    zIndex = 15;
  }

  return (
    <div className={baseClasses} style={{ ...style, zIndex }}>
      {/* Product Image */}
      <div className="absolute inset-0 flex items-center justify-center p-8">
        <img 
          src={slide.image} 
          alt={slide.title}
          className="w-full h-full object-contain drop-shadow-2xl"
        />
      </div>
      
      {/* Content overlay for center slide */}
      <div className={`absolute top-1/2 left-16 transform -translate-y-1/2 max-w-md ${contentVisible ? "opacity-100" : "opacity-0 pointer-events-none"} transition-opacity duration-700`}>
        <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-2xl">
          <div className="inline-block px-4 py-1 bg-orange-500 rounded-full mb-3">
            <span className="text-white text-xs font-bold tracking-wider">PREMIUM QUALITY</span>
          </div>
          <h3 className="text-4xl font-black text-gray-900 mb-3 tracking-tight">
            {slide.title}
          </h3>
          <p className="text-gray-700 text-base leading-relaxed mb-4">
            {slide.desc}
          </p>
          <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 active:scale-95">
            Learn More →
          </button>
        </div>
      </div>
    </div>
  );
}