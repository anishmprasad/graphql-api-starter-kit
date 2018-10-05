import {
  GraphQLObjectType,
  GraphQLSchema
} from 'graphql'

import mutation from './mutations';
import queries from './queries'

export default new GraphQLSchema({
  query:{
    name : "Query",
    fields : queries
  },
  mutation:{
    name : "Mutation",
    fields: mutation
  }
})