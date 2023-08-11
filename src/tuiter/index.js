import { Routes, Route } from "react-router";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import HomeScreen from "./home-screen";
import ExploreScreen from "./explore-screen";
import BookmarksScreen from "./bookmarks-screen";
import WhoToFollowList from "./who-to-follow-list";
import whoReducer from "./tuits/reducers/who-reducer";
import tuitsReducer from "./tuits/reducers/tuits-reducer";
import { configureStore } from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import ProfileScreen from "./user/profile-screen";
import LoginScreen from "./user/login-screen";
import RegisterScreen from "./user/register-screen";
import authReducer from "./tuits/reducers/auth-reducer";
import ProtectedRoute from "./user/protected-route";

const store = configureStore(
  {reducer: {who: whoReducer, tuits: tuitsReducer, user: authReducer}});

function Tuiter() {
   return (
      <Provider store={store}>
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
                <Route path="/login"    element={<LoginScreen    />} />
                <Route path="/register" element={<RegisterScreen />} />
                <Route path="/profile"  element={<ProfileScreen />} />
                {/* <Route path="/profile"  element={
                <ProtectedRoute>
                  <ProfileScreen />
                </ProtectedRoute>} /> */}
              </Routes>
            </div>
            <div className="col-3">
              <WhoToFollowList/>
            </div>
          </div>
        </div>
      </Provider>
      
    );
   
 }
 export default Tuiter