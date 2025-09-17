// Import For Hooks
import { useMediaQuery } from "../hooks/mediaScreen";
// Import For Layouts
import { NavBar, Footer } from "../layouts";
// Import For Components
import { NavIcons } from "../components";

// Component Home
export default function Home() {
  // Responsive Constants
  const isTablet = useMediaQuery("(max-width: 768px)");

  return (
    <>
      {/* Nav Bar */}
      <NavBar />
      {/* Footer */}
      <Footer />
      {/* Nav Icons */}
      {isTablet ? <NavIcons /> : ''}
    </>
  );
}