import {
  GraphQLNonNull,
  GraphQLID
} from 'graphql';

import { userType } from '../../types/user';
import UserModal from '../../../modals/user'

export default {
  type : userType,
  args:{
    data:{
      name: 'id',
      type: new GraphQLNonNull(userType)
    }
  },
  resolve(root,params){
    const removedUser = UserModal.findByIdAndRemove(params.id).exec();
    if (!removedUser){
      throw new Error("Error on removing user"); 
    }
    return removedUser;
  }
}