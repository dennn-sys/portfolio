import { cn } from "./lib/utils";
import CoverPhoto from "./components/CoverPhoto";
import Header from "./components/Header";
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import Aside from "./components/Aside";
import MainContent from "./components/MainContent";

function App() {
  const isDark = false;
  return (
    <div
      className={cn(
        "bg-muted flex w-screen flex-col items-center",
        isDark && "dark",
      )}
    >
      <div className="bg-background flex h-fit w-full justify-center ">
        <div className="flex h-fit max-w-[1366px] flex-grow flex-col items-center">
          <Topbar />
          <CoverPhoto />
          <div className="w-full max-w-[1302px] px-5">
            <Header />
          </div>
        </div>
      </div>
      <div className="bg-background sticky top-0 flex w-full justify-center shadow-md">
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
