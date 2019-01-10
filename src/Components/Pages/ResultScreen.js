import React from "react";
import {
  Container,
  Content,
  Card,
  CardItem,
  Text,
  View,
  Body
} from "native-base";
import { Header } from "react-native-elements";
import { Col, Row, Grid } from "react-native-easy-grid";

export default class ResultScreen extends React.Component {
  renderInsideMessage() {
    if (this.props.screenProps.surplus === "0.1") {
      return <Text>steady</Text>;
    } else if (this.props.screenProps.surplus === "0.15") {
      return <Text>moderate</Text>;
    } else if (this.props.screenProps.surplus === "0.2") {
      return <Text>swift</Text>;
    }
  }
  renderMessage() {
    if (this.props.screenProps.weightOption === "gain") {
      return <Text>gain weight at a {this.renderInsideMessage()} rate.</Text>;
    } else if (this.props.screenProps.weightOption === "lose") {
      return <Text>lose weight at a {this.renderInsideMessage()} rate.</Text>;
    } else if (this.props.screenProps.weightOption === "maintain") {
      return <Text>maintain your weight.</Text>;
    }
  }
  renderMessage2() {
    if (this.props.screenProps.weightOption === "gain") {
      return (
        <Text>
          a surplus of {this.props.screenProps.finalCal.toFixed(0)} more
          calories than
        </Text>
      );
    } else if (this.props.screenProps.weightOption === "lose") {
      return (
        <Text>
          a deficit of {this.props.screenProps.finalCal.toFixed(0)} less
          calories than
        </Text>
      );
    } else if (this.props.screenProps.weightOption === "maintain") {
      return <Text>the same amount of calories as</Text>;
    }
  }
  renderMessage3() {
    if (this.props.screenProps.weightOption === "gain") {
      return <Text>gain</Text>;
    } else if (this.props.screenProps.weightOption === "lose") {
      return <Text>lose</Text>;
    } else if (this.props.screenProps.weightOption === "maintain") {
      return <Text>maintain your</Text>;
    }
  }
  renderCalories() {
    if (this.props.screenProps.calories < "10") {
      return (
        <Container>
          <Card>
            <CardItem>
              <Body>
                <Text>Please enter your stats on the home page.</Text>
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
        </Container>
      );
    } else {
      return (
        <Container>
          <Card>
            <CardItem>
              <Body>
                <Text>
                  The amount of energy in calories you use during your day to
                  day life is {this.props.screenProps.tdee.toFixed(0)}.
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  You need to eat {this.renderMessage2()} your TDEE per day in
                  order to {this.renderMessage()}
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  In other words. Eat{" "}
                  {this.props.screenProps.calories.toFixed(0)} calories to{" "}
                  {this.renderMessage3()} weight.
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
        </Container>
      );
    }
  }
  render() {
    return (
      <Container>
        <Header
          centerComponent={{
            text: "Results",
            style: { color: "#f9f9f9", fontWeight: "bold" }
          }}
        />
        <Content padder>
          <Card>
            <CardItem header bordered>
              <Grid>
                <Row>
                  <Col style={{ marginLeft: -5, width: 50 }}>
                    <Text>TDEE</Text>
                  </Col>
                  <Col style={{ marginLeft: 10, width: 70 }}>
                    <Text>Calories</Text>
                  </Col>
                  <Col style={{ marginLeft: 10, width: 70 }}>
                    <Text>Carbs(g)</Text>
                  </Col>
                  <Col style={{ marginLeft: 10, width: 80 }}>
                    <Text>Protein(g)</Text>
                  </Col>
                  <Col style={{ marginLeft: 10, width: 70 }}>
                    <Text>Fat(g)</Text>
                  </Col>
                </Row>
              </Grid>
            </CardItem>
            <Grid>
              <Row>
                <Col
                  style={{
                    marginTop: 12,
                    marginBottom: 12,
                    marginLeft: 15,
                    width: 50
                  }}
                >
                  <Text>{this.props.screenProps.tdee.toFixed(0)}</Text>
                </Col>
                <Col
                  style={{
                    marginTop: 12,
                    marginBottom: 12,
                    marginLeft: 9,
                    width: 50
                  }}
                >
                  <Text>{this.props.screenProps.calories.toFixed(0)}</Text>
                </Col>
                <Col
                  style={{
                    marginTop: 12,
                    marginBottom: 12,
                    marginLeft: 29,
                    width: 50
                  }}
                >
                  <Text>{this.props.screenProps.carbs.toFixed(0)}</Text>
                </Col>
                <Col
                  style={{
                    marginTop: 12,
                    marginBottom: 12,
                    marginLeft: 30,
                    width: 50
                  }}
                >
                  <Text>{this.props.screenProps.protein.toFixed(0)}</Text>
                </Col>
                <Col
                  style={{
                    marginTop: 12,
                    marginBottom: 12,
                    marginLeft: 39,
                    width: 50
                  }}
                >
                  <Text>{this.props.screenProps.fat.toFixed(0)}</Text>
                </Col>
              </Row>
            </Grid>
            <View
              style={{
                borderBottomColor: "#466DC5",
                borderBottomWidth: 1,
                marginTop: 10
              }}
            />
          </Card>

          {this.renderCalories()}
        </Content>
      </Container>
    );
  }
}
