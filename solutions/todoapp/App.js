import React from 'react';
import './App.css';

const AddItemForm = (props) => {
  const [name, setName] = React.useState("");

  const submit = () => {
    props.onAddItem({ name: name, isDone: false });

    setName("");
  }

  return <div className="AddItemForm">
    <div>
      <label>Task:{" "}</label>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
    </div>
    <button onClick={submit}>Submit</button>
  </div>;
}

const Item = (props) => {
  const onCheckboxClicked = (e) => {
    props.onSetDone(e.target.checked);
  };

  return <div>
    <input type="checkbox" checked={props.item.isDone} onChange={onCheckboxClicked} />
    <b style={{ textDecoration: props.item.isDone ? "line-through" : "" }}>
      {props.item.name}
    </b>
  </div>
};

const App = () => {
  const [items, setItems] = React.useState([
    {
      name: "Default item"
    }
  ]);

  return (
    <div>
      <h1>Excellent React TODO List App</h1>
      <p>Hi, welcome to this TODO list!</p>

      <h3>My items:</h3>
      <div className="TaskList">
        {items.map((item, index) => <Item item={item} onSetDone={isDone => {
          const newItems = [...items];
          newItems[index] = { ...item, isDone: isDone };
          setItems(newItems);
        }} />)}
      </div>

      <AddItemForm onAddItem={newItem => setItems([...items, newItem])} />
    </div>
  );
}

export default App;
