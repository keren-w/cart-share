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

module.exports = {transformId};