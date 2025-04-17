import CampaignItem from "./CampaignItem";
import "./Campaigns.css";
const Campaigns = () => {
  return (
    <section className="campaigns">
      <div className="container">
        <div className="campaign-wrapper">
          <CampaignItem />
          <CampaignItem />
        </div>
        <div className="campaign-wrapper">
          <CampaignItem />
          <CampaignItem />
        </div>
      </div>
    </section>
  );
};

export default Campaigns;
