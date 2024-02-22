import { LuGraduationCap, LuHome, LuPhone, LuMail } from "react-icons/lu";

export default function IntoCard() {
  return (
    <div className="bg-background text-foreground space-y-2 rounded-lg p-4 shadow-md">
      <h2 className=" text-xl font-bold">Info</h2>
      <p className="pb-2 text-center">Need my services?</p>
      <hr />
      <div className="flex items-center gap-3 pt-2">
        <LuGraduationCap className="text-muted-foreground text-2xl" />
        <span>Studied at WMSU, Zamboanga, City</span>
      </div>
      <div className="flex items-center gap-3">
        <LuHome className="text-muted-foreground text-2xl" />
        <span>Lives in Gulayan Village, San Jose Gusu, ZC</span>
      </div>
      <div className="flex items-center gap-3">
        <LuPhone className="text-muted-foreground text-2xl" />
        <span>+63-992-9519627</span>
      </div>
      <div className="flex items-center gap-3">
        <LuMail className="text-muted-foreground text-2xl" />
        <span>rodenmharismael@gmail.com</span>
      </div>
    </div>
  );
}
