import { lazy } from "react";

const Main = lazy(() => import("../Pages/Main"))
const Emails = lazy(() => import("../Components/Emails"))
const ViewEmails = lazy(() => import("../Components/viewEmails"))

const routes = {
    main: {
        path: "/",
        element: Main
    },
    emails: {
        path: "/emails",
        element: Emails
    },
    view: {
        path: "/view",
        element: ViewEmails
    },
    invalid: {
        path: "/*",
        element: Emails
    },
}
export { routes };