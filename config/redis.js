const redis = require('redis');
const redisClient = redis.createClient();

redisClient.on('error', error => {
    console.error('Could not connect to redis', error);
})

redisClient.on('connect', () => {
    console.log('Successfully connected to redis');
    redisClient.quit();
})

module.exports = redisClient;
