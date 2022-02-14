import React from 'react';
import { Component } from 'react/cjs/react.production.min';

class TodoItem extends Component {
  render() {
    const { completed, id, title } = this.props.todo;

    return (
      <li>
        <input
          type='checkbox'
          checked={completed}
          onChange={this.props.handleChangeProps(id)}
        />
        <button onClick={() => this.props.deleteTodoProps(this.props.todo.id)}>
          Delete
        </button>
        {title}
      </li>
    );
  }
}

export default TodoItem;
