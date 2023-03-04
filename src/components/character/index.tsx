import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export interface characterType {
  id: string;
  name: string;
  alternate_names: string[];
  species: string;
  gender: string;
  house: string;
  dateOfBirth: string;
  yearOfBirth: number;
  wizard: boolean;
  ancestry: string;
  eyeColour: string;
  hairColour: string;
  wand: {
    wood: string;
    core: string;
    length: number;
  };
  patronus: string;
  hogwartsStudent: boolean;
  hogwartsStaff: boolean;
  actor: string;
  alternate_actors: string[];
  alive: boolean;
  image: string;
}

export const Character = (props: characterType): JSX.Element => {
  const {name, image} = props;
  return (
    <TouchableOpacity style={styles.container}>
      <View>
        <Image
          source={{uri: image || 'https://via.placeholder.com/100x100'}}
          style={styles.image}
        />
      </View>
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#eee',
    padding: 32,
  },
  image: {
    width: 100,
    height: 100,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingTop: 8,
  },
});
