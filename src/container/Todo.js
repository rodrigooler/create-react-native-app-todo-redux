import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { connect } from 'react-redux';

import { todoAdd } from '../action/todoActions';

class Todo extends Component {
  state = {
    todoValue: '',
  };

  todoAdd = () => {
    this.props.actions.todoAdd({ ...this.state });
    return this.setState({ todoValue: '' });
  };

  render() {
    const { todoValue } = this.state;
    console.log(this.props);

    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.titleText}>CRNA + REDUX TODO</Text>
        </View>
        <View>
          <TextInput
            style={styles.textInput}
            onChangeText={todoValue => this.setState({ todoValue })}
            value={todoValue}
          />
          <TouchableOpacity style={styles.button} onPress={this.todoAdd}>
            <Text>ADD</Text>
          </TouchableOpacity>
        </View>
        <View>
          <FlatList
            data={[{ key: 'a' }, { key: 'b' }]}
            renderItem={({ item }) =>
              <Text>
                {item.key}
              </Text>}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4EB7D9',
    alignItems: 'center',
  },
  title: {
    marginTop: 100,
    marginBottom: 100,
  },
  titleText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 30,
  },
  textInput: {
    height: 40,
    width: 320,
    borderColor: '#333',
    borderWidth: 1,
    marginBottom: 10,
    backgroundColor: '#FFF',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 320,
    backgroundColor: '#FFF',
  },
});

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
  actions: {
    todoAdd: todo => dispatch(todoAdd(todo)),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
