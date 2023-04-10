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
import FeaturedJobs from './components/FeaturedJobs/FeaturedJobs';
import JobDetails from './components/FeaturedJobs/JobDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,

      },
      {
        path: "statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "appliedJobs",
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path: "jobDetails/:jobId",
        element: <JobDetails></JobDetails>,
        loader: ({ jobId }) => fetch('jobs.json')
      },
      {
        path: "blog",
        element: <Blog></Blog>
      },
      // {
      //   path: 'featuredjobs',
      //   element: <FeaturedJobs></FeaturedJobs>,
      //   loader: () => fetch('jobs.json')
      // }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
