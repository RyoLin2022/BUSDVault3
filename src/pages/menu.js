const menus = [
    {
        id: 1,
        name: 'Home',
        links: '/',
        namesub: [
            {
                id: 1,
                sub: 'Home',
                links: '/'
            },
        ]
    },
    {
        id: 2,
        name: 'About',
        links: '#',
        namesub: [
            {
                id: 1,
                sub: 'About',
                links: '/about-v1'
            },
            {
                id: 3,
                sub: 'Coming Soon',
                links: '/coming-soon'
            },
            {
                id: 4,
                sub: 'Team Details',
                links: '/team-details'
            },
            {
                id: 5,
                sub: 'FAQ',
                links: '/faq'
            },
            {
                id: 6,
                sub: '404',
                links: '/404'
            },

        ]
    },
    {
        id: 3,
        name: 'Road Map',
        links: '/road-map-v2',
        namesub: [
            {
                id: 1,
                sub: 'Road Map',
                links: '/road-map-v2'
            },
        ]
    },
    {
        id: 4,
        name: 'Nft',
        links: '#',
        namesub: [
            {
                id: 1,
                sub: 'Nft Item',
                links: '/nft-item'
            },
            {
                id: 2,
                sub: 'Nft Item Details',
                links: '/nft-item-details'
            },
        ],
    },
    {
        id: 5,
        name: 'Contact',
        links: '/contact'
    },
    
]

export default menus;