export const schema = {
	models: {
		Users: {
			name: "Users",
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
	version: "67a3379fdb41b8b558cabf51fa4a60d1"
};
