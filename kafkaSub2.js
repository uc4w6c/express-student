const { Kafka } = require('kafkajs');

// kafkaSub.jsとkafkaSub2.jsを起動すると、RoundRobinして自動的に1つ側だけに送信してくれる
const kafka = new Kafka({
  clientId: 'my-app2',
  brokers: ['localhost:9092']
});

const consumer = kafka.consumer({ groupId: 'test-group' });

const subscribe = async() => {
  await consumer.connect();
  await consumer.subscribe({ topic: 'test-topic', fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        value: message.value.toString(),
      })
    },
  });
};
subscribe();
