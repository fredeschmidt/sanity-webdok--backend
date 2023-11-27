export default {
    title: 'Sms beskeder',
    name: 'messages',
    type: 'object',
    fields: [
        {
            title: 'Sms korrespondance',
            name: 'messageKorrespondance',
            type: 'array',
            of: [{type: 'message'}]
        }
    ]
}