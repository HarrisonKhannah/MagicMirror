/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
	subscription OnCreateUser {
		onCreateUser {
			id
			uuid
			name
			happiness
			calander {
				items {
					id
					uuid
					userID
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
export const onUpdateUser = /* GraphQL */ `
	subscription OnUpdateUser {
		onUpdateUser {
			id
			uuid
			name
			happiness
			calander {
				items {
					id
					uuid
					userID
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
export const onDeleteUser = /* GraphQL */ `
	subscription OnDeleteUser {
		onDeleteUser {
			id
			uuid
			name
			happiness
			calander {
				items {
					id
					uuid
					userID
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
export const onCreateCalander = /* GraphQL */ `
	subscription OnCreateCalander {
		onCreateCalander {
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
			userID
			_version
			_deleted
			_lastChangedAt
			createdAt
			updatedAt
		}
	}
`;
export const onUpdateCalander = /* GraphQL */ `
	subscription OnUpdateCalander {
		onUpdateCalander {
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
			userID
			_version
			_deleted
			_lastChangedAt
			createdAt
			updatedAt
		}
	}
`;
export const onDeleteCalander = /* GraphQL */ `
	subscription OnDeleteCalander {
		onDeleteCalander {
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
			userID
			_version
			_deleted
			_lastChangedAt
			createdAt
			updatedAt
		}
	}
`;
export const onCreateEvent = /* GraphQL */ `
	subscription OnCreateEvent {
		onCreateEvent {
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
export const onUpdateEvent = /* GraphQL */ `
	subscription OnUpdateEvent {
		onUpdateEvent {
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
export const onDeleteEvent = /* GraphQL */ `
	subscription OnDeleteEvent {
		onDeleteEvent {
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
