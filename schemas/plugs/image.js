export default{
    title: 'Billede',
    name: 'billede',
    type: 'image',
    options: {
        hotspot: true 
    },
    fields: [
        {
            name: 'caption',
            type: 'string',
            title: 'Caption',
        },
        {
            name: 'attribution',
            type: 'string',
            title: 'Attribution',
        }
    ]
}