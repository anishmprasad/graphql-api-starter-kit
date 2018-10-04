import {
  GraphQLList
} from 'graphql';
import { userType } from '../../types';
import UserModal from '../../modals/user';

export default {
  type : new GraphQLList(userType),
  resolve(){
    const users = UserModal.find().exec();
    if(!users){
      throw new Error("Error while fetching user...")
    }
    return users
  }
}