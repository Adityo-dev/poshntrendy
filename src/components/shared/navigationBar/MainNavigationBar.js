// import Components
import { BottomNavigationBar } from "./BottomNavigationBar";
import CenterNavigationBar from "./CenterNavigationBar";
import TopNavigationBar from "./TopNavigationBar";

function MainNavigationBar() {
  return (
    <main>
      <TopNavigationBar />
      <CenterNavigationBar />
      <BottomNavigationBar />
    </main>
  );
}

export default MainNavigationBar;
