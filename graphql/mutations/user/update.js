import {
  GraphQLNonNull,
  GraphQLID
} from 'graphql';

import { userType,userInputType } from '../../types/user';
import UserModal from '../../../modals/user'

export default {
  type: userType,
  args: {
    id:{
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    },
    data: {
      name: 'data',
      type: new GraphQLNonNull(userInputType)
    }
  },
  resolve(root, params) {
    return UserModal.findByIdAndUpdate(params.id,{ 

    })
  }
}