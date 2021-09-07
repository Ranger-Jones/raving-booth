import React from "react";

import star from "../../../../assets/star";
import open from "../../../../assets/open";

import { SvgXml } from "react-native-svg";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typografy/text.component";
import {
  Address,
  Icon,
  Info,
  Raiting,
  RestaurantCard,
  RestaurantCardCover,
  Section,
  SectionEnd,
} from "./restaurant.info.styles";

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Ranger's Pizza Dream",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/bar-71.png",
    photos = [
      "https://www.telegraph.co.uk/multimedia/archive/03332/g7-kruen-obama-bee_3332809b.jpg",
    ],
    address = "Zinsendorfstraße 9, 99192 Nesse-Apfelstädt",
    isOpenNow = true,
    rating = 5,
    isClosedTemporarily = true,
  } = restaurant;
  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover source={{ uri: photos[0] }} key={name} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Raiting>
            {ratingArray.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </Raiting>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="error">Closed Temporarily</Text>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer position="left" size="large">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
