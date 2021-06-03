import {connectRouter} from "connected-react-router";
import {authReducer} from "@redux/auth/Auth.reducer";
import {consoleReducer} from "@redux/console/Console.reducer";
import {historyReducer} from "@redux/history/History.reducer";
import {createBrowserHistory} from "history";

const history = createBrowserHistory();

export const rootReducer = {
    router: connectRouter(history),
    auth: authReducer,
    console: consoleReducer,
    history: historyReducer,
};