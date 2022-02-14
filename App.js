import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

function App() {
  let fname = "Muhammad Irfan";
  return (
    // view is use to return more than 1 components
    <View style={styles.myview}>
      <View style={styles.aridLogo}>
        <Image
        //source={require('./asset/PMASUAAR with bg.png')} style={{ height: 35, width: 35, }}
        />
        <Text style={styles.aridLogoTxt}>
          PMAS ARID AGRICULTURAL UNIVERSITY
        </Text>
      </View>
      <View>
        <Image
        source={require('./asset/passport size.jpg')} style={{ height: 140, width: 140, marginHorizontal: 'auto' }}
        />
      </View>
      <Text style={styles.myNameTxt}>Muhammad Irfan</Text>
      <Text style={styles.detail}>Reg No : 19-ARID-1255</Text>
      <Text style={styles.detail}>Degree : BS Software Engineering</Text>
      <Text style={styles.detail}>F Name : Muhammad Manzoor</Text>
      <Text style={styles.detail}>Address : Street 47, G11 Islamabad</Text>
      <Text style={styles.detail}>E-mail : irfanstark11@gmail.com</Text>

      <View style={styles.singPart}>
        <Text> Valid till March 2019 to March 2023</Text>
        <Text style={styles.signature}> irf@n</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  myview: {
    margin: "auto",
    borderRadius: 10,
    width: 325,
    padding: 15,
    backgroundColor: "yellow",
    borderWidth: 1,
    borderColor: "red",
    shadowColor: "#171717",
    shadowOffset: { width: 1, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5
  },
  myNameTxt: {
    fontSize: 25,
    //marginHorizontal: 'auto',
    marginLeft: 60,
    fontFamily: "auto",
    marginTop: 16,
    marginBottom: 10
  },
  aridLogo: {
    flex: 1,
    flexDirection: "row",
    color: "green",
    marginBottom: 10
  },
  aridLogoTxt: {
    color: "green",
    fontFamily: "auto",
    marginTop: 5,
    marginLeft: 8
  },
  detail: {
    //marginHorizontal: 'auto',
    marginLeft: 10,
    marginTop: 10,
    fontSize: 16,
    fontFamily: "auto",
    color: "#4c4949"
  },
  singPart: {
    marginTop: 10,
    marginLeft: 7,
    flex: 1,
    flexDirection: "row"
  },
  signature: {
    marginLeft: 15,
    fontFamily: "cursive",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    color: "green"
  }
});

export default App;