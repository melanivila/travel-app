import { AuthCredential, EmailAuthCredential, EmailAuthProvider, reauthenticateWithCredential } from 'firebase/auth';
import React, { useContext, useState } from 'react'
import { Alert, Text, TextInput, TouchableOpacity } from "react-native";
import { UserContext } from '../context/UserContext';
import { app, auth } from '../db/firebase';
import { styles } from "../theme/styles";
import { Input } from './Input';

export const DeleteAccountBtn = () => {
  
  const { uid, email } = auth.currentUser;
  const { user } = useContext( UserContext );
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  function reauthenticateUser() {  

 if ( !visible ) {
  
  setVisible( true );

 } else {
      let user = auth.currentUser;
  
      let credential = EmailAuthProvider.credential( email, password );
  
      reauthenticateWithCredential( user, credential )
        .then(result => { console.log( "Succesfuly authenticated", password ) })
        .catch(error => { console.log( error ) });
    }
} 


  const logOut = () => {
    auth
      .signOut()
      .then(() => {
        console.log("succesfully signout");
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = () => {

      auth.currentUser
      .reauthenticateWithCredential( user, AuthCredential )
      .delete( uid )
      .then((userCredentials) => {
        
        console.log('Successfully deleted user');
        logOut();
      })
      .catch((error) => {
        console.log('Error deleting user:', error);
      });
    }

  const createDeleteAlert = () =>
    Alert.alert(
      "Delete account",
      "Are you sure you wanna delete your account?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        { text: "Delete", onPress: () => handleDelete() }
      ]
  );

  return (
    <>
    {
      visible && <TextInput
      placeholder="Search..."
      style={styles.searchInput}
      autoCapitalize="none"
      autoCorrect={false}
      value={password}
      onChangeText={setPassword}
    />
    }
      <TouchableOpacity onPress={ reauthenticateUser }>
        <Text style={ styles.deleteAccountBtn }> Delete Account </Text>
      </TouchableOpacity>    
    </>
        );
};
