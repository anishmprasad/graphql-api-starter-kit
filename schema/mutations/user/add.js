import {
  GraphQLNonNull
} from 'graphql';

import { userInputType, userType } from '../../types/user';
import UserModal from '../../../modals/user'

export default {
  type: userType,
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(userInputType)
    }
  },
  resolve(root, params) {
    const uModal = new UserModal(params.data);
    const newUser = uModal.save();
    if (!newUser) {
      throw new Error("Error on adding user");
    }
    return newUser;
  }
}