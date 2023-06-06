import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./BoyfriendDashboard.css";
const BoyfriendDashboard = () => {
  const navigate = useNavigate();

  const onBoyfriendDashboardContainerClick = useCallback(() => {
    navigate("/register-page");
  }, [navigate]);

  return (
    <div
      className="boyfriend-dashboard"
      onClick={onBoyfriendDashboardContainerClick}
    >
      <div className="boyfriend-page">
        <div className="boyfriend-page-child" />
        <div className="calendar-parent">
          <div className="calendar">
            <div className="header">
              <div className="may-2023">May 2023</div>
              <div className="chevron-parent">
                <div className="chevron">
                  <img className="chevron-child" alt="" src="/frame-10.svg" />
                </div>
                <div className="chevron1">
                  <img className="chevron-child" alt="" src="/frame-101.svg" />
                </div>
              </div>
            </div>
            <div className="days">
              <div className="row">
                <div className="cell">
                  <div className="mo">Mo</div>
                </div>
                <div className="cell1">
                  <div className="mo">Tu</div>
                </div>
                <div className="cell1">
                  <div className="mo">We</div>
                </div>
                <div className="cell1">
                  <div className="mo">Th</div>
                </div>
                <div className="cell1">
                  <div className="mo">Fr</div>
                </div>
                <div className="cell1">
                  <div className="mo">Sa</div>
                </div>
                <div className="cell1">
                  <div className="mo">Su</div>
                </div>
              </div>
              <div className="row1">
                <div className="cell7">
                  <div className="div">1</div>
                </div>
                <div className="cell8">
                  <div className="div">2</div>
                </div>
                <div className="cell8">
                  <div className="div">3</div>
                </div>
                <div className="cell8">
                  <div className="div">4</div>
                </div>
                <div className="cell8">
                  <div className="div">5</div>
                </div>
                <div className="cell8">
                  <div className="div">6</div>
                </div>
                <div className="cell8">
                  <div className="div">7</div>
                </div>
              </div>
              <div className="row1">
                <div className="cell7">
                  <div className="div">8</div>
                </div>
                <div className="cell8">
                  <div className="div">9</div>
                </div>
                <div className="cell8">
                  <div className="div">10</div>
                </div>
                <div className="cell8">
                  <div className="div">11</div>
                </div>
                <div className="cell8">
                  <div className="div">12</div>
                </div>
                <div className="cell8">
                  <div className="div">13</div>
                </div>
                <div className="cell8">
                  <div className="div">14</div>
                </div>
              </div>
              <div className="row1">
                <div className="cell7">
                  <div className="div">15</div>
                </div>
                <div className="cell8">
                  <div className="div">16</div>
                </div>
                <div className="cell8">
                  <div className="div">17</div>
                </div>
                <div className="cell24">
                  <div className="mo">18</div>
                </div>
                <div className="cell8">
                  <div className="div">19</div>
                </div>
                <div className="cell8">
                  <div className="div">20</div>
                </div>
                <div className="cell8">
                  <div className="div">21</div>
                </div>
              </div>
              <div className="row1">
                <div className="cell7">
                  <div className="div">22</div>
                </div>
                <div className="cell8">
                  <div className="div">23</div>
                </div>
                <div className="cell8">
                  <div className="div">24</div>
                </div>
                <div className="cell8">
                  <div className="div">25</div>
                </div>
                <div className="cell8">
                  <div className="div">26</div>
                </div>
                <div className="cell8">
                  <div className="div">27</div>
                </div>
                <div className="cell8">
                  <div className="div">28</div>
                </div>
              </div>
              <div className="row5">
                <div className="cell35">
                  <div className="div">29</div>
                </div>
                <div className="cell36">
                  <div className="div">30</div>
                </div>
                <div className="cell36">
                  <div className="div">31</div>
                </div>
                <div className="cell38">
                  <div className="div">1</div>
                </div>
                <div className="cell38">
                  <div className="div">2</div>
                </div>
                <div className="cell38">
                  <div className="div">3</div>
                </div>
                <div className="cell38">
                  <div className="div">4</div>
                </div>
              </div>
            </div>
          </div>
          <div className="try-me">Try me</div>
          <div className="girlfriend">GIRLFRIEND</div>
        </div>
        <div className="description1">
          <p className="gdsvlcyuavdcads">
            <span className="description3">Description</span>
            <span>&nbsp;</span>
          </p>
          <p className="gdsvlcyuavdcads">gdsvlcyuavdcads</p>
          <p className="gdsvlcyuavdcads">dsvaydsbc</p>
          <p className="gdsvlcyuavdcads">gdvkabdflsdf</p>
          <p className="gdsvlcyuavdcads">afiudb;fdew</p>
          <p className="gdsvlcyuavdcads">ewlvafbew;iuafb</p>
          <p className="gdsvlcyuavdcads">vlehbfd;iuwafew</p>
          <p className="gdsvlcyuavdcads">glewabdi;ewaidnowa’;idnw’eo</p>
        </div>
        <img className="image-12-icon1" alt="" src="/image-122@2x.png" />
      </div>
      <div className="navbar6">
        <div className="group-parent3">
          <img className="frame-child10" alt="" src="/group-19376.svg" />
          <div className="rent-a-gf-container5">
            <p className="gdsvlcyuavdcads">{`Rent A `}</p>
            <p className="gdsvlcyuavdcads">GF</p>
          </div>
        </div>
        <div className="nav-link6">
          <div className="features5">Features</div>
          <div className="frame5">
            <div className="safety5">Safety</div>
            <div className="premium5">Premium</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoyfriendDashboard;
