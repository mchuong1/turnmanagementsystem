const database = require('../lib/database');
const _ = require('lodash');
const moment = require('moment');
const MONGODB_URI = process.env.MONGODB_URI;


const queryDatabase = async (db) => {
  const clients = await db.collection("clients").find({}).toArray();

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(clients),
  };
};

const pushToDatabase = async (db, data) => {
  const clientData = {
    name: _.get(data, 'name'),
    phone_number: _.get(data, 'phoneNumber'),
    appointment_type: _.get(data, 'appointmentType'),
    services: _.get(data, 'services'),
    created_at: moment().format()
  };

  if (clientData.name && clientData.phone_number) {
    await db.collection("clients").insertMany([clientData]);
    return { statusCode: 201 };
  } else {
    return { statusCode: 422 };
  }
};

module.exports.handler = async (event, context) => {
  // otherwise the connection will never complete, since
  // we keep the DB connection alive
  context.callbackWaitsForEmptyEventLoop = false;

  const db = await database.connectToDatabase(MONGODB_URI);
  switch (event.httpMethod) {
    case "GET":
      return queryDatabase(db);
    case "POST":
      return pushToDatabase(db, JSON.parse(event.body));
    default:
      return { statusCode: 400 };
  }
};