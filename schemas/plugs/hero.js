export default{
    title: 'Hero',
    name: 'hero',
    type: 'object',
    fields: [
        {
            title: 'Titel',
            name: 'heading',
            type: 'string',
        },
        {
            title: 'Undertitel',
            name: 'subheading',
            type: 'string',
        },
        {
            title: 'Billede',
            name: 'image',
            type: 'image',
            options: {
              hotspot: true // <-- Defaults to false
            },
            fields: [
                {
                    title: 'Attribute',
                    name: 'attribution',
                    type: 'string',
                }
            ]
        },
    ]
}