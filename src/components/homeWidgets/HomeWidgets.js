import React from 'react'
import InfoIcon from '@mui/icons-material/Info';
import './HomeWidgets.css';
import WidgetArticle from './WidgetArticle';

function HomeWidgets() {
  return (
    <div className='homeWidgets'>
      <div className="homeWidgets__articles">
        <div className="homeWidgets__articlesHeader">
            <h2>LinkedIn News</h2>
            <InfoIcon className='homeWidgets__infoIcon' sx={{height: '1.2rem', width: '1.2rem'}} />
        </div>
        <div className="homeWidgets__articlesInformation">
            <WidgetArticle title="Worker's side hustles worry firms." time='2hr ago' readers='24605' />
            <WidgetArticle title="Startups set to give massive hikes." time='16hr ago' readers='1536' />
            <WidgetArticle title="Work From Home or Work From Office?" time='2d ago' readers='6293' />
            <WidgetArticle title="NFT's, the new era?" time='3d ago' readers='662' />
            <WidgetArticle title="The Metaverse concept, Web3." time='5d ago' readers='9812' />
        </div>
      </div>
      <div className="homeWidgets__linkedinJobsAd">
        <img src="https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg" alt="" />
      </div>
      <div className="homeWidgets__footer">
        <p>About</p>
        <p>Accessibility</p>
        <p>Help Center</p>
        <p>Privacy & Terms</p>
        <p>Ad Choices</p>
        <p>Advertizing</p>
        <p>Business Services</p>
        <p>Get the LinkedIn app</p>
        <p>More</p>
        {/* LinkedIn Full banner Logo */}
        <h3>LinkedIn Corporation © 2022</h3>
      </div>

    </div>
  );
}

export default HomeWidgets;