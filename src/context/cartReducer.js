import * as cartActionTypes from "./cartActionType";


export const studentReducer = (state, action) => {
    switch(action.type){
        case cartActionTypes.ADD_TO_CART: return addToCartHandler(state, action);
        case cartActionTypes.REMOVE_STUDENT: return (index) => {
            // logic to remove student
        }
        case cartActionTypes.UPDATE_STUDENT: return (updatedStudentDates, indexs) => {
            // logic to update student
            const updatedStudentDate = action.payload.studentData;
            const index = action.payload.index;
        }

        default: return state;
    }
}


const addToCartHandler = (state, action) => {
    debugger
    const productList = [...state.cart];

    if (!productList.includes(action.payload.item)) {
      productList.push(action.payload.item);
    }
    const index = productList.indexOf(action.payload.item);
    productList[index].quantity++;
    return productList;
  };

//   const removeData = (item) => {
//     const productList = [...cart];

//     if (!productList.includes(item)) {
//       productList.push(item);
//     }
//     const index = productList.indexOf(item);
//     productList[index].quantity--;
//     setCart(productList);
//   };

//   const changeQuantity = (item, e) => {
//     const productList = [...cart];
//     const index = productList.indexOf(item);

//     if (e === "+") {
//       productList[index].quantity++;
//     } else {
//       if (productList[index].quantity > 1) {
//         productList[index].quantity--;
//       } else {
//         productList.splice(index, 1);
//       }
//     }
//     setCart(productList);
//   };