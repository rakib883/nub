
const stats = [
  { id: 1, count: "246", label: "Expert Instructor", icon: "" },
  { id: 2, count: "416", label: "Happy Student", icon: ""},
  { id: 3, count: "648", label: "Course Done", icon: "" },
  { id: 4, count: "824", label: "Award Winner", icon: "" },
];

const StatsSection = () => {
  return (
    <section className="relative py-16 bg-[#1e293b]">
      {/* Background Overlay (Optional: image thakle ekhane background-image dite paren) */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1500')] bg-cover bg-center"></div>

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center space-y-3 group">
              {/* Icon */}
              <div className="text-[#FFD233] text-4xl md:text-5xl transition-transform duration-300 group-hover:scale-110">
                {stat.icon}
              </div>
              
              {/* Number */}
              <h3 className="text-[#FFD233] text-3xl md:text-4xl font-extrabold">
                {stat.count}
              </h3>
              
              {/* Label */}
              <p className="text-white text-sm md:text-base font-medium tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;