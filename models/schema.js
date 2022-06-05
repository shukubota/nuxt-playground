export const schema = {
  models: {
    StarndartCard: {
      name: 'StarndartCard',
      fields: {
        id: {
          name: 'id',
          isArray: false,
          type: 'ID',
          isRequired: true,
          attributes: [],
        },
        title: {
          name: 'title',
          isArray: false,
          type: 'String',
          isRequired: false,
          attributes: [],
        },
        desc1: {
          name: 'desc1',
          isArray: false,
          type: 'String',
          isRequired: false,
          attributes: [],
        },
        desc2: {
          name: 'desc2',
          isArray: false,
          type: 'String',
          isRequired: false,
          attributes: [],
        },
        image_url: {
          name: 'image_url',
          isArray: false,
          type: 'String',
          isRequired: false,
          attributes: [],
        },
        imagePath: {
          name: 'imagePath',
          isArray: false,
          type: 'String',
          isRequired: false,
          attributes: [],
        },
        createdAt: {
          name: 'createdAt',
          isArray: false,
          type: 'AWSDateTime',
          isRequired: false,
          attributes: [],
          isReadOnly: true,
        },
        updatedAt: {
          name: 'updatedAt',
          isArray: false,
          type: 'AWSDateTime',
          isRequired: false,
          attributes: [],
          isReadOnly: true,
        },
      },
      syncable: true,
      pluralName: 'StarndartCards',
      attributes: [
        {
          type: 'model',
          properties: {},
        },
        {
          type: 'auth',
          properties: {
            rules: [
              {
                allow: 'public',
                operations: ['create', 'update', 'delete', 'read'],
              },
            ],
          },
        },
      ],
    },
  },
  enums: {},
  nonModels: {},
  version: '9069e79c1004baa368695a6edfbb602c',
}
