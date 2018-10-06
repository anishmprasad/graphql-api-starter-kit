import {
  GraphQLNonNull,
  GraphQLString,
  GraphQLID,
  GraphQLObjectType,
  GraphQLList,
  GraphQLInt,
  GraphQLInputObjectType
} from 'graphql';

export const postType = new GraphQLObjectType({
  name: 'Post',
  description: 'Post api',
  fields: () => ({
    _id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    uid: {
      type: GraphQLString
    },
    title: {
      type: GraphQLString      
    },
    body: {
      type: GraphQLString      
    }
  })
})

export const postInputType = new GraphQLInputObjectType({
  name: 'PostInput',
  description: 'Insert Post',
  fields:() => ({
    uid:{
      type: GraphQLString      
    },
    title: {
      type: GraphQLString      
    },
    body:{
      type: GraphQLString      
    }
  })
})