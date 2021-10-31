export const schema = {
	models: {
		User: {
			name: "User",
			fields: {
				id: {
					name: "id",
					isArray: false,
					type: "ID",
					isRequired: true,
					attributes: []
				},
				uuid: {
					name: "uuid",
					isArray: false,
					type: "String",
					isRequired: true,
					attributes: []
				},
				name: {
					name: "name",
					isArray: false,
					type: "String",
					isRequired: true,
					attributes: []
				},
				timezone: {
					name: "timezone",
					isArray: false,
					type: "String",
					isRequired: false,
					attributes: []
				},
				happiness: {
					name: "happiness",
					isArray: false,
					type: "Int",
					isRequired: true,
					attributes: []
				},
				calander: {
					name: "calander",
					isArray: true,
					type: {
						model: "Calander"
					},
					isRequired: true,
					attributes: [],
					isArrayNullable: true,
					association: {
						connectionType: "HAS_MANY",
						associatedWith: "userID"
					}
				},
				message: {
					name: "message",
					isArray: true,
					type: {
						model: "Message"
					},
					isRequired: true,
					attributes: [],
					isArrayNullable: true,
					association: {
						connectionType: "HAS_MANY",
						associatedWith: "userID"
					}
				}
			},
			syncable: true,
			pluralName: "Users",
			attributes: [
				{
					type: "model",
					properties: {}
				}
			]
		},
		Calander: {
			name: "Calander",
			fields: {
				id: {
					name: "id",
					isArray: false,
					type: "ID",
					isRequired: true,
					attributes: []
				},
				uuid: {
					name: "uuid",
					isArray: false,
					type: "String",
					isRequired: true,
					attributes: []
				},
				Events: {
					name: "Events",
					isArray: true,
					type: {
						model: "Event"
					},
					isRequired: false,
					attributes: [],
					isArrayNullable: true,
					association: {
						connectionType: "HAS_MANY",
						associatedWith: "calanderID"
					}
				},
				userID: {
					name: "userID",
					isArray: false,
					type: "ID",
					isRequired: false,
					attributes: []
				}
			},
			syncable: true,
			pluralName: "Calanders",
			attributes: [
				{
					type: "model",
					properties: {}
				},
				{
					type: "key",
					properties: {
						name: "byUser",
						fields: ["userID"]
					}
				}
			]
		},
		Event: {
			name: "Event",
			fields: {
				id: {
					name: "id",
					isArray: false,
					type: "ID",
					isRequired: true,
					attributes: []
				},
				name: {
					name: "name",
					isArray: false,
					type: "String",
					isRequired: true,
					attributes: []
				},
				room: {
					name: "room",
					isArray: false,
					type: "String",
					isRequired: true,
					attributes: []
				},
				time: {
					name: "time",
					isArray: false,
					type: "AWSDateTime",
					isRequired: false,
					attributes: []
				},
				calanderID: {
					name: "calanderID",
					isArray: false,
					type: "ID",
					isRequired: false,
					attributes: []
				}
			},
			syncable: true,
			pluralName: "Events",
			attributes: [
				{
					type: "model",
					properties: {}
				},
				{
					type: "key",
					properties: {
						name: "byCalander",
						fields: ["calanderID"]
					}
				}
			]
		},
		Message: {
			name: "Message",
			fields: {
				id: {
					name: "id",
					isArray: false,
					type: "ID",
					isRequired: true,
					attributes: []
				},
				from: {
					name: "from",
					isArray: false,
					type: "String",
					isRequired: true,
					attributes: []
				},
				read: {
					name: "read",
					isArray: false,
					type: "Boolean",
					isRequired: true,
					attributes: []
				},
				msg: {
					name: "msg",
					isArray: false,
					type: "String",
					isRequired: true,
					attributes: []
				},
				userID: {
					name: "userID",
					isArray: false,
					type: "ID",
					isRequired: false,
					attributes: []
				}
			},
			syncable: true,
			pluralName: "Messages",
			attributes: [
				{
					type: "model",
					properties: {}
				},
				{
					type: "key",
					properties: {
						name: "byMessage",
						fields: ["userID"]
					}
				}
			]
		}
	},
	enums: {},
	nonModels: {},
	version: "fe24dea83575b01a42edd687a2682390"
};
