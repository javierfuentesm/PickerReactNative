import React from "react";
import { Button, TextInput, View, Picker } from "react-native";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: ["One", "Two", "Three", "four"],
      text: "",
      choosenIndex: 0
    };
  }
  render() {
    let optionTemplate = this.state.values.map(v => (
      <Picker.Item label={v} value={v} />
    ));

    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <TextInput
          style={{ height: 40 }}
          placeholder="Ingresa el valor de la opcion que deseas agregar"
          onChangeText={a => this.setState({ text: a })}
        />
        <Button
          title="Ingresar"
          onPress={() => {
            let a = this.state.text;
          

            this.setState(previousState => ({
              values: [...previousState.values, a]
          }));
            console.log(a);
          }}
        />
        <Picker
          selectedValue={this.state.values[this.state.choosenIndex]}
          style={{ height: 60, width: 100 }}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ choosenIndex: itemIndex })
          }
        >
          {optionTemplate}
        </Picker>
      </View>
    );
  }
}

export default App;
