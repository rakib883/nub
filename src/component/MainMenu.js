import React from "react";
import Link from "next/link";

// 🔹 Menu items as array (same file)
const menuItems = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Courses", path: "/courses" },
  { name: "Trainers", path: "/trainers" },
  { name: "Admission", path: "/admission" },
  { name: "Contact", path: "/contact" },
  { name: "Student-Portal", path: "/student-portal" },
];

// 🔹 Header Component
const MainMenu = () => {
  return (
    <header className="">
      <div className="max-w-[1280px] mx-auto flex justify-between items-center py-4 px-4">
        {/* Menu */}
        <nav>
          <ul className="flex gap-6">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.path}
                  className="text-gray-800 font-semibold hover:text-[#f1c40f] transition-colors duration-300"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

      </div>
    </header>
  );
};

export default MainMenu;
