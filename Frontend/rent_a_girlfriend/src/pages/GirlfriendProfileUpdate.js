import { useCallback } from "react";
import "./GirlfriendProfileUpdate.css";
const GirlfriendProfileUpdate = () => {
  const onGirlfriendProfileUpdateClick = useCallback(() => {
    // Please sync "Girlfriend Page" to the project
  }, []);

  return (
    <div
      className="girlfriend-profile-update"
      onClick={onGirlfriendProfileUpdateClick}
    >
      <div className="girlfriend-profile-update-child" />
      <div className="girlfriend-profile-update-item" />
      <div className="desc-with-pic">
        <div className="description-with-update">
          <div className="description">
            <div className="frame">
              <div className="username">
                <div className="username1">Username</div>
                <div className="username-child" />
              </div>
              <div className="age2">
                <div className="username1">Age</div>
                <div className="username-child" />
              </div>
              <div className="body-shape">
                <div className="location-of-residence">Body shape</div>
                <img className="frame-icon" alt="" src="/frame.svg" />
              </div>
            </div>
            <div className="frame1">
              <div className="body-shape">
                <div className="location-of-residence">
                  Location of residence
                </div>
                <div className="residence-child" />
              </div>
              <div className="body-shape">
                <div className="location-of-residence">Height</div>
                <div className="residence-child" />
              </div>
            </div>
            <div className="frame2">
              <div className="body-shape">
                <div className="location-of-residence">Occupation</div>
                <div className="residence-child" />
              </div>
              <div className="bio4">
                <div className="username1">Bio</div>
                <div className="bio-child" />
              </div>
            </div>
          </div>
          <div className="update">
            <div className="update1">Update</div>
          </div>
        </div>
      </div>
      <div className="upload-picture">
        <img className="image-12-icon" alt="" src="/image-121@2x.png" />
        <div className="frame3">
          <div className="upload-picture1">Upload Picture</div>
        </div>
      </div>
      <div className="navbar4">
        <div className="group-parent1">
          <img className="frame-child8" alt="" src="/group-19374.svg" />
          <div className="rent-a-gf-container3">
            <p className="rent-a3">{`Rent A `}</p>
            <p className="rent-a3">GF</p>
          </div>
        </div>
        <div className="nav-link4">
          <div className="features3">Features</div>
          <div className="safety3">Safety</div>
          <div className="login3">Login</div>
          <div className="premium3">Premium</div>
        </div>
      </div>
    </div>
  );
};

export default GirlfriendProfileUpdate;
