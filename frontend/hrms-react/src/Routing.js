import JobPostings from "./pages/JobPostings";
import JobPositions from "./pages/JobPositions";
import Candidate from "./pages/users/Candidate";
import Employer from "./pages/users/Employer";
import Resumes from "./pages/Resumes";
import Dashboard from "./layouts/Dashboard";

export const routes = [

    {
        path: "/",
        exact: true,
        component: <Dashboard />,
        title: "Anasayfa",
        isHeaderElement: true,
    },
    {
        path: "/employer",
        exact: true,
        component: <Employer />,
        title: "Employer",
        isHeaderElement: true,
    },
    {
        path: "/candidate",
        exact: true,
        component: <Candidate />,
        title: "Candidate",
        isHeaderElement: true,
    },
    {
        path: "/jobPosting",
        exact: true,
        component: <JobPostings />,
        title: "JobPostings",
        isHeaderElement: true,
    },
    {
        path: "/jobPosition",
        exact: true,
        component: <JobPositions />,
        title: "JobPosition",
        isHeaderElement: true,
    },
    {
        path: "/resume",
        exact: true,
        component: <Resumes />,
        title: "Resume",
        isHeaderElement: true,
    }
];