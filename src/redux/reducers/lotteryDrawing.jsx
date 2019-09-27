import Action from '../actions/_actions'

const uuidv4 = require('uuid/v4');
const initialState = () => ({
    setting: [{
      id: uuidv4(),
      title: 'Hadiah Ketiga',
      totalCount: 3,
    },{
      id: uuidv4(),
      title: 'Hadiah Kedua',
      totalCount: 2,
    },{
      id: uuidv4(),
      title: 'Hadiah Pertama',
      totalCount: 1,
    }]
  }
);
const lotteryDrawing = (state = initialState(), action) => {
  switch (action.type) {
    case Action.SET_LOTTERY_SETTING:
      state.setting = action.lottery;
  }
  return Object.assign({}, state);
};

export default lotteryDrawing