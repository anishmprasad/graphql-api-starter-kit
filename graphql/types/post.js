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

  })
})