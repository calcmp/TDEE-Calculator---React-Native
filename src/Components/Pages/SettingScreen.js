import React from "react";
import {
  Container,
  Content,
  View,
  Item,
  Picker,
  Icon,
  Card,
  Text,
  CardItem
} from "native-base";
import { Header } from "react-native-elements";

export default class SettingScreen extends React.Component {
  static navigationOptions = {
    title: "Settings"
  };
  render() {
    return (
      <Container>
        <Header
          centerComponent={{
            text: "Settings",
            style: { color: "#f9f9f9", fontWeight: "bold" }
          }}
        />
        <Content padder>
          <Card>
            <CardItem header bordered>
              <Text style={{ color: "#466DC5" }}>Preferences</Text>
            </CardItem>
            <View style={{ marginTop: 20, marginLeft: 40 }}>
              <Text style={{ fontStyle: "italic", fontWeight: "bold" }}>
                Formula:{" "}
              </Text>
            </View>
            <View style={{ marginTop: 10, marginLeft: 33, marginRight: 33 }}>
              <Item picker>
                <Picker
                  mode="dropdown"
                  iosIcon={<Icon name="ios-arrow-down-outline" />}
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
              <Text style={{ fontStyle: "italic", fontWeight: "bold" }}>
                Gender:{" "}
              </Text>
            </View>
            <View style={{ marginTop: 10, marginLeft: 33, marginRight: 33 }}>
              <Item picker>
                <Picker
                  mode="dropdown"
                  iosIcon={<Icon name="ios-arrow-down-outline" />}
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
              <Text style={{ fontStyle: "italic", fontWeight: "bold" }}>
                Diet plan:{" "}
              </Text>
            </View>
            <View style={{ marginTop: 10, marginLeft: 33, marginRight: 33 }}>
              <Item picker>
                <Picker
                  mode="dropdown"
                  iosIcon={<Icon name="ios-arrow-down-outline" />}
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
              <Text style={{ fontStyle: "italic", fontWeight: "bold" }}>
                Measurement System:{" "}
              </Text>
            </View>
            <View style={{ marginTop: 10, marginLeft: 33, marginRight: 33 }}>
              <Item picker>
                <Picker
                  mode="dropdown"
                  iosIcon={<Icon name="ios-arrow-down-outline" />}
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
                borderBottomColor: "#466DC5",
                borderBottomWidth: 1,
                marginTop: 10
              }}
            />
          </Card>
        </Content>
      </Container>
    );
  }
}
