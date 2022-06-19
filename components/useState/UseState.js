import React, { Component, useState } from 'react';

// function UseState() {
//   const [item, setItem] = useState(0);

//   const increaseItem = () => {
//     setItem(item + 1);
//   }

//   const decreaseItem = () => {
//     setItem(item - 1);
//   }

//   return (
//     <>
//       <div>item is {item}</div>
//       <button onClick={increaseItem}>+1</button>
//       <button onClick={decreaseItem}>-1</button>
//     </>
//   );
// }

class UseState extends Component {
  state = {
    item : 1,
  }

  increaseItem = () => {
    this.setState(state => {
      return {
        item: state.item + 1
      };
    });
  };

  // setState 의 기본형은 state: ((prevState: Readonly<S>, props: Readonly<P>) => (Pick<S, K> | S | null)) | (Pick<S, K> | S | null),
  // (prev, props) => ({}) 형으로 구성했는데 왜 prop 야하는 {item} 이 읽히지 않았다고 하는거지?
  // 일단 패스하고 나중에 알게되면.. 22.06.19
  decreaseItem = () => {
    this.setState((prevItem, {item}) => ({item: prevItem.item - 1}));
  }

  render() {
    const {item} = this.state;
    return (
      <>
        <div>item is {item}</div>
        <button onClick={this.increaseItem}>+1</button>
        <button onClick={this.decreaseItem}>-1</button>
      </>
    );
  }
}


export default UseState;