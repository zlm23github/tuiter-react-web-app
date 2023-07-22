import { Routes, Route } from "react-router";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import HomeScreen from "./home-screen";
import ExploreScreen from "./explore-screen";
import BookmarksScreen from "./bookmarks-screen";
import ProfileScreen from "./profile-screen";
import WhoToFollowList from "./who-to-follow-list";


function Tuiter() {
   return (
      <div>
        <Nav />
        <div className="row">
          <div className="col-2">
            <NavigationSidebar />
          </div>
          <div className="col-7">
            <Routes>
              <Route path ="/" element={<ExploreScreen/>}/>
              <Route path="/home" element={<HomeScreen/>} />
              <Route path="/explore" element={<ExploreScreen/>} />
              <Route path="/notifications" element={<BookmarksScreen/>}/>
              <Route path="/profile" element={<ProfileScreen/>} />
            </Routes>
          </div>
          <div className="col-3">
            <WhoToFollowList/>
            
         </div>
        </div>
      </div>
    );
   
 }
 export default Tuiter