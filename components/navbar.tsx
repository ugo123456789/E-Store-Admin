import prismadb from "@/lib/prismaDB";
import { UserButton, auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { MainNav } from "./MainNav";
import { ModeToggle } from "./mode-toggle";
import StoreSwitcher from "./StoreSwitcher";



const Navbar = async () => {
  const { userId } = auth();

  if (!userId) {
    redirect('/sign-in');
  }

  const stores = await prismadb.store.findMany({
    where: {
      userId,
    }
  });

  return ( 
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <StoreSwitcher items={stores} />
        <MainNav className="mx-6" />
        <ModeToggle/>
        <div className="ml-auto flex items-center space-x-4">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </div>
  );
};
 
export default Navbar;