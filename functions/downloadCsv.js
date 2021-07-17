const {connectToDatabase, downloadResource} = require('../lib/database');

const { MONGODB_URI } = process.env;

module.exports.handler = async (event, context) => {
  // otherwise the connection will never complete, since
  // we keep the DB connection alive
  context.callbackWaitsForEmptyEventLoop = false;

  const db = await connectToDatabase(MONGODB_URI);
  const clients = await db.collection("clients").find({}).toArray();
  const fields = [
    {
      label: 'Name',
      value: 'name'
    },
    {
      label: 'Phone Number',
      value: 'phone_number'
    }
  ];
  const csv = downloadResource(fields, clients);

  return {
    headers: {
      'Content-Type': 'text/csv',
      'Content-disposition': 'attachment; filename=customers.csv'
    },
    body: csv,
    statusCode: 200
  }
};