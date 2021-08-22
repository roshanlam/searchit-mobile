import * as React from "react";
import {
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  View
} from "react-native";
import Button from "../components/CustomButton";
import FormTextInput from "../components/FormTextInput";
import colors from "../config/colors";
import strings from "../config/strings";

interface State {
  query: string;
  queryTouched: boolean;

}

class LoginScreen extends React.Component<{}, State> {
  passwordInputRef = React.createRef<FormTextInput>();

  readonly state: State = {
    query: "",
    queryTouched: false,
  };

  handleQueryChange = (query: string) => {
    this.setState({ query: query });
  };

  handleQuerySubmitPress = () => {
    if (this.passwordInputRef.current) {
      this.passwordInputRef.current.focus();
    }
  };


  handleSearchPress = () => {
    console.log("Search button pressed");
  };

  render() {
    const {
      query,
      queryTouched,
    } = this.state;
    // Show the validation errors only when the inputs
    // are empty AND have been blurred at least once
    const emailError =
      !query && queryTouched
        ? strings.QUERY_REQUIRED
        : undefined;
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
      >
        <Image source={{uri:"https://raw.githubusercontent.com/roshanlam/HonorsPy/dev/SearchItLogo.png"}} style={styles.logo} />
        <View style={styles.form}>
          <FormTextInput
            value={this.state.query}
            onChangeText={this.handleQueryChange}
            onSubmitEditing={this.handleQuerySubmitPress}
            placeholder={"Crawl Website"}
            autoCorrect={true}
            returnKeyType="next"
            autoCapitalize={"none"}
            error={emailError}
          />
          <Button
            label={strings.CRAWL}
            onPress={this.handleSearchPress}
            disabled={!query}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5fbff',
    alignItems: "center",
    justifyContent: "space-between"
  },
  logo: {
    flex: 1,
    width: "25%",
    resizeMode: "contain",
    alignSelf: "center"
  },
  form: {
    flex: 1,
    justifyContent: "center",
    width: "80%"
  }
});

export default LoginScreen;