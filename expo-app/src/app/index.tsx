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
            authClient.signOut();
          }}
        />
      ) : (
        <Button
          title="Login"
          onPress={() => {
            authClient.signIn.anonymous();
          }}
        />
      )}
    </View>
  );
}
