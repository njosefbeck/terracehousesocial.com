import React from "react"

const Header = () => {
  return (
    <header>
      <h1>Terrace House Social</h1>
      <p>Below you'll find social media accounts for the panel and cast from Terrace House&trade;. Have an update to the list? Feel free to <a href="https://twitter.com/terracesocial" target="_blank" rel="noopener noreferrer">reach out via Twitter</a> or at <a href="mailto:hello@terracehousesocial.com">hello@terracehousesocial.com</a>. Please note: we are in no way affiliated with the show!</p>

      <h2>Updates</h2>
      <p className="update">9/27/18 - Updated Guy Sato's Instagram profile link. Thanks to Kris for the update!</p>
      <p className="update">9/29/19 - Added new cast for Tokyo season (2019 - 2020). BIG THANKS to <a href="https://juicersx.us/" rel="noopener noreferrer" target="_blank">juicersx</a> for making this update possible!</p>
      <p className="update">11/24/19 - Updated Avian's instagram. Updated Cheri's instagram thanks to Jana. Removed Wez's social media. Added Closing Door cast thanks to Reddit user <a href="https://www.reddit.com/user/reddumpling/" target="_blank" rel="noopener noreferrer">reddumpling</a>.</p>
      
      <p className="update" style={{ textAlign: 'center' }}>If you're interested in supporting this project, consider <a target="_blank" rel="noopener noreferrer" href="https://www.buymeacoffee.com/njosefbeck">buying me a tea!</a></p>
    </header>
  );
};

export default Header
