export default {
    title: 'Webdok',
    name: 'webdok',
    type: 'document',
    fields: [
        {
            title: 'Rubrik',
            name: 'heading',
            type: 'string',
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 200, // will be ignored if slugify is set
                slugify: input => input
                        .toLowerCase()
                        .replace(/\s+/g, '-')
                        .slice(0, 200)
            }
        },
        {
            title: 'Billede',
            name: 'image',
            type: 'image',
            options: {
            hotspot: true 
            },
            fields: [
                {
                    title: 'Billedetekst',
                    name: 'caption',
                    type: 'string',
                },
                {
                    title: 'Attribute',
                    name: 'attribution',
                    type: 'string',
                }
            ]
        },
        {
            title: 'Artikel indhold',
            name: 'content',
            type: 'array',
            of: [
                {type: 'hero'},
                {type: 'image'},
                {type: 'messages'},
                {type: 'richText'},
                {type: 'sound'},
            ],
        }
    ]
}