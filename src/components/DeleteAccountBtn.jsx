import { deleteUser, getAuth } from 'firebase/auth';
import React from 'react'
import { Text, TouchableOpacity } from "react-native";
import { auth } from '../db/firebase';
import { styles } from "../theme/styles";

export const DeleteAccountBtn = () => {

      const handleDelete = ( values ) => {

        getAuth(auth, values.uid  )
        .deleteUser(uid)
        .then((userCredentials) => {
          console.log('Successfully deleted user');
        })
        .catch((error) => {
          console.log('Error deleting user:', error);
        });
      }


    return (
      <TouchableOpacity
          onPress={ handleDelete( values ) }
      >
          <Text style={styles.deleteAccountBtn}>Delete Account</Text>

      </TouchableOpacity>
    );
}
