import React from "react";
import classnames from "classnames/bind";

import styles from "./App.module.scss";

const cx = classnames.bind(styles);


const MyInput = ({ value, onChange, theme }) => (
  <input className={cx("input", {[`input-theme-${theme}`]: true})} value={value} onChange={onChange} />
)

const Task = ({ id, name, descr, priority }) => (
  //<div className={cx("task")}>
  <tr>
    <th>ID{id}</th>
    <th>{name} </th>
    <th>{descr}</th>
    <th>{priority}</th>
  </tr>
);

class ClassComponent extends React.Component {
  state = {
    tasks: [],
    id: 1,
    name: 'Новое задание',
    descr: 'Подробности миссии',
    prior: 123,
    theme: "light",
  };

  handleThemeChange = event => {
    this.setState({ theme: event.target.value });
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
      const newState = { ...state, tasks: [ ...state.tasks ] };
      newState.tasks.push(taski);
      return newState;
    });
  };

  byField = (field) => {
      return ((a, b) => a[field] > b[field] ? 1 : -1);
  }

  SortingName = () => {
    this.setState(state => {
      const newState = { ...state, tasks: [ ...state.tasks ] };
      newState.tasks.sort(this.byField('name'));
      return newState;
    });
  }

  SortingPriority = () => {
    this.setState(state => {
      const newState = { ...state, tasks: [ ...state.tasks ] };
      newState.tasks.sort(this.byField('prior'));
      return newState;
    });
  }

  render() {
    
    return (
      <div className={cx("container", {[`container-theme-${this.state.theme}`]: true})}>
        <div className={cx("header", {[`header-theme-${this.state.theme}`]: true})}>
            <div className={cx("radios")}>
            <h3>Задай Настроение!</h3>
            <div>
                <input
                type="radio"
                name="theme"
                id="light"
                value="light"
                checked={this.state.theme === "light"}
                onChange={this.handleThemeChange}
                />
                <label htmlFor="light">Лирическое</label>
            </div>

            <div>
                <input
                type="radio"
                name="theme"
                id="dark"
                value="dark"
                checked={this.state.theme === "dark"}
                onChange={this.handleThemeChange}
                />
                <label htmlFor="dark">Рабочее</label>
            </div>
            </div>
            <div><h1>Самый внимательный планер</h1></div>
            <div className={cx("relatives")}>
                <button className={cx("button")} onClick={this.SortingName}>
                Сортировать по Названию
                </button>
                <button className={cx("button")} onClick={this.SortingPriority}>
                Сортировать по Степени важности
                </button>
            </div>
            <div className={cx("relatives")}>
                <div className={cx("field")}>
                    <h4>Название задания</h4>
                    <MyInput onChange={this.handleChangeName}/>
                </div>
                <div className={cx("field")}>
                    <h4>Описание задания</h4>
                    <MyInput onChange={this.handleChangeDescr}/>
                </div>
                <div className={cx("field")}>
                    <h4>Важность(приоритет)</h4>
                    <MyInput onChange={this.handleChangePriority}/>
                </div>
            </div>
            <button className={cx("button")} onClick={this.PushNewTask}>
            {"Добавить задание"}
            </button>
        </div>


        <div className={cx("content", {[`content-theme-${this.state.theme}`]: true})}>
            <table>
              {this.state.tasks.map(task => <Task 
                  id={task.id} name={task.name} descr={task.descr} priority={task.prior} />)}
            </table>
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