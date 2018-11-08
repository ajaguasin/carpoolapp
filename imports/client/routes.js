import React from "react";
import { Route, Switch, Redirect } from "react-router";
import Welcome from "../ui/pages/welcome/index";
import Select from "../ui/pages/selection/index";
import Main from "../ui/pages/main/index";
import Profile from "../ui/pages/profile";
import { UsersInfoContext } from "../ui/components/context/UsersInfoProvider";

const Layout = props => {
  console.log("props", props);
  return (
    <React.Fragment>
      <UsersInfoContext.Consumer>
        {({ allUserInfo, myUserInfo, loading }) => {
          if (!loading && myUserInfo.length) {
            if (!loading && !myUserInfo[0].profileComplete) {
              return (
                <Switch>
                  <Route exact path="/createprofile" component={Profile} />
                  <Redirect from="*" to="/createprofile" />
                </Switch>
              );
            } else {
              return (
                <Switch>
                  <Route exact path="/select" component={Select} />
                  <Route exact path="/main" component={Main} />
                  <Route exact path="/profile" component={Profile} />
                  {/* <Redirect from="*" to="/select" /> */}
                </Switch>
              );
            }
          } //else {
          //   return (
          //     <Switch>
          //       <Route exact path="/welcome" component={Welcome} />
          //       <Redirect from="*" to="/welcome" />
          //     </Switch>
          //   );
          // }
        }}
      </UsersInfoContext.Consumer>
    </React.Fragment>
  );
};

export default Layout;
