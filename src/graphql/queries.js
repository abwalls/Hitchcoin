// eslint-disable
// this is an auto generated file. This will be overwritten

export const getRides = `query GetRides($userID: String!, $Location: String!, $Destination: String!) {
  getRides(userID: $userID, Location: $Location, Destination: $Destination) {
    Location
    userID
    Destination
  }
}
`;
export const listRides = `query ListRides(
  $filter: TableRidesFilterInput
  $limit: Int
  $nextToken: String
) {
  listRides(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      Location
      userID
      Destination
    }
    nextToken
  }
}
`;
