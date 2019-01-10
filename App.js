import React from "react";
import Navigator from "./src/Components/Pages/Navigator.js";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "BMR", value: 0 },
        { name: "LBM", value: 0 },
        { name: "TDEE", value: 0 },
        { name: "calories", value: 0 },
        { name: "tempCarbs", value: 0 },
        { name: "tempProtein", value: 0 },
        { name: "tempFat", value: 0 },
        { name: "carbs", value: 0 },
        { name: "protein", value: 0 },
        { name: "fat", value: 0 }
      ],
      weight: "",
      height: "",
      heightIn: "",
      heightFeet: "",
      age: "",
      bodyFat: "",
      tempWeight: "",
      tempHeight: "",
      activity: "1.1",
      surplus: "0.1",
      macro: "1",
      formula: "mifflin",
      gender: "male",
      weightOption: "gain",
      system: "metric",
      finalCal: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, name) {
    this.setState({ [name]: event });
  }

  handleSubmit(e) {
    e.preventDefault();

    //set values
    let data = this.state.data.slice();

    //if convert metric to imperial
    if (this.state.system === "metric") {
      //weight
      let tempWeightValue = this.state.weight;
      this.state.tempWeight = tempWeightValue;
      this.setState({ tempWeight: this.state.tempWeight });
      //height
      let tempHeightValue = this.state.height;
      this.state.tempHeight = tempHeightValue;
      this.setState({ tempHeight: this.state.tempHeight });
    } else if (this.state.system === "imperial") {
      //weight
      let tempWeightValue = this.state.weight * 0.45359237001;
      this.state.tempWeight = tempWeightValue;
      this.setState({ tempWeight: this.state.tempWeightt });
      //height
      let tempHeightValue = this.state.heightFeet * 12;
      tempHeightValue += +this.state.heightIn;
      tempHeightValue *= 2.54;
      this.state.tempHeight = tempHeightValue;
      this.setState({ tempHeight: this.state.tempHeight });
    }

    //calculate LBM
    data[1].value = (this.state.tempWeight * (100 - this.state.bodyFat)) / 100;
    this.setState({ data });

    //calculate BMR male for mifflin formula
    if (this.state.formula === "mifflin" && this.state.gender === "male") {
      data[0].value =
        9.99 * this.state.tempWeight +
        6.25 * this.state.tempHeight -
        4.92 * this.state.age +
        5;
      this.setState({ data });
      //calculate BMR female for mifflin formula
    } else if (
      this.state.formula === "mifflin" &&
      this.state.gender === "female"
    ) {
      data[0].value =
        9.99 * this.state.tempWeight +
        6.25 * this.state.tempHeight -
        4.92 * this.state.age -
        161;
      this.setState({ data });
    }
    //calculate BMR katch formula
    else if (this.state.formula === "katch") {
      data[0].value = 370 + 21.6 * this.state.data[1].value;
      this.setState({ data });
    }

    //calculate TDEE
    data[2].value = this.state.data[0].value * this.state.activity;
    this.setState({ data });

    //calculate calorie surplus
    if (this.state.weightOption === "gain") {
      let tempResult = this.state.data[2].value * this.state.surplus;
      data[3].value = tempResult + this.state.data[2].value;
      this.setState({ data });
    } else if (this.state.weightOption === "lose") {
      let tempResult = this.state.data[2].value * this.state.surplus;
      data[3].value = this.state.data[2].value - tempResult;
      this.setState({ data });
    } else if (this.state.weightOption === "maintain") {
      let tempResult = this.state.data[2].value * this.state.surplus;
      data[3].value = this.state.data[2].value - tempResult;
      this.setState({ data });
    }

    //calculate macro values
    if (this.state.macro === "1") {
      //ketogenic
      data[4].value = this.state.data[3].value * 0.05;
      data[5].value = this.state.data[3].value * 0.3;
      data[6].value = this.state.data[3].value * 0.65;
      this.setState({ data });
    } else if (this.state.macro === "2") {
      //low carb
      data[4].value = this.state.data[3].value * 0.2;
      data[5].value = this.state.data[3].value * 0.35;
      data[6].value = this.state.data[3].value * 0.45;
      this.setState({ data });
    } else if (this.state.macro === "3") {
      //low fat
      data[4].value = this.state.data[3].value * 0.5;
      data[5].value = this.state.data[3].value * 0.35;
      data[6].value = this.state.data[3].value * 0.15;
      this.setState({ data });
    } else if (this.state.macro === "4") {
      //balanced
      data[4].value = this.state.data[3].value * 0.35;
      data[5].value = this.state.data[3].value * 0.3;
      data[6].value = this.state.data[3].value * 0.35;
      this.setState({ data });
    } else if (this.state.macro === "5") {
      //high protein
      data[4].value = this.state.data[3].value * 0.3;
      data[5].value = this.state.data[3].value * 0.45;
      data[6].value = this.state.data[3].value * 0.25;
      this.setState({ data });
    } else if (this.state.macro === "6") {
      //high carb
      data[4].value = this.state.data[3].value * 0.5;
      data[5].value = this.state.data[3].value * 0.3;
      data[6].value = this.state.data[3].value * 0.2;
      this.setState({ data });
    }
    //calculate macro values
    data[7].value = this.state.data[4].value / 4;
    data[8].value = this.state.data[5].value / 4;
    data[9].value = this.state.data[6].value / 9;
    this.setState({ data });

    let tempCal = this.state.data[3].value - this.state.data[2].value;
    this.state.finalCal = tempCal;
    this.setState({ finalCal: this.state.finalCal });

    console.log("Weight: ", this.state.weight);
    console.log("Height: ", this.state.height);
    console.log("Height Feet: ", this.state.heightFeet);
    console.log("Height Inches: ", this.state.heightIn);
    console.log("Age: ", this.state.age);
    console.log("tempWeight: ", this.state.tempWeight);
    console.log("tempHeight: ", this.state.tempHeight);
    console.log("BMR Male: ", this.state.data[0].value);
    console.log("Activity: ", this.state.activity);
    console.log("Surplus%: ", this.state.surplus);
    console.log("Macro: ", this.state.macro);
    console.log("TDEE: ", this.state.data[2].value);
    console.log("Surplus: ", this.state.data[3].value);
    console.log("Macro1: ", this.state.data[7].value);
    console.log("Macro2: ", this.state.data[8].value);
    console.log("Macro3: ", this.state.data[9].value);
    console.log("Gender: ", this.state.gender);
    console.log("WeightOption: ", this.state.weightOption);
    console.log("System: ", this.state.system);
    console.log("Formula: ", this.state.formula);
    console.log("LBM: ", this.state.data[1].value);
    console.log("finalCal: ", this.state.finalCal);
  }

  render() {
    return (
      <Navigator
        screenProps={{
          age: this.state.age,
          weight: this.state.weight,
          height: this.state.height,
          activity: this.state.activity,
          surplus: this.state.surplus,
          macro: this.state.macro,
          formula: this.state.formula,
          gender: this.state.gender,
          bodyFat: this.state.bodyFat,
          weightOption: this.state.weightOption,
          system: this.state.system,
          tdee: this.state.data[2].value,
          calories: this.state.data[3].value,
          carbs: this.state.data[7].value,
          protein: this.state.data[8].value,
          fat: this.state.data[9].value,
          finalCal: this.state.finalCal,
          handleSubmit: this.handleSubmit,
          handleChange: this.handleChange
        }}
      />
    );
  }
}
