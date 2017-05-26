module.exports = {
    'type': 'object',
    'properties': {
        'tiles': {
            'id': '/properties/tiles',
            'type': 'array',
            'minItems': 1,
            'items': {
                'id': '/properties/tiles/items',
                'properties': {
                    'classList': {
                        'id': '/properties/tiles/items/properties/classList',
                        'type': 'string'
                    },
                    'id': {
                        'id': '/properties/tiles/items/properties/id',
                        'type': 'string'
                    },
                    'position': {
                        'id': '/properties/tiles/items/properties/position',
                        'properties': {
                            'columnEnd': {
                                'id': '/properties/tiles/items/properties/position/properties/columnEnd',
                                'type': 'integer'
                            },
                            'columnStart': {
                                'id': '/properties/tiles/items/properties/position/properties/columnStart',
                                'type': 'integer'
                            },
                            'rowEnd': {
                                'id': '/properties/tiles/items/properties/position/properties/rowEnd',
                                'type': 'integer'
                            },
                            'rowStart': {
                                'id': '/properties/tiles/items/properties/position/properties/rowStart',
                                'type': 'integer'
                            }
                        },
                        'required': [
                            'rowStart',
                            'columnEnd',
                            'columnStart',
                            'rowEnd'
                        ],
                        'type': 'object'
                    },
                    'presets': {
                        'id': '/properties/tiles/items/properties/presets',
                        'properties': {
                            'refreshRate': {
                                'id': '/properties/tiles/items/properties/presets/properties/refreshRate',
                                'type': 'integer'
                            },
                            'scrollTop': {
                                'id': '/properties/tiles/items/properties/presets/properties/scrollTop',
                                'type': 'number'
                            },
                            'zoomFactor': {
                                'id': '/properties/tiles/items/properties/presets/properties/zoomFactor',
                                'type': 'number'
                            }
                        },
                        'type': 'object'
                    },
                    'src': {
                        'id': '/properties/tiles/items/properties/src',
                        'type': 'string'
                    }
                },
                'required': [
                    'src',
                    'position',
                    'id'
                ],
                'type': 'object'
            }
        },
        'title': {
            'id': '/properties/title',
            'type': 'string'
        }
    },
    'required': [
        'tiles'
    ]
}
