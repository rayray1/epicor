import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { SnackbarProvider } from "notistack";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<SnackbarProvider>
			<App />
		</SnackbarProvider>
	</React.StrictMode>
);
