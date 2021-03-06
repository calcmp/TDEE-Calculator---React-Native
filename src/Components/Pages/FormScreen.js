import React from "react";
import {
  Container,
  Content,
  View,
  Form,
  Item,
  Input,
  Label,
  Picker,
  Icon,
  Card,
  CardItem,
  Body,
  Text
} from "native-base";
import { Button } from "react-native-elements";

export default class FormScreen extends React.Component {
  renderMifflin() {
    if (this.props.screenProps.system === "metric") {
      return (
        <Form>
          <View style={{ marginTop: 5, marginLeft: 15 }}>
            <Item stackedLabel>
              <Label
                style={{
                  color: "hsl(211, 13%, 65%)",
                  fontFamily: "Roboto",
                  fontWeight: "600"
                }}
              >
                Age
              </Label>
              <Input
                type="number"
                value={this.props.screenProps.age}
                onChangeText={e =>
                  this.props.screenProps.handleChange(e, "age")
                }
              />
            </Item>
          </View>
          <View style={{ marginTop: 30, marginLeft: 15 }}>
            <Item stackedLabel>
              <Label
                style={{
                  color: "hsl(211, 13%, 65%)",
                  fontFamily: "Roboto",
                  fontWeight: "600"
                }}
              >
                Weight (Kg)
              </Label>
              <Input
                type="number"
                value={this.props.screenProps.weight}
                onChangeText={e =>
                  this.props.screenProps.handleChange(e, "weight")
                }
              />
            </Item>
          </View>
          <View style={{ marginTop: 30, marginLeft: 15 }}>
            <Item stackedLabel>
              <Label
                style={{
                  color: "hsl(211, 13%, 65%)",
                  fontFamily: "Roboto",
                  fontWeight: "600"
                }}
              >
                Height (cm)
              </Label>
              <Input
                type="number"
                value={this.props.screenProps.height}
                onChangeText={e =>
                  this.props.screenProps.handleChange(e, "height")
                }
              />
            </Item>
          </View>
        </Form>
      );
    } else if (this.props.screenProps.system === "imperial") {
      return (
        <Form>
          <View style={{ marginTop: 5, marginLeft: 15 }}>
            <Item stackedLabel>
              <Label
                style={{
                  color: "hsl(211, 13%, 65%)",
                  fontFamily: "Roboto",
                  fontWeight: "600"
                }}
              >
                Age
              </Label>
              <Input
                type="number"
                value={this.props.screenProps.age}
                onChangeText={e =>
                  this.props.screenProps.handleChange(e, "age")
                }
              />
            </Item>
          </View>
          <View style={{ marginTop: 30, marginLeft: 15 }}>
            <Item stackedLabel>
              <Label
                style={{
                  color: "hsl(211, 13%, 65%)",
                  fontFamily: "Roboto",
                  fontWeight: "600"
                }}
              >
                Weight (lb)
              </Label>
              <Input
                type="number"
                value={this.props.screenProps.weight}
                onChangeText={e =>
                  this.props.screenProps.handleChange(e, "weight")
                }
              />
            </Item>
          </View>
          <View style={{ marginTop: 30, marginLeft: 15 }}>
            <Item stackedLabel>
              <Label
                style={{
                  color: "hsl(211, 13%, 65%)",
                  fontFamily: "Roboto",
                  fontWeight: "600"
                }}
              >
                Height
              </Label>
              <Item label>
                <Label
                  style={{
                    color: "hsl(211, 13%, 65%)",
                    fontFamily: "Roboto",
                    fontWeight: "600"
                  }}
                >
                  feet
                </Label>
                <Input
                  type="number"
                  value={this.props.screenProps.heightFeet}
                  onChangeText={e =>
                    this.props.screenProps.handleChange(e, "heightFeet")
                  }
                />
                <Label
                  style={{
                    color: "hsl(211, 13%, 65%)",
                    fontFamily: "Roboto",
                    fontWeight: "600"
                  }}
                >
                  inches
                </Label>
                <Input
                  type="number"
                  value={this.props.screenProps.heightIn}
                  onChangeText={e =>
                    this.props.screenProps.handleChange(e, "heightIn")
                  }
                />
              </Item>
            </Item>
          </View>
        </Form>
      );
    }
  }

