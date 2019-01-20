const sidebarState = {
    sidebar: {
        collapsed: false,
        sections: [
            {
                iconName: "Dashboard",
                name: "Dashboard",
                links: [
                    {
                        iconName: "ViewWeek",
                        href: "/dashboard/my_week",
                        value: "My Week"
                    }
                ]
            },
            {
                iconName: "DeveloperBoard",
                name: "My Projects",
                links: [
                    {
                        iconName: "StarRate",
                        href: "/my_projects/test",
                        value: "Test"
                    }
                ]
            },
            {
                iconName: "People",
                name: "Team",
                links: [
                    {
                        iconName: "PeopleOutline",
                        href: "/team/front_end",
                        value: "Front End"
                    }
                ]
            }
        ]
    }
};

export default sidebarState;
