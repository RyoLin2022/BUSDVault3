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
                id: 2,
                sub: 'Team Details',
                links: '/team-details'
            },
        ]
    },
    {
        id: 3,
        name: 'Road Map',
        links: '#',
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
        name: 'Vault',
        links: '#',
        namesub: [
            {
                id: 1,
                sub: 'Vault',
                links: '/vault'
            },
        ]
    },
    {
        id: 5,
        name: 'IDO',
        links: '#',
        namesub: [
            {
                id: 1,
                sub: 'Vault',
                links: '/ido'
            },
        ]
    },
    
]

export default menus;