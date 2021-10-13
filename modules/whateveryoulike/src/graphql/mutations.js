/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
	mutation CreateUser($input: CreateUserInput!, $condition: ModelUserConditionInput) {
		createUser(input: $input, condition: $condition) {
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
			message {
				items {
					id
					from
					read
					msg
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
export const updateUser = /* GraphQL */ `
	mutation UpdateUser($input: UpdateUserInput!, $condition: ModelUserConditionInput) {
		updateUser(input: $input, condition: $condition) {
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
			message {
				items {
					id
					from
					read
					msg
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
export const deleteUser = /* GraphQL */ `
	mutation DeleteUser($input: DeleteUserInput!, $condition: ModelUserConditionInput) {
		deleteUser(input: $input, condition: $condition) {
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
			message {
				items {
					id
					from
					read
					msg
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
export const createMessage = /* GraphQL */ `
	mutation CreateMessage($input: CreateMessageInput!, $condition: ModelMessageConditionInput) {
		createMessage(input: $input, condition: $condition) {
			id
			from
			read
			msg
			userID
			_version
			_deleted
			_lastChangedAt
			createdAt
			updatedAt
		}
	}
`;
export const updateMessage = /* GraphQL */ `
	mutation UpdateMessage($input: UpdateMessageInput!, $condition: ModelMessageConditionInput) {
		updateMessage(input: $input, condition: $condition) {
			id
			from
			read
			msg
			userID
			_version
			_deleted
			_lastChangedAt
			createdAt
			updatedAt
		}
	}
`;
export const deleteMessage = /* GraphQL */ `
	mutation DeleteMessage($input: DeleteMessageInput!, $condition: ModelMessageConditionInput) {
		deleteMessage(input: $input, condition: $condition) {
			id
			from
			read
			msg
			userID
			_version
			_deleted
			_lastChangedAt
			createdAt
			updatedAt
		}
	}
`;
export const createCalander = /* GraphQL */ `
	mutation CreateCalander($input: CreateCalanderInput!, $condition: ModelCalanderConditionInput) {
		createCalander(input: $input, condition: $condition) {
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
export const updateCalander = /* GraphQL */ `
	mutation UpdateCalander($input: UpdateCalanderInput!, $condition: ModelCalanderConditionInput) {
		updateCalander(input: $input, condition: $condition) {
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
export const deleteCalander = /* GraphQL */ `
	mutation DeleteCalander($input: DeleteCalanderInput!, $condition: ModelCalanderConditionInput) {
		deleteCalander(input: $input, condition: $condition) {
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
export const createEvent = /* GraphQL */ `
	mutation CreateEvent($input: CreateEventInput!, $condition: ModelEventConditionInput) {
		createEvent(input: $input, condition: $condition) {
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
export const updateEvent = /* GraphQL */ `
	mutation UpdateEvent($input: UpdateEventInput!, $condition: ModelEventConditionInput) {
		updateEvent(input: $input, condition: $condition) {
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
export const deleteEvent = /* GraphQL */ `
	mutation DeleteEvent($input: DeleteEventInput!, $condition: ModelEventConditionInput) {
		deleteEvent(input: $input, condition: $condition) {
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
