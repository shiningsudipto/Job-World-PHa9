import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Main from './components/Layout/Main';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import JobDetails from './components/FeaturedJobs/JobDetails';
import Page404 from './components/Page404';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Page404></Page404>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        errorElement: <Page404></Page404>
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>,
        errorElement: <Page404></Page404>
      },
      {
        path: "appliedJobs",
        element: <AppliedJobs></AppliedJobs>,
        errorElement: <Page404></Page404>
      },
      {
        path: "jobDetails/:jobId",
        element: <JobDetails></JobDetails>,
        errorElement: <Page404></Page404>,
        loader: ({ jobId }) => fetch('/jobs.json')
      },
      {
        path: "blog",
        element: <Blog></Blog>,
        errorElement: <Page404></Page404>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
