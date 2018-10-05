import {
  GraphQLNonNull
} from 'graphql';

import { postInputType, postType } from '../../types/post';
import postModal from "../../../modals/post";

export default {
  type : postType,
  args : {
    data : {
      name : data,
      type : new GraphQLNonNull(postInputType)
    }
  },
  resolve(root,params){
    const pModal = new postModal(params.data)
    const newPost = pModal.save();
    if(!newPost){
      throw new Error("Error adding post")
    }
    return newPost
  }
}