// Import For Hooks
import { useMediaQuery } from "../hooks/mediaScreen";
// Import For Layouts
import { NavBar, Footer } from "../layouts";
// Import For Components
import { NavIcons } from "../components";
import { Quiz } from "../components/Quiz";
// Import For Data
import { eventsQuiz } from "../data/events";

export default function QuizEvents() {
  const isTablet = useMediaQuery("(max-width: 768px)");

  return (
    <>
      <NavBar />
      <div className="my-6">
        <Quiz quiz={eventsQuiz} />
      </div>
      <Footer />
      {isTablet ? <NavIcons /> : ""}
    </>
  );
}
