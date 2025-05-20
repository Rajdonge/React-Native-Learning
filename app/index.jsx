import { StyleSheet, Text, View, Image } from "react-native";
import Logo from "../assets/img/React_Native_logo.png";

const Home = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://www.onu.ro/wp/wp-content/uploads/2020/03/react-native-logo-768x890.png",
        }}
        style={styles.logo}
      />
      <Text style={styles.title}>The number 1</Text>
      <Text style={{ marginTop: 10, marginBottom: 30 }}>Reading List App</Text>

      <View style={styles.card}>
        <Text>Hello, This is a card.</Text>
      </View>
      <Image
        source={Logo}
        style={{
          width: 200,
          height: 200,
          resizeMode: "contain",
          marginTop: 20,
        }}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  card: {
    backgroundColor: "#eee",
    padding: 20,
    borderRadius: 5,
    boxShadow: "4px 4px rgba(0, 0, 0, 0.1)",
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    marginBottom: 20,
  },
});
