import "./index.css"; // ✅ Make sure Tailwind is imported
import UserProfile from "./components/UserProfile"; // ✅ Import the styled component

function App() {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <UserProfile />
    </div>
  );
}

export default App;
