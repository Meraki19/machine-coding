import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../compoents/error-element/error-elements";
import Accordion from "../compoents/accordion/custom-accordion";
import YoutubeLiveStreamWindow from "../compoents/youtube-live-stream/youtube-live-stream-window";
import RedditNestedComments from "../compoents/reddit-comments/reddit-comments"
import SeachBar from '../compoents/autocomplete-search-bar/search-bar'
import App from "./app";

export const routes = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <App />,
    children: [
      {
        path: "/accordion",
        element: <Accordion />,
      },
      {
        path: "/youtube-live-chat",
        element: <YoutubeLiveStreamWindow />,
      },
      {
        path: "/reddit-comment",
        element: <RedditNestedComments/>
      },
      {
        path:'/search',
        element: <SeachBar/>
      }
    ],
  },
]);
