import {
  GraphQLNonNull,
  GraphQLString,
  GraphQLID,
  GraphQLObjectType,
  GraphQLList,
  GraphQLInt,
  GraphQLInputObjectType
} from 'graphql';

import PostModal from '../../modals/post';
import { postType } from './post'

export const userType = new GraphQLObjectType({
  name : 'User',
  description : 'User api',
  fields : () => ({
    _id:{
      type: new GraphQLNonNull(GraphQLID)
    },
    email: {
      type: GraphQLString
    },
    name: {
      type: GraphQLString      
    },
    post: {
      type: new GraphQLList(postType),
      resolve(user){
        const { _id } = user;
        return PostModal.find({ uid: id}).exec()
      }
    } 
  })
})