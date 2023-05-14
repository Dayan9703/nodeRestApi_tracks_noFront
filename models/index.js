
const engine = process.env.ENGINE_DB || null;

const pathModel = engine === "mysql" ? "./mysql" : "./nosql"

const models = {
    userModel: require(`${pathModel}/users`),
    storageModel: require(`${pathModel}/storage`),
    tracksModel: require(`${pathModel}/tracks`),
};


module.exports = models;