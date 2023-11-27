import * as plugs from './plugs'
import * as objects from './objects'
import * as documents from './documents'

const allPlugs = Object.values(plugs).map((plug) => {
    return {...plug, fields: plug.fields}
});

const allObjects = Object.values(objects).map((object) => {
    return {...object, fields: object.fields}
});

const allDocuments = Object.values(documents).map((document) => {
    return {...document, fields: document.fields}
});

export const schemaTypes = [...allPlugs, ...allObjects, ...allDocuments];
