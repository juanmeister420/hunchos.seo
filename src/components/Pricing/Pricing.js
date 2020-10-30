import React from 'react';
import { Button } from '../../globalStyles';
import { AiFillThunderbolt } from 'react-icons/ai';
import { GiCrystalBars } from 'react-icons/gi';
import { GiCutDiamond, GiRock } from 'react-icons/gi';
import { GiFloatingCrystal } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature
} from './Pricing.elements';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>W pakiecie taniej!</PricingHeading>
          <PricingContainer>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiRock />
                </PricingCardIcon>
                <PricingCardPlan>Pakiet 1 ❤</PricingCardPlan>
                <PricingCardCost>$99.99</PricingCardCost>
                <PricingCardLength>miesięcznie</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>100 Nowych użytkowników</PricingCardFeature>
                  <PricingCardFeature>Wzrost ruchu na stronie o 20%</PricingCardFeature>
                  <PricingCardFeature>Dostęp do panelu statystyk</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Wybierz Plan</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCrystalBars />
                </PricingCardIcon>
                <PricingCardPlan>Pakiet 2 💛</PricingCardPlan>
                <PricingCardCost>$299.99</PricingCardCost>
                <PricingCardLength>miesięcznie</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>1000 Nowych użytkowników</PricingCardFeature>
                  <PricingCardFeature>Wzrost ruchu na stronie o 45%</PricingCardFeature>
                  <PricingCardFeature>Dostęp do panelu statystyk +</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Wybierz Plan</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCutDiamond />
                </PricingCardIcon>
                <PricingCardPlan>Pakiet 3 💎</PricingCardPlan>
                <PricingCardCost>$999.99</PricingCardCost>
                <PricingCardLength>miesięcznie</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>10000 nowych użytkowników</PricingCardFeature>
                  <PricingCardFeature>Wzrost ruchu na stronie o 120%</PricingCardFeature>
                  <PricingCardFeature>Dostęp do panelu hunchos+™</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Wybierz Plan</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;
