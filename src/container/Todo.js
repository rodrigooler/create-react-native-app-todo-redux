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
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { todoAdd, todoRemove } from '../action/todoActions';

class Todo extends Component {
  state = {
    todoValue: '',
  };

  todoAdd = () => {
    this.props.actions.todoAdd({ ...this.state });
    return this.setState({ todoValue: '' });
  };

  todoRemove = index => this.props.actions.todoRemove(index);

  render() {
    const { todoValue, index } = this.state;
    const { todos } = this.props;

    return (
      <KeyboardAwareScrollView>
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
              <Text style={styles.buttonText}>ADD</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.flatView}>
            <FlatList
              data={todos}
              renderItem={({ item, index }) => {
                console.log(index);
                return (
                  <TouchableOpacity
                    key={item.todoValue}
                    onPress={() => this.todoRemove(index)}
                    style={styles.flatList}
                  >
                    <Text>
                      {`Value: ${item.todoValue}`}
                    </Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
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
    backgroundColor: '#333',
  },
  buttonText: {
    color: '#FFF',
  },
  flatView: {
    marginTop: 10,
  },
  flatList: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 320,
    backgroundColor: '#FFF',
    borderColor: '#333',
    borderWidth: 1,
  },
});

const mapStateToProps = state => ({
  todos: state,
});
const mapDispatchToProps = dispatch => ({
  actions: {
    todoAdd: todo => dispatch(todoAdd(todo)),
    todoRemove: index => dispatch(todoRemove(index)),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
