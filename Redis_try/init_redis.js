const redis = require('redis');
const client = redis.createClient({
  url: 'redis://default:rLoi4R7GkfJOdkI3OrhVwuSWNwxC8zg4@redis-17541.c305.ap-south-1-1.ec2.cloud.redislabs.com:17541',
});
client.connect(() => {
  console.log('Redis Connected');
});
client.on('ready', () => {
  console.log('Redis is Ready to use');
});
client.on('error', (er) => {
  console.log('Error connecting Redis', er.message);
});
client.on('end', () => {
  console.log('redis disconnected');
});
process.on('SIGINT', () => {
  client.quit();
});

module.exports = client;
