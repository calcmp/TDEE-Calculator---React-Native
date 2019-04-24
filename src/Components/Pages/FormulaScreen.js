import React from "react";
import {
  Container,
  Content,
  Card,
  CardItem,
  Text,
  Body,
  View
} from "native-base";

const Formula = () => {
  return (
    <Container>
      <Content padder>
        <Card>
          <CardItem header bordered>
            <Text
              style={{ fontFamily: "Roboto", color: "#hsl(200, 68%, 35%)" }}
            >
              Mifflin St. Jeor Formula
            </Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>
                The Mifflin St. Jeor formula calculates your TDEE by first
                calculating your BMR (basal metabolic rate). There are two
                different formulas depending on your gender:
              </Text>
            </Body>
          </CardItem>
          <CardItem>
            <Body>
              <Text
                style={{
                  color: "grey",
                  fontFamily: "Roboto",
                  fontSize: 16,
                  fontStyle: "italic"
                }}
              >
                Men: 10 x weight (kg) + 6.25 x height (cm) - 5 x Age + 5{" "}
              </Text>
              <Text
                style={{
                  color: "grey",
                  fontFamily: "Roboto",
                  fontSize: 16,
                  fontStyle: "italic"
                }}
              >
                Women: 10 x weight (kg) + 6.25 x height (cm) - 5 x Age - 161
              </Text>
            </Body>
          </CardItem>
          <View
            style={{
              borderTopColor: "hsl(200, 60%, 58%)",
              borderTopWidth: 1.5,
              marginTop: 10
            }}
          />
        </Card>
        <Card>
          <CardItem header bordered>
            <Text
              style={{ fontFamily: "Roboto", color: "#hsl(200, 68%, 35%)" }}
            >
              Katch-McArdle Formula
            </Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>
                The Katch-McArdle formula calculates your TDEE by first
                calculating your LBM (lean body mass) and then your BMR (basal
                metabolic rate).
              </Text>
            </Body>
          </CardItem>
          <CardItem>
            <Body>
              <Text
                style={{
                  color: "grey",
                  fontFamily: "Roboto",
                  fontSize: 16,
                  fontStyle: "italic"
                }}
              >
                BMR = 370 + (21.6 x LBM(kg))
              </Text>
              <Text
                style={{
                  color: "grey",
                  fontFamily: "Roboto",
                  fontSize: 16,
                  fontStyle: "italic"
                }}
              >
                LBM = (Weight(kg) x (100-(Body Fat)))/100
              </Text>
            </Body>
          </CardItem>
          <CardItem>
            <Body>
              <Text>
                Once your BMR is calculated, the activity level acts as a
                multiplier to the formula to calculate your TDEE.
              </Text>
            </Body>
          </CardItem>
          <View
            style={{
              borderTopColor: "hsl(200, 60%, 58%)",
              borderTopWidth: 1.5,
              marginTop: 10
            }}
          />
        </Card>
      </Content>
    </Container>
  );
};

export default Formula;
