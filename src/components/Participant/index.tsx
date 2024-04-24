import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

type ParticipantProps = {
  name: string;
  participantRemove: (params: { name: string }) => void;
};

const Participant = ({ name, participantRemove }: ParticipantProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          participantRemove({ name });
        }}
      >
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Participant;
