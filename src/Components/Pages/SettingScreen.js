import React from "react";
import {
  Container,
  Content,
  View,
  Item,
  Picker,
  Icon,
  Text,
  Card,
  CardItem
} from "native-base";

class SettingScreen extends React.Component {
  render() {
    return (
      <Container>
        <Content padder>
          <Card>
            <CardItem header bordered>
              <Text
                style={{ fontFamily: "Roboto", color: "#hsl(200, 68%, 35%)" }}
              >
                Preferences
              </Text>
            </CardItem>
            <View style={{ marginTop: 20, marginLeft: 40 }}>
              <Text
                style={{
                  fontFamily: "Roboto",
                  fontWeight: "600",
                  color: "hsl(211, 13%, 65%)"
                }}
              >
                Formula
              </Text>
            </View>
            <View style={{ marginTop: 8, marginLeft: 33, marginRight: 33 }}>
              <Item picker>
                <Picker
                  mode="dropdown"
                  placeholderIconColor="#007aff"
                  selectedValue={this.props.screenProps.formula}
                  onValueChange={e =>
                    this.props.screenProps.handleChange(e, "formula")
                  }
                >
                  <Picker.Item label="Mifflin St. Joer" value="mifflin" />
                  <Picker.Item label="Katch-McArdle" value="katch" />
                </Picker>
              </Item>
            </View>
            <View style={{ marginTop: 30, marginLeft: 40 }}>
              <Text
                style={{
                  fontFamily: "Roboto",
                  fontWeight: "600",
                  color: "hsl(211, 13%, 65%)"
                }}
              >
                Gender
              </Text>
            </View>
            <View style={{ marginTop: 8, marginLeft: 33, marginRight: 33 }}>
              <Item picker>
                <Picker
                  mode="dropdown"
                  placeholderIconColor="#007aff"
                  selectedValue={this.props.screenProps.gender}
                  onValueChange={e =>
                    this.props.screenProps.handleChange(e, "gender")
                  }
                >
                  <Picker.Item label="Male" value="male" />
                  <Picker.Item label="Female" value="female" />
                </Picker>
              </Item>
            </View>
            <View style={{ marginTop: 30, marginLeft: 40 }}>
              <Text
                style={{
                  fontFamily: "Roboto",
                  fontWeight: "600",
                  color: "hsl(211, 13%, 65%)"
                }}
              >
                Diet plan
              </Text>
            </View>
            <View style={{ marginTop: 8, marginLeft: 33, marginRight: 33 }}>
              <Item picker>
                <Picker
                  mode="dropdown"
                  placeholderIconColor="#007aff"
                  selectedValue={this.props.screenProps.weightOption}
                  onValueChange={e =>
                    this.props.screenProps.handleChange(e, "weightOption")
                  }
                >
                  <Picker.Item label="Gain weight" value="gain" />
                  <Picker.Item label="Maintain weight" value="maintain" />
                  <Picker.Item label="Lose weight" value="lose" />
                </Picker>
              </Item>
            </View>
            <View style={{ marginTop: 30, marginLeft: 40 }}>
              <Text
                style={{
                  fontFamily: "Roboto",
                  fontWeight: "600",
                  color: "hsl(211, 13%, 65%)"
                }}
              >
                Measurement System
              </Text>
            </View>
            <View style={{ marginTop: 8, marginLeft: 33, marginRight: 33 }}>
              <Item picker>
                <Picker
                  mode="dropdown"
                  placeholderIconColor="#007aff"
                  selectedValue={this.props.screenProps.system}
                  onValueChange={e =>
                    this.props.screenProps.handleChange(e, "system")
                  }
                >
                  <Picker.Item label="Metric" value="metric" />
                  <Picker.Item label="Imperial" value="imperial" />
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
        </Content>
      </Container>
    );
  }
}

export default SettingScreen;
