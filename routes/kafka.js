const express = require('express');
const { Kafka } = require('kafkajs');

const router = express.Router();

router.get('/', async function(req, res, next) {
    const kafka = new Kafka({
	clientId: 'my-app',
	brokers: ['localhost:9092']
    });
    const producer = kafka.producer();

    await producer.connect();
    await producer.send({
	topic: 'test-topic',
	messages: [
	    { value: 'Hello KafkaJS user!' },
	],
    });

    await producer.disconnect();

    res.send('kafka hello');
});

module.exports = router;

