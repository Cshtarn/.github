import React from 'react';

import {Section, SectionText, SectionTitle} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import {LeftSection} from './HeroStyles';

const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          안녕하세요! <br />
          CSHTARN입니다.
        </SectionTitle>
        <SectionText style={{paddingBottom:0}}>
        The purpose of this portfolio website is to quickly become familiar with my few projects and general information about me. <br/>
          Access contact links for more details and a possible collaboration.
        </SectionText>
        {/*<Button onClick={props.handleClick}>Learn More</Button>*/}
      </LeftSection>
    </Section>
  </>
);

export default Hero;