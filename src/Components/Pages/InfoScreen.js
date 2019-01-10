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
import { Header } from "react-native-elements";

const InfoScreen = () => {
  return (
    <Container>
      <Header
        centerComponent={{
          text: "About",
          style: { color: "#f9f9f9", fontWeight: "bold" }
        }}
      />
      <Content padder>
        <Card>
          <CardItem header bordered>
            <Text style={{ color: "#466DC5" }}>TDEE?</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>
                This program calculates your{" "}
                <Text style={{ fontWeight: "bold" }}>
                  TDEE (total daily energy expenditure)
                </Text>
                <Text>
                  , the amount of calories recommended to eat in order to
                  lose/gain weight, and the macros of where your calories should
                  come from based on a chosen diet plan.
                </Text>
              </Text>
            </Body>
          </CardItem>
          <CardItem>
            <Body>
              <Text>
                <Text>
                  There are two formulas used on this app for calculating your
                  TDEE. The{" "}
                </Text>
                <Text style={{ fontWeight: "bold" }}>
                  Mifflin St. Jeor formula
                </Text>
                <Text> and the</Text>{" "}
                <Text style={{ fontWeight: "bold" }}>
                  Katch-McArdle formula.
                </Text>{" "}
                <Text>
                  The Katch-McArdle formula is requires you to know your body
                  fat percentage. If you are unable to calculate this you may
                  use the Mifflin St. Jeor formula.
                </Text>
              </Text>
            </Body>
          </CardItem>
          <View
            style={{
              borderBottomColor: "#466DC5",
              borderBottomWidth: 1,
              marginTop: 10
            }}
          />
        </Card>

        <Card>
          <CardItem header bordered>
            <Text style={{ color: "#466DC5" }}>Activity Levels</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>
                <Text style={{ fontWeight: "bold" }}>Sedentary: </Text>
                <Text>Little or no exercise. Desk job: IT, bank, etc.</Text>
              </Text>
            </Body>
          </CardItem>
          <CardItem>
            <Body>
              <Text>
                <Text style={{ fontWeight: "bold" }}>Light Activity: </Text>
                <Text>Light exercise. Climbing stairs a few times a day.</Text>
              </Text>
            </Body>
          </CardItem>
          <CardItem>
            <Body>
              <Text>
                <Text style={{ fontWeight: "bold" }}>Moderate Activity: </Text>
                <Text>Moderate exercise. Teacher, salesman, etc.</Text>
              </Text>
            </Body>
          </CardItem>
          <CardItem>
            <Body>
              <Text>
                <Text style={{ fontWeight: "bold" }}>Very Active: </Text>
                <Text>Hard exercise. Carpenter, mailman, etc.</Text>
              </Text>
            </Body>
          </CardItem>
          <CardItem>
            <Body>
              <Text>
                <Text style={{ fontWeight: "bold" }}>Extremely Active: </Text>
                <Text>Very hard exercise. Soldier, boxer, etc.</Text>
              </Text>
            </Body>
          </CardItem>
          <View
            style={{
              borderBottomColor: "#466DC5",
              borderBottomWidth: 1,
              marginTop: 10
            }}
          />
        </Card>

        <Card>
          <CardItem header bordered>
            <Text style={{ color: "#466DC5" }}>Additional</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>
                *Your <Text style={{ fontWeight: "bold" }}>TDEE</Text>
                <Text>
                  {" "}
                  is the amount of energy which you burn in calories per day.
                </Text>
              </Text>
            </Body>
          </CardItem>
          <CardItem>
            <Body>
              <Text>
                <Text>*</Text>
                <Text style={{ fontWeight: "bold" }}>
                  Basal metabolic rate (BMR)
                </Text>
                <Text>
                  {" "}
                  is the amount of energy expended while resting (not performing
                  any activity).
                </Text>
              </Text>
            </Body>
          </CardItem>
          <CardItem>
            <Body>
              <Text>
                *For a novice, it is recommended that for gaining weight you
                don't consume more than{" "}
                <Text style={{ fontWeight: "bold" }}>20%</Text>
                <Text> of your TDEE in calories.</Text>
              </Text>
            </Body>
          </CardItem>
          <View
            style={{
              borderBottomColor: "#466DC5",
              borderBottomWidth: 1,
              marginTop: 10
            }}
          />
        </Card>
      </Content>
    </Container>
  );
};

export default InfoScreen;
