const sidebarState = {
    sidebar: {
        collapsed: false,
        sections: [
            {
                iconName: "Dashboard",
                slug: "dashboard",
                name: "Dashboard",
                open: true,
                links: [
                    {
                        slug: "dashboard_my_week",
                        iconName: "ViewWeek",
                        href: "/dashboard/my_week",
                        value: "My Week"
                    }
                ]
            },
            {
                iconName: "DeveloperBoard",
                slug: "my_projects",
                name: "My Projects",
                open: true,
                links: [
                    {
                        slug: "my_projects_test",
                        iconName: "StarRate",
                        href: "/my_projects/test",
                        value: "Test"
                    }
                ]
            },
            {
                iconName: "People",
                slug: "team",
                name: "Team",
                open: true,
                links: [
                    {
                        slug: "team_front_end",
                        iconName: "PeopleOutline",
                        href: "/team/front_end",
                        value: "Front End"
                    },
                    {
                        slug: "team_success_team",
                        iconName: "PeopleOutline",
                        href: "/team/success_team",
                        value: "Success Team"
                    }
                ]
            }
        ]
    }
};

export default sidebarState;
