import {
  GraphQLID,
  GraphQLNonNull
} from 'graphql'
import { userType } from '../../types';
import UserModal from '../../modals/user';

export default {
  type : userType,
  args:{
    id: {
      name : ID,
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve(root,params){
    return UserModal.findById(params.id).exec()
  }
}