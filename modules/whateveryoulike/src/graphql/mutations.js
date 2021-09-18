/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
