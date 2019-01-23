const sidebarState = {
  sidebar: {
    collapsed: false,
    sections: [
      {
        iconName: "DashboardRounded",
        path: "/dashboard",
        slug: "dashboard",
        name: "Dashboard",
        open: true,
          crud: {
              create: {
                  iconName: "AddRounded",
                  href: "/new",
                  value: "Add Dashboard"
              }
          },
        links: [
          {
            slug: "dashboard_my_week",
            iconName: "ViewWeekRounded",
            href: "/dashboard/my_week",
            value: "My Week"
          },
          {
            slug: "dashboard_my_timesheet",
            iconName: "EventNoteRounded",
            href: "/dashboard/my_timesheet",
            value: "My Timesheet"
          }
        ]
      },
      {
        iconName: "ChromeReaderModeRounded",
        path: "/my_projects",
        slug: "my_projects",
        name: "My Projects",
        open: true,
          crud: {
              create: {
                  iconName: "AddRounded",
                  href: "/new",
                  value: "Add Project"
              }
          },
        links: [
          {
            slug: "my_projects_test",
            iconName: "StarRounded",
            href: "/my_projects/test",
            value: "Test"
          },
          {
            slug: "my_projects_very_first",
            iconName: "StarRounded",
            href: "/my_projects/very_first",
            value: "My very first project"
          },
          {
            slug: "my_projects_private_board",
            iconName: "StarRounded",
            href: "/my_projects/private_board",
            value: "Private board"
          },
          {
            slug: "my_projects_blueoceantech",
            iconName: "StarRounded",
            href: "/my_projects/blueoceantech",
            value: "Blueoceantech"
          }
        ]
      },
      {
        iconName: "PeopleRounded",
        path: "/team",
        slug: "team",
        name: "Team",
        open: true,
        crud: {
          create: {
            iconName: "AddRounded",
            href: "/new",
            value: "Add Team"
          }
        },
        links: [
          {
            slug: "team_front_end",
            iconName: "PeopleOutlineRounded",
            href: "/team/front_end",
            value: "Front End"
          },
          {
            slug: "team_success_team",
            iconName: "PeopleOutlineRounded",
            href: "/team/success_team",
            value: "Success Team"
          }
        ]
      }
    ]
  }
};

export default sidebarState;
