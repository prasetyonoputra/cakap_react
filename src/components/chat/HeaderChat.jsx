export default function HeaderChat({ user, userImage }) {
  return (
    <div className="header-chat item-row-around">
      <div className="item-row">
        <button className="custom-button" onClick={() => window.history.back()}>
          <span
            className="bi bi-arrow-left-short"
            style={{ color: "white", fontSize: "35px" }}
          ></span>
        </button>

        <div className="profile-chat-container item-row">
          <img
            style={{ marginRight: "10px", borderRadius: "50%" }}
            width={55}
            height={55}
            src={userImage}
            alt="Profile Logo"
          />

          <div className="item-column">
            <span>{`${user.firstName} ${user.lastName}`}</span>
            <span>{user.status}</span>
          </div>
        </div>
      </div>

      <div className="item-row">
        <div style={{ marginRight: "15px" }}>
          <button
            className="custom-button"
            onClick={() => window.history.back()}
          >
            <span
              className="bi bi-camera-video-fill"
              style={{ color: "white", fontSize: "20px" }}
            ></span>
          </button>
        </div>

        <button className="custom-button" onClick={() => window.history.back()}>
          <span
            className="bi bi-telephone-fill"
            style={{ color: "white", fontSize: "20px" }}
          ></span>
        </button>
      </div>
    </div>
  );
}
