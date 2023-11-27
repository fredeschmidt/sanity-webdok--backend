export default {
    title: 'Besked',
    name: 'message',
    type: 'object',
    fields: [
        {
            title: 'Afsender',
            name: 'sender',
            type: 'string',
        },
        {
            title: 'Besked',
            name: 'messageContent',
            type: 'text',
        },
        {
            title: 'Afsender?',
            name: 'messageFrom',
            type: 'boolean'
          }
    ]
}