  renderKatch() {
    if (this.props.screenProps.system === "metric") {
      return (
        <Form>
          <View style={{ marginTop: 5, marginLeft: 15 }}>
            <Item stackedLabel>
              <Label
                style={{
                  color: "hsl(211, 13%, 65%)",
                  fontFamily: "Roboto",
                  fontWeight: "600"
                }}
              >
                Weight (Kg)
              </Label>
              <Input
                type="number"
                value={this.props.screenProps.weight}
                onChangeText={e =>
                  this.props.screenProps.handleChange(e, "weight")
                }
              />
            </Item>
          </View>
          <View style={{ marginTop: 30, marginLeft: 15 }}>
            <Item stackedLabel>
              <Label
                style={{
                  color: "hsl(211, 13%, 65%)",
                  fontFamily: "Roboto",
                  fontWeight: "600"
                }}
              >
                Body Fat (%)
              </Label>
              <Input
                type="number"
                value={this.props.screenProps.bodyFat}
                onChangeText={e =>
                  this.props.screenProps.handleChange(e, "bodyFat")
                }
              />
            </Item>
          </View>
        </Form>
      );
    } else if (this.props.screenProps.system === "imperial") {
      return (
        <Form>
          <View style={{ marginTop: 5, marginLeft: 15 }}>
            <Item stackedLabel>
              <Label
                style={{
                  color: "hsl(211, 13%, 65%)",
                  fontFamily: "Roboto",
                  fontWeight: "600"
                }}
              >
                Weight (lb)
              </Label>
              <Input
                type="number"
                value={this.props.screenProps.weight}
                onChangeText={e =>
                  this.props.screenProps.handleChange(e, "weight")
                }
              />
            </Item>
          </View>
          <View style={{ marginTop: 30, marginLeft: 15 }}>
            <Item stackedLabel>
              <Label
                style={{
                  color: "hsl(211, 13%, 65%)",
                  fontFamily: "Roboto",
                  fontWeight: "600"
                }}
              >
                Body Fat (%)
              </Label>
              <Input
                type="number"
                value={this.props.screenProps.bodyFat}
                onChangeText={e =>
                  this.props.screenProps.handleChange(e, "bodyFat")
                }
              />
            </Item>
          </View>
        </Form>
      );
    }
  }

  renderFormula() {
    if (this.props.screenProps.formula === "mifflin") {
      return <Content>{this.renderMifflin()}</Content>;
    } else if (this.props.screenProps.formula === "katch") {
      return <Content>{this.renderKatch()}</Content>;
    }
  }

  renderSurplus() {
    if (this.props.screenProps.weightOption === "gain") {
      return (
        <View style={{ marginTop: 30, marginLeft: 40 }}>
          <Text
            style={{
              color: "hsl(211, 13%, 65%)",
              fontFamily: "Roboto",
              fontWeight: "600"
            }}
          >
            Calorie Surplus:{" "}
          </Text>
        </View>
      );
    } else if (this.props.screenProps.weightOption === "lose") {
      return (
        <View style={{ marginTop: 30, marginLeft: 40 }}>
          <Text
            style={{
              color: "hsl(211, 13%, 65%)",
              fontFamily: "Roboto",
              fontWeight: "600"
            }}
          >
            Calorie Deficit:{" "}
          </Text>
        </View>
      );
    } else if (this.props.screenProps.weightOption === "maintain") {
      return (
        <View style={{ marginTop: 30, marginLeft: 40 }}>
          <Text
            style={{
              color: "hsl(211, 13%, 65%)",
              fontFamily: "Roboto",
              fontWeight: "600"
            }}
          >
            Maintain Calories:{" "}
          </Text>
        </View>
      );
    }
  }

