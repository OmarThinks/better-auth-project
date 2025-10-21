import { Button, Text, View } from "react-native";
import { authClient } from "../lib/auth-client";

export default function Index() {
  const { data: session } = authClient.useSession();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Text>{JSON.stringify(session)}</Text>

      {!!session ? (
        <Button
          title="Logout"
          onPress={() => {
            authClient
              .signOut()
              .then((a) => {
                console.log("sign out successful", a);
              })
              .catch((err) => {
                console.log("sign out Error:", err);
              })
              .finally(() => {
                console.log("sign out completed");
              });
          }}
        />
      ) : (
        <Button
          title="Login"
          onPress={() => {
            authClient.signIn
              .anonymous()
              .then((a) => {
                console.log("sign in successful", a);
              })
              .catch((err) => {
                console.log("sign in Error:", err);
              })
              .finally(() => {
                console.log("sign in completed");
              });
          }}
        />
      )}
    </View>
  );
}
