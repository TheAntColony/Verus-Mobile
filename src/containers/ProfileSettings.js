/*
  This component is meant to be the overview screen for 
  the user profile settings menu. It provides the user
  with all configurable settings they have access to for 
  their user account. This includes changing passwords, 
  deleting accounts etc.
*/

import React, { Component } from "react";
import { ListItem } from "react-native-elements";
import { 
  View, 
  StyleSheet, 
  Text, 
  TouchableOpacity,
  ScrollView
} from "react-native";
import { connect } from 'react-redux';

const RESET_PWD = "ResetPwd"
const RECOVER_SEED = "RecoverSeed"
const PROFILE_INFO = "ProfileInfo"
const REMOVE_PROFILE = "DeleteProfile"

class ProfileSettings extends Component {
  constructor(props) {
    super(props)
    this.state = {
      totalFiatBalance: 0,
      coinRates: {},
      loading: false
    };
  }

  _openSettings = (screen) => {
    let navigation = this.props.navigation  

    navigation.navigate(screen);
  }

  renderSettingsList = () => {
    return (
      <ScrollView style={styles.coinList}>
        {/* TODO: Add back in when more interesting profile data and/or settings are implemented
        <TouchableOpacity onPress={() => this._openSettings(PROFILE_INFO)}>
          <ListItem                       
            title={<Text style={styles.coinItemLabel}>Profile Info</Text>}
            leftIcon={{name: 'info'}}
            containerStyle={{ borderBottomWidth: 0 }} 
          />
        </TouchableOpacity>*/}
        <TouchableOpacity onPress={() => this._openSettings(RECOVER_SEED)}>
          <ListItem                       
            title={<Text style={styles.coinItemLabel}>Recover Seed</Text>}
            leftIcon={{name: 'lock-open'}}
            containerStyle={{ borderBottomWidth: 0 }} 
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this._openSettings(RESET_PWD)}>
          <ListItem                       
            title={<Text style={styles.coinItemLabel}>Reset Password</Text>}
            leftIcon={{name: 'autorenew'}}
            containerStyle={{ borderBottomWidth: 0 }} 
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this._openSettings(REMOVE_PROFILE)}>
          <ListItem                       
            title={<Text style={styles.coinItemLabel}>Delete Profile</Text>}
            leftIcon={{name: 'delete-forever'}}
            containerStyle={{ borderBottomWidth: 0 }} 
          />
        </TouchableOpacity>
      </ScrollView>
    )
  }

  render() {
    return (
      <View style={styles.root}>
        <Text style={styles.fiatBalanceLabel}>
        {this.props.activeAccount.id.length < 15 ? 
          this.props.activeAccount.id : "My Account"}
        </Text>
        <Text style={styles.balanceSheetLabel}>Profile Settings</Text>
        {this.renderSettingsList()}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    activeAccount: state.authentication.activeAccount,
  }
};

export default connect(mapStateToProps)(ProfileSettings);

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#232323",
    flex: 1,
    alignItems: "center"
  },
  fiatBalanceLabel: {
    backgroundColor: "transparent",
    opacity: 0.89,
    marginTop: 15,
    marginBottom: 15,
    paddingBottom: 0,
    paddingTop: 0,
    fontSize: 25,
    textAlign: "center",
    color: "#E9F1F7",
    width: 359,
  },
  coinItemLabel: {
    color: "#E9F1F7",
    marginLeft: 10,
  },
  balanceSheetLabel: {
    width: "100%",
    backgroundColor: "#E9F1F7",
    opacity: 0.86,
    marginTop: 0,
    marginBottom: 0,
    paddingBottom: 15,
    paddingTop: 15,
    fontSize: 22,
    textAlign: "center",
    color: "#232323"
  },
  coinList: {
    width: "100%",
  },
});
