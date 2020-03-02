import React from "react";

import "./App.css";


const MyInput = ({ value, onChange }) => (
  <input value={value} onChange={onChange} />
)

const Task = ({ id, name, descr, priority }) => (
  <div>
    <div>ID {id}</div>
    <div>{name}</div>
    <div>{descr}</div>
    <div>{priority}</div>
    <p></p>
  </div>
);

class ClassComponent extends React.Component {
  state = {
    tasks: [],
    id: 1,
    name: 'Task name',
    descr: 'Task description',
    prior: 123,
  };

  handleChangeName = (event) => {
    const newValue = event.target.value;
    this.setState({ name: newValue  });
  };

  handleChangeDescr = (event) => {
    const newValue = event.target.value;
    this.setState({ descr: newValue  });
  };

  handleChangePriority = (event) => {
    const newValue = event.target.value;
    this.setState({ prior: newValue  });
  };

  PushNewTask = () => {
    this.setState({ id: this.state.id + 1 });
    const taski = {
      id: this.state.id,
      name: this.state.name,
      descr: this.state.descr,
      prior: this.state.prior,
    }
    this.setState(state => {
      const newState = { ...state };
      newState.tasks.push(taski);
      return newState;
    });
  };

  byField = (field) => {
      return ((a, b) => a[field] > b[field] ? 1 : -1);
  }

  SortingName = () => {
    this.setState(state => {
      const newState = { ...state };
      newState.tasks.sort(this.byField('name'));
      return newState;
    });
  }

  SortingPriority = () => {
    this.setState(state => {
      const newState = { ...state };
      newState.tasks.sort(this.byField('prior'));
      return newState;
    });
  }

  render() {
    
    return (
      <div className="app">
        <div><h1>Заполните три поля, затем нажмите "Добавить задание"</h1></div>
        <div><h4>1)Название задания 2)Описание задания 3)Важность(приоритет)</h4></div>
        <MyInput
          onChange={this.handleChangeName}
        />
        <MyInput
          onChange={this.handleChangeDescr}
        />
        <MyInput
          onChange={this.handleChangePriority}
        />
        <button className="content" onClick={this.PushNewTask}>
          {"Добавить задание"}
        </button>
        <button className="content" onClick={this.SortingName}>
          {"Сортировать по имени"}
        </button>
        <button className="content" onClick={this.SortingPriority}>
          {"Сортировать по приоритету"}
        </button>
        <div>
          {this.state.tasks.map(task => <Task id={task.id} name={task.name} descr={task.descr} priority={task.prior} />)}
        </div>
      </div>
    );
  }
}

const App = () => {
  return (
    <ClassComponent/>
  )
}

export default App;