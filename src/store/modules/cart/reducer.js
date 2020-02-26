import produce from 'immer';

export default function cart(state = [], action) {
  console.log(state);
  switch (action.type) {
    case 'ADD_TO_CART':
      return produce(state, draft => {
        const produceIndex = draft.findIndex(p => p.id === action.product.id);

        if (produceIndex >= 0) {
          draft[produceIndex].amount += 1;
        } else {
          draft.push({
            ...action.product,
            amount: 1,
          });
        }
      });

    default:
      return state;
  }
}
