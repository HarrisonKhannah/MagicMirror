export const schema = {
	models: {
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
				}
			},
			syncable: true,
			pluralName: "Calanders",
			attributes: [
				{
					type: "model",
					properties: {}
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
		}
	},
	enums: {},
	nonModels: {},
	version: "1445a2104bf0ec7566f1c41a09f1b29a"
};
