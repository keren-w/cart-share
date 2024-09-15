const mongoose = require('mongoose');
const transformId = (doc) => {
    if (Array.isArray(doc)) {
        return doc.map(item => transformId(item));
    } else if (doc !== null && typeof doc === 'object') {
        const transformedDoc = {};
        for (const key in doc) {
            if (key === '_id') {
                transformedDoc['id'] = doc[key];
            } else if (typeof doc[key] === 'object') {
                transformedDoc[key] = transformId(doc[key]);
            } else {
                transformedDoc[key] = doc[key];
            }
        }
        return transformedDoc;
    }
    return doc;
};

function applyToJSONTransform(schema) {
    schema.set('toJSON', {
      transform: function(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
        delete ret.password;
        return ret;
      }
    });
    return schema;
  }

  const createModel = (modelName, schema) => mongoose.model(modelName, applyToJSONTransform(schema));

module.exports = {transformId, createModel};