  renderWeightOption() {
    if (
      this.props.screenProps.weightOption === "gain" ||
      this.props.screenProps.weightOption === "lose"
    ) {
      return (
        <View style={{ marginTop: 8, marginLeft: 33, marginRight: 33 }}>
          <Item picker>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="ios-arrow-down-outline" />}
              style={{ width: undefined }}
              placeholder="Surplus"
              placeholderStyle={{ color: "#bfc6ea" }}
              placeholderIconColor="#007aff"
              selectedValue={this.props.screenProps.surplus}
              onValueChange={e =>
                this.props.screenProps.handleChange(e, "surplus")
              }
            >
              <Picker.Item label="10%" value="0.1" />
              <Picker.Item label="15%" value="0.15" />
              <Picker.Item label="20%" value="0.2" />
            </Picker>
          </Item>
        </View>
      );
    } else if (this.props.screenProps.weightOption === "maintain") {
      return (
        <View style={{ marginTop: 20, marginLeft: 33, marginRight: 33 }}>
          <Item picker>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="ios-arrow-down-outline" />}
              style={{ width: undefined }}
              placeholder="Surplus"
              placeholderStyle={{ color: "#bfc6ea" }}
              placeholderIconColor="#007aff"
              selectedValue={this.props.screenProps.surplus}
              onValueChange={e =>
                this.props.screenProps.handleChange(e, "surplus")
              }
            >
              <Picker.Item label="0%" value="0" />
            </Picker>
          </Item>
        </View>
      );
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Content padder>
          <Card>
            <CardItem header bordered>
              <Text
                style={{ fontFamily: "Roboto", color: "#hsl(200, 68%, 35%)" }}
              >
                Stats
              </Text>
            </CardItem>
            <CardItem>
              <Body>{this.renderFormula()}</Body>
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
                Details
              </Text>
            </CardItem>
            <View style={{ marginTop: 20, marginLeft: 40 }}>
              <Text
                style={{
                  color: "hsl(211, 13%, 65%)",
                  fontFamily: "Roboto",
                  fontWeight: "600"
                }}
              >
                Activity Level:{" "}
              </Text>
            </View>
            <View style={{ marginTop: 8, marginLeft: 33, marginRight: 33 }}>
              <Item picker>
                <Picker
                  mode="dropdown"
                  iosIcon={<Icon name="ios-arrow-down-outline" />}
                  placeholderIconColor="#007aff"
                  selectedValue={this.props.screenProps.activity}
                  onValueChange={e =>
                    this.props.screenProps.handleChange(e, "activity")
                  }
                >
                  <Picker.Item label="Sedentary" value="1.1" />
                  <Picker.Item label="Light Activity" value="1.2" />
                  <Picker.Item label="Moderate Activity" value="1.35" />
                  <Picker.Item label="Very Active" value="1.45" />
                  <Picker.Item label="Extremely Active" value="1.6" />
                </Picker>
              </Item>
            </View>
            {this.renderSurplus()}
            {this.renderWeightOption()}
            <View style={{ marginTop: 30, marginLeft: 40 }}>
              <Text
                style={{
                  color: "hsl(211, 13%, 65%)",
                  fontFamily: "Roboto",
                  fontWeight: "600"
                }}
              >
                Diet:{" "}
              </Text>
            </View>
            <View
              style={{
                marginBottom: 11,
                marginTop: 8,
                marginLeft: 33,
                marginRight: 33
              }}
            >
              <Item picker>
                <Picker
                  mode="dropdown"
                  iosIcon={<Icon name="ios-arrow-down-outline" />}
                  style={{ width: undefined }}
                  placeholder="Diet"
                  placeholderStyle={{ color: "#bfc6ea" }}
                  placeholderIconColor="#007aff"
                  selectedValue={this.props.screenProps.macro}
                  onValueChange={e =>
                    this.props.screenProps.handleChange(e, "macro")
                  }
                >
                  <Picker.Item label="Ketogenic" value="1" />
                  <Picker.Item label="Low Carb" value="2" />
                  <Picker.Item label="Low Fat" value="3" />
                  <Picker.Item label="Balanced" value="4" />
                  <Picker.Item label="High Protein" value="5" />
                  <Picker.Item label="High Carb" value="6" />
                </Picker>
              </Item>
            </View>
            <View
              style={{
                borderTopColor: "hsl(200, 60%, 58%)",
                borderTopWidth: 1.5,
                marginTop: 10
              }}
            />
          </Card>

          <View
            style={{
              marginLeft: 40,
              marginRight: 40,
              marginTop: 20,
              marginBottom: 20
            }}
          >
            <Button
              color="hsl(123, 12%, 97%)"
              titleStyle={{
                fontWeight: "600",
                fontSize: 60
              }}
              buttonStyle={{
                backgroundColor: "hsl(123, 35%, 51%)",
                height: 45,
                borderColor: "transparent",
                borderWidth: 0,
                borderRadius: 5
              }}
              containerStyle={{ marginTop: 20 }}
              title="SUBMIT"
              onPress={e => {
                this.props.screenProps.handleSubmit(e);
                navigate("Results");
              }}
            />
          </View>
        </Content>
      </Container>
    );
  }
}
