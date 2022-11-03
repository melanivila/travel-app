import React, { useState } from "react";
import { Alert, Modal, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../theme/styles";
import { TextInput } from "react-native-gesture-handler";
import { useFirestore } from "../hooks/useFirestore";

export const UserModal = ({ modalVisible, setModalVisible }) => {
  const [text, setText] = useState("");
  const { saveUsername, getUsername } = useFirestore();

  const handleClick = () => {
    saveUsername(text);
    getUsername();
    setModalVisible(false);
  };

  return (
    <View style={{ marginTop: 22 }}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Window has been closed");
        }}
      >
        <View
          style={{ justifyContent: "center", alignItems: "center", top: 40 }}
        >
          <View style={styles.modalBackground}>
            <View>
              <Text style={styles.modalText}>Change username:</Text>
              <TextInput
                style={styles.modalInput}
                value={text}
                onChangeText={(text) => setText(text)}
              />

              <View
                style={{
                  flexDirection: "row",
                  marginTop: 20,
                  justifyContent: "center",
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    setModalVisible(false);
                  }}
                >
                  <Text style={styles.deleteAccountBtn}>Close</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleClick}>
                  <Text style={styles.saveBtn}>Save</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};
