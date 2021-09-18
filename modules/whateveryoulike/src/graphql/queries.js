/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const syncCalanders = /* GraphQL */ `
	query SyncCalanders($filter: ModelCalanderFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
		syncCalanders(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
			items {
				id
				uuid
				Events {
					nextToken
					startedAt
				}
				_version
				_deleted
				_lastChangedAt
				createdAt
				updatedAt
			}
			nextToken
			startedAt
		}
	}
`;
export const getCalander = /* GraphQL */ `
	query GetCalander($id: ID!) {
		getCalander(id: $id) {
			id
			uuid
			Events {
				items {
					id
					name
					room
					time
					calanderID
					_version
					_deleted
					_lastChangedAt
					createdAt
					updatedAt
				}
				nextToken
				startedAt
			}
			_version
			_deleted
			_lastChangedAt
			createdAt
			updatedAt
		}
	}
`;
export const listCalanders = /* GraphQL */ `
	query ListCalanders($filter: ModelCalanderFilterInput, $limit: Int, $nextToken: String) {
		listCalanders(filter: $filter, limit: $limit, nextToken: $nextToken) {
			items {
				id
				uuid
				Events {
					nextToken
					startedAt
				}
				_version
				_deleted
				_lastChangedAt
				createdAt
				updatedAt
			}
			nextToken
			startedAt
		}
	}
`;
export const syncEvents = /* GraphQL */ `
	query SyncEvents($filter: ModelEventFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
		syncEvents(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
			items {
				id
				name
				room
				time
				calanderID
				_version
				_deleted
				_lastChangedAt
				createdAt
				updatedAt
			}
			nextToken
			startedAt
		}
	}
`;
export const getEvent = /* GraphQL */ `
	query GetEvent($id: ID!) {
		getEvent(id: $id) {
			id
			name
			room
			time
			calanderID
			_version
			_deleted
			_lastChangedAt
			createdAt
			updatedAt
		}
	}
`;
export const listEvents = /* GraphQL */ `
	query ListEvents($filter: ModelEventFilterInput, $limit: Int, $nextToken: String) {
		listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
			items {
				id
				name
				room
				time
				calanderID
				_version
				_deleted
				_lastChangedAt
				createdAt
				updatedAt
			}
			nextToken
			startedAt
		}
	}
`;
