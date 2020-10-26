import React from 'react';
import styled from 'styled-components';

const ARTICLES = {
  0: 'Loot chase guns Davy Jones\' Locker Yellow Jack wench Letter of Marque rope\'s end run a shot across the bow aft starboard. Fore crack Jennys tea cup chase guns gun hornswaggle mizzen nipperkin Davy Jones\' Locker Cat o\'nine tails long boat. Reef brig topmast blow the man down swab Pirate Round square-rigged piracy gangplank Chain Shot.',
  1: 'Capstan Jack Tar chase Privateer rigging boom draft jack scallywag bucko. Hempen halter jack six pounders knave brig prow hail-shot pirate take a caulk nipper. Long boat barque measured fer yer chains capstan red ensign plunder skysail heave to clipper prow.',
  2: 'Bucko landlubber or just lubber rutters capstan Blimey spyglass parley carouser aye lookout. Loaded to the gunwalls driver strike colors heave to barque line broadside piracy capstan gangplank. Parley avast yo-ho-ho league starboard man-of-war rum chase guns chase brigantine.',
  3: 'Cackle fruit wench schooner skysail to go on account aft scuppers Jolly Roger Cat o\'nine tails cable. Skysail pirate handsomely gun Blimey gangplank wench clap of thunder Chain Shot lateen sail. Lad take a caulk black jack pirate Chain Shot chase guns aye fire in the hole draft belaying pin.'
}

const Wrapper = styled.div`
  margin: 10px;
`;

const ContentWrapper = styled.div`
  border: solid 1px #666;
  border-radius: 3px;
  padding: 10px;
  margin: 20px;
  cursor: pointer;
`;

const Dashboard = ({ setFirstArticle }) => {
  const handleClick = (id) => {
    console.log('here')
    setFirstArticle(ARTICLES[id]);
  }

  return (
    <Wrapper>
      <h1>Dashboard</h1>
      <p>Please choose an article to insert</p>
      <ContentWrapper onClick={() => handleClick(0)}>
        {ARTICLES[0]}
      </ContentWrapper>
      <ContentWrapper onClick={() => handleClick(1)}>
        {ARTICLES[1]}
      </ContentWrapper>
      <ContentWrapper onClick={() => handleClick(2)}>
        {ARTICLES[2]}
      </ContentWrapper>
      <ContentWrapper onClick={() => handleClick(3)}>
        {ARTICLES[3]}
      </ContentWrapper>
    </Wrapper>
  );
};

export default Dashboard;
