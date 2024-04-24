import * as React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import { styles } from "./styles";
import Participant from "../../components/Participant";

const Home = () => {
  const [participantInputValue, setParticipantInputValue] =
    React.useState<string>("");
  const [participants, setParticipants] = React.useState<string[]>([]);

  const handleParticipantAdd = () => {
    if (participants.includes(participantInputValue)) {
      return Alert.alert(
        "Participante Existe",
        "Já existe um participante na lista com este nome"
      );
    }

    if (participantInputValue.length > 0) {
      setParticipants((prevParticipants) => [
        ...prevParticipants,
        participantInputValue,
      ]);
      setParticipantInputValue("");
    }
  };

  const handleParticipantRemove = (name: string) => {
    return Alert.alert(
      "Remover participante",
      `Remover o participante ${name} ?`,
      [
        {
          text: "Sim",
          onPress: () => {
            setParticipants((prevParticipants) =>
              prevParticipants.filter((participant) => participant !== name)
            );
            Alert.alert("Deletado!");
          },
        },
        { text: "Não", style: "cancel" },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Terça 23 de Abril de 2024</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor={"#6B6B6B"}
          onChangeText={setParticipantInputValue}
          value={participantInputValue}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            participantRemove={({ name }) => handleParticipantRemove(name)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda ? Adicione participantes a sua lista de presença.
          </Text>
        )}
      />
    </View>
  );
};

export default Home;
