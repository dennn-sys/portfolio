import { cn } from "./lib/utils";
import Topbar from "./components/Topbar";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Aside from "./components/Aside";
import MainContent from "./components/MainContent";

function App() {
  const isDark = false;
  return (
    <div
      className={cn(
        "flex w-full flex-col items-center bg-muted",
        isDark && "dark",
      )}
    >
      <Topbar />
      <Header />
      <div className="sticky top-0 flex w-full justify-center bg-background shadow-md">
        <div className="w-full max-w-[1302px] px-5">
          <Navbar />
        </div>
      </div>
      <div className="flex w-full max-w-[1302px] flex-col items-center gap-5 p-5 lg:flex-row lg:items-start">
        <Aside />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
