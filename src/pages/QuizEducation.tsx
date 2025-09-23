// Import For Hooks
import { useMediaQuery } from "../hooks/mediaScreen";
// Import For Layouts
import { NavBar, Footer } from "../layouts";
// Import For Components
import { NavIcons } from "../components";
import { Quiz } from "../components/Quiz";
// Import For Data
import { educationQuiz } from "../data/education";

export default function QuizEducation() {
  // Media Query
  const isTablet = useMediaQuery("(max-width: 768px)");

  return (
    <>
      {/* Navbar */}
      <NavBar />
      {/* Quiz */}
      <div className="my-6">
        <Quiz quiz={educationQuiz} />
      </div>
      {/* Footer */}
      <Footer />
      {/* Icons */}
      {isTablet ? <NavIcons /> : ""}
    </>
  );
}
