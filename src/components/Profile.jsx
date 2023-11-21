import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./LogoutButton";
import Contact from "./Contact";

import { toast } from "react-toastify";
const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  useEffect(() => {
    toast("Chào mừng bạn đã qua trở lại");
  }, []);
  return (
    isAuthenticated && (
      <div className="MuiBox-root css-1zb6fj wrapper-message">
        <div className="MuiPaper-root MuiPaper-outlined MuiPaper-rounded MuiCard-root css-1okfn8i">
          <div className="MuiCardContent-root css-1ytzjqi">
            <div className="MuiPaper-root MuiPaper-outlined MuiPaper-rounded MuiCard-root jss1 css-1okfn8i">
              <div className="MuiCardContent-root css-1qw96cp">
                <div className="MuiAvatar-root MuiAvatar-circular jss2 css-3i9vrz">
                  <img src={user?.picture} alt={user?.name} />
                </div>
                <h6 className="MuiTypography-root MuiTypography-h6 jss3 css-1anx036">
                  Xin Chào {user?.name} !
                </h6>
                <p className="MuiTypography-root MuiTypography-body2 jss4 css-68o8xu">
                  {user?.locale === "vi" && "Vị trí: Tiếng Việt "}
                </p>
                <p className="MuiTypography-root MuiTypography-body2 css-68o8xu">
                  Email:
                  <a
                    className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways jss5 css-1fye6mt"
                    href={"mailto:" + user?.email}
                  >
                    {user?.email}
                  </a>
                </p>
                <Contact />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Profile;
