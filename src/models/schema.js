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
				name: {
					name: "name",
					isArray: false,
					type: "String",
					isRequired: true,
					attributes: []
				},
				createdAt: {
					name: "createdAt",
					isArray: false,
					type: "AWSDateTime",
					isRequired: false,
					attributes: [],
					isReadOnly: true
				},
				updatedAt: {
					name: "updatedAt",
					isArray: false,
					type: "AWSDateTime",
					isRequired: false,
					attributes: [],
					isReadOnly: true
				}
			},
			syncable: true,
			pluralName: "Users",
			attributes: [
				{
					type: "model",
					properties: {}
				},
				{
					type: "auth",
					properties: {
						rules: [
							{
								allow: "public",
								operations: ["create", "update", "delete", "read"]
							}
						]
					}
				}
			]
		}
	},
	enums: {},
	nonModels: {},
	version: "98612c8fe1998db7972470a1effb6ac3"
};
